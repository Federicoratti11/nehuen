import { useContext } from "react";
import {CartContext} from "../../context/CartContext"
import "./CartContainer.css"

const CartContainer = ( ) => {
    const {cart, totalPrecio, deleteProductInCart} = useContext(CartContext)

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

        </div>
    )
}

export default CartContainer