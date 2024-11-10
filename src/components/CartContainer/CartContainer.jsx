import { useContext } from "react";
import {CartContext} from "../../context/CartContext"
import "./CartContainer.css"
import { Link } from "react-router-dom";

const CartContainer = ( ) => {
    const {cart, totalPrecio, deleteProductInCart, deleteCart} = useContext(CartContext)


    if(cart.length === 0){
        return(
            <div>
                <h2>No hay productos agregados!!</h2>
                <Link to="/" >volver al inicio</Link>
            </div>
        )
    }

    return(
        <div>
            <h1>Tu carrito:</h1>
            {
                cart.map((productCart) => (
                    <div  className="carts" key={productCart.id}>
                        <img src={productCart.imagen} width={100} alt="" />
                        <p>{productCart.nombre}</p>
                        <p>precio c/u: {productCart.precio}</p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>Precio parcial:{productCart.precio * productCart.quantity}</p>
                        <button onClick={() => deleteProductInCart(productCart.id)}>Borrar producto</button>
                    </div>
                ))
            }
            <p>Precio total: {totalPrecio()} </p>
            <Link to="/checkout" >Continuar con mi compra</Link>
            <button onClick={deleteCart}> vaciar carrito</button>

        </div>
    )
}

export default CartContainer