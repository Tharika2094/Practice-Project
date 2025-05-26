import React from 'react'
import {Router,Route,Routes,Link} from 'react-router-dom'
import logo from '../asserts/logo.png'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navSection'>
        <div className='leftNav'>
            <img className='logo' src={logo}></img>
        </div>
        <div className='rightNav'>
                <Link to="/">Home</Link>   
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}
