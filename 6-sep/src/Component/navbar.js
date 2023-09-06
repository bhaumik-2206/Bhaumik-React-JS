import React from 'react';
import '/Saeculum Solution/Bhaumik-React-JS/6-sep/src/App.css';

function MyNavbar() {
    return (
        <nav className='nav'>
            <ul className='mainul'>
                <li className='all-li'><a href="#home">Home</a></li>
                <li className='all-li'><a href="#home">About Us</a></li>
                <li className='all-li'><a href="#home">Contact</a></li>
                <li className='all-li'><a href="#home">Log In</a></li>
            </ul>
        </nav>
    );
}

export default MyNavbar;