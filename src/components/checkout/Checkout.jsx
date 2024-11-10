import { useState } from "react";
import FormCheckout from "./FormCheckout";
import { useContext } from "react";
import {CartContext} from "../../context/CartContext"
import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore";
import db from "../../db/db.js"
import { Link } from "react-router-dom";

const Checkout = () => {
    const [dataForm,setDataform] = useState({
        fullname:"",
        telefono:"",
        email:"",
    })
    const[orderId,setOrderId] = useState(null)
    const {cart, totalPrecio, deleteCart} = useContext(CartContext)

const handleChangeInput = (event) => {
    setDataform({...dataForm, [event.target.name]: event.target.value})
}

const handleSubmitForm = (event) => {
    event.preventDefault();
    
    const order = {
        buyer: { ...dataForm },
        products: [...cart],
        date: Timestamp.now(), // Si usas Firebase; de lo contrario, usa `new Date()`
        total: totalPrecio()
    };

    uploadOrder(order)
};

const uploadOrder = (newOrder) => {
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, newOrder)
      .then((response) => {
        setOrderId(response.id)
      })
      .finally(()=>{
        //vacia el carrito
        updateStock()
      })
  }

  const updateStock = () =>{
    cart.map(( { id,quantity, ...productCart } )=> {
      const productRef = doc( db, "products", id )
      setDoc(productRef, { ...productCart, stock: productCart.stock - quantity })
    })
    //vaciamos el carrito
    deleteCart()
  }




  return (
    <div className="checkout">
      {
        orderId ? (
          <div>
            <h2>Orden enviada correctamente 😁</h2>
            <p>Guarde su número de seguimiento: {orderId}</p>
            <Link to="/" className="button-to-home">Volver al inicio</Link>
          </div>
        ) : (
          <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
        )
      }
    </div>
  )
}
export default Checkout