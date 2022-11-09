/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react'
import logo from "../../download.png"
import avator from '../../avater.png'
import "../../style/navbar.css"
const NavBar = () => {
  const [show, setShow] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >100){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
    return ()=>{
      window.removeEventListener("scroll")
    }
  },[]) 
  return (
    <div className={`nav-wrapper d-flex justify-content-between navbar fixed-top navbar-dark ${show && "nav_black"}`}>
      <div className='navBar'>
        <img className='img-fluid' src={logo} alt='logo'></img>
      </div>
      <div className='navBar avator pe-2'>
        <img className='img-fluid' src={avator} alt='avator'></img>
      </div>
    </div>);
}

export default NavBar;