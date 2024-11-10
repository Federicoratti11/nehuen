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
        <div className="cart-container">
    <h1>Tu carrito:</h1>
    {
        cart.map((productCart) => (
            <div className="cart-item" key={productCart.id}>
                <img src={productCart.imagen} alt={productCart.nombre} className="cart-image" />
                <div className="cart-details">
                    <p className="cart-name">{productCart.nombre}</p>
                    <p className="cart-price">Precio c/u: {productCart.precio}</p>
                    <p className="cart-quantity">Cantidad: {productCart.quantity}</p>
                    <p className="cart-subtotal">Precio parcial: {productCart.precio * productCart.quantity}</p>
                    <button className="delete-btn" onClick={() => deleteProductInCart(productCart.id)}>Borrar producto</button>
                </div>
            </div>
        ))
    }
    <div className="cart-total">
        <p>Precio total: {totalPrecio()}</p>
        <Link to="/checkout" className="checkout-btn">Continuar con mi compra</Link>
        <button className="clear-cart-btn" onClick={deleteCart}>Vaciar carrito</button>
    </div>
</div>
    )
}

export default CartContainer