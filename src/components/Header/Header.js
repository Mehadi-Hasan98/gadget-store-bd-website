import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
           <nav className='nav'>
            <h2 className='shop-name'>Gadget Store BD</h2>
                <Link className='active-link' to="/">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;