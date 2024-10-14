import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div className="itemdetailcontainer">
    <div className="product-image-container">
      <img src={product.imagen} alt={product.nombre} className="product-detail-image" />
    </div>
    <div className="product-detail-content">
      <h2 className="product-detail-title">{product.nombre}</h2>
      <p className="product-detail-price">Precio: ${product.precio}</p>
      <p className="product-detail-description">{product.descripcion}</p>
    </div>
  </div>
  )
}

export default ItemDetail
