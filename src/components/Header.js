import React from 'react';
import "../styles.css"
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header>
            <div className="logo">
            <img src="/images/ll.webp" alt="Logo"/>
            </div>
    <nav id="main-menu"></nav>
            <nav>
                <ul>
                    <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={1000}>Creations</Link></li>
                    <li><Link to="services" smooth={true} duration={1000}>Why us</Link></li>
                    <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
