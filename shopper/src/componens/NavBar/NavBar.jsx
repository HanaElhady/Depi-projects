import React from 'react'
import logo from '../Assets/Assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import cart from '../Assets/Assets/cart_icon.png'
export default function NavBar() {
    const [menu, setMenu] = useState('shop')

  return (
     <div className="navBar">
         <div className="nav-logo">
             <img src = {logo} alt ='' />
             <p>shopper</p>
          </div>

        <ul className="nav-menu">
            <li onClick = { ()=> setMenu('shop')}><Link to ='/'>Shop</Link>{menu === 'shop' ? <hr /> : <></>}</li>
            <li onClick = { ()=> setMenu('men')}><Link to ='men'>Men</Link>{menu === 'men' ? <hr /> : <></>}</li>
            <li onClick = { ()=> setMenu('women')}><Link to ='women'>Women</Link>{menu === 'women' ? <hr /> : <></>}</li>
            <li onClick = { ()=> setMenu('kids')}><Link to ='kids'>Kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
            </ul>
    <div className="nav-login-cart">
        <button>Login</button>
        <img src = {cart} alt =''/>
    </div>
    </div>
  )
}
