import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])


    const addProductInCart = (newProduct) => {
        setCart((prevCart) => {
            // Verifica si el producto ya existe en el carrito
            const productExists = prevCart.find((product) => product.id === newProduct.id);
    
            if (productExists) {
                // Calcula la nueva cantidad considerando el stock
                const newQuantity = productExists.quantity + newProduct.quantity;
    
                // Si la nueva cantidad supera el stock disponible, muestra un alert y ajusta la cantidad al máximo permitido
                if (newQuantity > newProduct.stock) {
                    alert(`Actualmente solo contamos con: ${newProduct.stock} unidades de este producto.`);
                    return prevCart.map((product) =>
                        product.id === newProduct.id
                            ? { ...product, quantity: newProduct.stock } // Asigna el máximo stock disponible
                            : product
                    );
                } else {
                    // Si no supera el stock, actualiza la cantidad normalmente
                    return prevCart.map((product) =>
                        product.id === newProduct.id
                            ? { ...product, quantity: newQuantity }
                            : product
                    );
                }
            } else {
                // Si el producto no está en el carrito y la cantidad solicitada es mayor al stock, muestra un alert
                if (newProduct.quantity > newProduct.stock) {
                    alert(`Actualmente solo contamos con: ${newProduct.stock} unidades de este producto.`);
                    return [...prevCart, { ...newProduct, quantity: newProduct.stock }];
                }
                // Si la cantidad es menor o igual al stock, lo agrega al carrito
                return [...prevCart, { ...newProduct, quantity: newProduct.quantity }];
            }
        });
    };
    


// suma la cantidad del carrito
const totalQuantity = () =>{
    const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0 )
    return quantity
}


//funcionar para eliminar producto por id
const deleteProductInCart = (idProduct) => {
    const productsFilter = cart.filter ((productCart) => productCart.id !== idProduct)
    setCart(productsFilter)
}

  //funcion para vaciar el carrito
  const deleteCart = () => {
    setCart([])
  }

//funcionar para precio total de la compra
const totalPrecio = () => {
    const precio = cart.reduce((total, productCart) => total +(productCart.precio * productCart.quantity), 0)
    return precio
}

    return(
        <CartContext.Provider value={{cart , addProductInCart, totalQuantity, totalPrecio, deleteProductInCart, deleteCart}}>
            {children}
        </CartContext.Provider>

    )
}

export {CartContext , CartProvider}