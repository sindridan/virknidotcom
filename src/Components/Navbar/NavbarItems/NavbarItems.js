
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const NavbarItems = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/about-me" className="nav-link">About me</Link>
            </li>
            <li className="nav-item">
                <a href="https://github.com/sindridan" className="nav-link">My GitHub</a>
            </li>
            <li className="nav-item">
                <a href="https://linkedin.com/in/sindridan" className="nav-link">My LinkedIn</a>
            </li>

            <li className="nav-item">
                <Link to="/my-cv" className="nav-link">My CV</Link>
            </li>
        </ul>
    );
};

export default NavbarItems;