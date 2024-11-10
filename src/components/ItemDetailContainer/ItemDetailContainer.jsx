import React, { useState, useEffect } from 'react'
import "./itemDetailContainer.css"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { doc, getDoc } from 'firebase/firestore'
import db from '../../db/db'

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


const getProduct = () => {
  const docRef = doc(db, "products", idProduct);
  getDoc(docRef)
    .then((dataDb) => {
      if (dataDb.exists()) {
        const productDb = { id: dataDb.id, ...dataDb.data() };
        setProducts(productDb);
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.error("Error fetching document:", error);
    });
};


    useEffect(() => {
      getProduct()
    }, [idProduct])


  return (
    <ItemDetail product={product}  addProduct={addProduct}   hideItemCount={hideItemCount} />
  )
}

export default ItemDetailContainer
