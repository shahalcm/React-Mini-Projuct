import React from 'react'
import "./styles.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="logo">NEXORA<span>CART</span></h2>
            <ul className="nav-links">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Shop">Shop</a></li>
                <li><a href="#Cart">Cart 🛒</a></li>
            </ul>
        </nav>
    )
}

export default Navbar