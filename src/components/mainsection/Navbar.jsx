import React from 'react'
import "./styles.css";
import logo from "../../assets/nexora.png"

const Navbar = () => {
    return (
        <nav className="navbar">

            <img src={logo} alt="NEXORACART" />

            <ul className="nav-links">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Shop">Shop</a></li>
                <li><a href="#Cart">Cart 🛒</a></li>
            </ul>
        </nav>
    )
}

export default Navbar