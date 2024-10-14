import { useState, useEffect } from 'react'
import ItemList from './ItemList.jsx'
import { getProducts } from '../data/data.js'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"
import React from 'react'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState ([])
  const {idCategoria} = useParams ()

useEffect( ()=>{ getProducts()
  .then((data) => {
    if(idCategoria){ 
      const filterProducts = data.filter ((product)=> product.categoria === idCategoria)
      setProducts(filterProducts)

    }else{
      setProducts(data)
    }
  })
  .catch((error) => {
    console.error(error)
  })
  .finally(() => {
    console.log("finalizo la promesa")
  })
},[idCategoria])




  return (
    <>
    <h1>{greeting}</h1>

    <div className='itemlistcontainer'>
      
      <ItemList products={products} />

    </div>
    </>
  )
}

export default ItemListContainer
