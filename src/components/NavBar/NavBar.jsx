import React from 'react';
import logo from "../../assets/logo.jpg"
import CartWidget from './CartWidget';
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className="navbar">
 <div className="brand">

    <img src={logo} alt="logo" width={80} /> 
 </div>


    <ul className="nav justify-content-center">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Fruta</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Verdura</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Almacén</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Combos</a>
        </li>
    </ul>
    <CartWidget />
    </nav>
  );
};

export default NavBar;