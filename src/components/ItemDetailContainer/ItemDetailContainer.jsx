import React, { useState, useEffect } from 'react'
import "./itemDetailContainer.css"
import { getProduct } from '../data/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProducts] = useState ({})
    const {idProduct} = useParams ()
    useEffect(() => {
        getProduct(idProduct)
        .then((data) => setProducts(data))
    }, [idProduct])


  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer
