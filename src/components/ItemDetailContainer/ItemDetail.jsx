import React from 'react'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product, addProduct, hideItemCount }) => {
  // Verificar si product y product.imagen están definidos antes de usarlos
  const [currentImage, setCurrentImage] = useState(product?.imagen?.[0] || '');

  const images = product?.imagen?.filter((imagen) => imagen !== currentImage) || [];


  return (
    <div className="itemdetailcontainer">
      <div className=''></div>
    <div className="product-image-container">
      

      <div className="secondary-images">
          {
            images.map( (imagen)=> (
              <img src={imagen} key={imagen} onClick={ () => setCurrentImage(imagen) } />
            ))
          }
        </div>

        <div className='main-imagen'>
        <img src={currentImage} alt={product.nombre} className="product-detail-image" />
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
