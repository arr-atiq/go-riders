import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h4>Go Riders</h4>
            <nav>
                <a href="/home">Home</a>
                <a href="/destination">Destination</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;