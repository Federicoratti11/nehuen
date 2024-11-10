import React, { useState, useEffect } from 'react'
import "./itemDetailContainer.css"
import { getProduct } from '../data/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetailContainer = () => {
    const [product, setProducts] = useState ({})
    const [hideItemCount, setHideItemCount] = useState (false)
    const {addProductInCart} = useContext(CartContext)
    const {idProduct} = useParams ()

const addProduct = (count) => {
const productCart = {...product, quantity : count}
addProductInCart(productCart)
//muestra el boton finalizar compra
setHideItemCount(true)
}


    useEffect(() => {
        getProduct(idProduct)
        .then((data) => setProducts(data))
    }, [idProduct])


  return (
    <ItemDetail product={product}  addProduct={addProduct}   hideItemCount={hideItemCount} />
  )
}

export default ItemDetailContainer
