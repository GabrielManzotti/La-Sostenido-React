import Logotipo from '../Images/Logotipo.png'
import React from "react";
import "../Navbar/styles.css"
import Cartwidget from '../circleShoppCart/Cartwidget';

import { AiOutlineShoppingCart } from "react-icons/ai"

const Navbar = ({categoria1, categoria2, categoria3}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark display-line">
        <div className="container-fluid">
          <a className="navbar-brand" href="./index.html"><img src={Logotipo} alt="Logo header" className="img-fluid marginLogo" width="170px" height="130px" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse display-dropdown" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="./index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="./index.html">{categoria1}</a></li>
                  <li><a className="dropdown-item" href="./index.html">{categoria2}</a></li>
                  <li><a className="dropdown-item" href="./index.html">{categoria3}</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='div-iconShoppingCart'>
            <h1 className='icon-shoppingCart'><AiOutlineShoppingCart size={28} /></h1>
            <Cartwidget
            quantity={1}
            >
            </Cartwidget>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar