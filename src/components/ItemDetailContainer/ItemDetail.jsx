import React from 'react'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product, addProduct, hideItemCount }) => {



  return (
    <div className="itemdetailcontainer">
    <div className="product-image-container">
      

        <div className='main-imagen'>
        <img src={product.imagen} alt={product.nombre} className="product-detail-image" />
        </div>
    </div>

    <div className="product-detail-content">
      <h2 className="product-detail-title">{product.nombre}</h2>
      <p className="product-detail-price">Precio: ${product.precio}</p>
      {
        hideItemCount === true ? (
          <Link to="/cart" >Terminar mi compra</Link> 
        ) : (

          <ItemCount stock={product.stock}   addProduct={addProduct} />

        )
      }
  
      <p className="product-detail-description">{product.descripcion}</p>
    </div>
  </div>
  )
}

export default ItemDetail
