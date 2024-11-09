import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { BsBasket2Fill } from "react-icons/bs";
import { Link } from 'react-router-dom';



const CartWidget = () => {
  const{ totalQuantity }= useContext(CartContext)

  return (
    <Link to="/cart" className='cartwidget' >
        <p>{totalQuantity()}</p>
      <BsBasket2Fill size={30}/>
    </Link>
  )
}

export default CartWidget
