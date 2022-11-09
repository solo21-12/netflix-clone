/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../download.png"
import "../../style/home.css"
const NavBar = () => {
  return (
    <div className={`nav-wrapper d-flex justify-content-between navbar navbar-dark `}>
      <div className='navBar'>
        <img className='img-fluid' src={logo} alt='logo'></img>
      </div>
      <div className='navBar avator pe-5'>
        <button className='btn btn-danger'><NavLink className='signIn' to="/signin">Sign in</NavLink></button>
      </div>
    </div>);
}

export default NavBar;