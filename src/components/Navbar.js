import React from 'react'
import logo from './imgs/nav-logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar_logo'>
            <Link to='/'> <img src={logo} alt="logo" /></Link>
            </div>
            <div className='nav_items'>
                <p className='nav_item'>ANNOUNCEMENTS</p>
                <p className='nav_item'>LOGIN</p>
            </div>
        </div>
    )
}

export default Navbar