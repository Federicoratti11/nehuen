import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])


//agregar productos al carrito    
const addProductInCart = (newProduct) => {
    setCart((prevCart) => {
        // Verifica si el producto ya existe en el carrito
        const productExists = prevCart.find((product) => product.id === newProduct.id);

        if (productExists) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            return prevCart.map((product) =>
                product.id === newProduct.id
                    ? { ...product, quantity: product.quantity + newProduct.quantity }
                    : product
            );
        } else {
            // Si el producto no está en el carrito, lo agrega
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


//funcionar para precio total de la compra
const totalPrecio = () => {
    const precio = cart.reduce((total, productCart) => total +(productCart.precio * productCart.quantity), 0)
    return precio
}

    return(
        <CartContext.Provider value={{cart , addProductInCart, totalQuantity, totalPrecio, deleteProductInCart}}>
            {children}
        </CartContext.Provider>

    )
}

export {CartContext , CartProvider}