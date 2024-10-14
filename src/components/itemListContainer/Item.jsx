import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
return (
    <Link className='item' to={"detalle/" + product.id }> 
    <img src={product.imagen} alt={product.nombre} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{product.nombre}</h3>
        <p className="card-price">Precio: ${product.precio}</p>
      </div>
</Link>
)
}

export default Item
