import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/reactlogo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <Link to="/home">
                <img src={logo} alt="Logo" className="header-logo" />
            </Link>
            <nav className='header-options'>
                <Link to="/home/about" className="about">About</Link>
                <Link to="/home/contact" className="contact">Contact</Link>
                <Link to="/login" className="login">Logout</Link>

            </nav>
        </header>
    );
}

export default Header;
