import React from 'react';
import logo from "../../assets/logo.png"
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import "./navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar">


      <Link to="/" className="brand">
        <img src={logo} alt="logo" width={80} /> 
      </Link>


    <ul className="nav justify-content-center">
        <li className="nav-item">
        <Link className="nav-link"  to="/categoria/fruta">Fruta</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to="/categoria/verdura">Verdura</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to="/categoria/almacen">Almacen</Link>
        </li>
    </ul>
    <CartWidget />
    </nav>
  );
};

export default NavBar;