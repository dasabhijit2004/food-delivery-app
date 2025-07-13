'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const ResturantHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='resturant-header'>
            <img src="/logo.png" alt="logo" className='logo' />

            {/* Hamburger Icon */}
            <button className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>

            {/* Navigation */}
            <nav className={`resturant-nav ${menuOpen ? 'open' : ''}`}>
                <ul className='resturant-nav-list'>
                    <li className='resturant-nav-items'><Link href="/" className='resturant-nav-link'>Home</Link></li>
                    <li className='resturant-nav-items'><Link href="/profile" className='resturant-nav-link'>Profile</Link></li>
                    <li className='resturant-nav-items'><Link href="/orders" className='resturant-nav-link'>Orders</Link></li>
                    <li className='resturant-nav-items'><Link href="/menu" className='resturant-nav-link'>Menu</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default ResturantHeader;
