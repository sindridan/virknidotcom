
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from 'styled-components';


const NavItem = styled.li`
  font-size: 30px;
  font-color: red;
`

const NavbarItems = () => {
    return (
        <ul>
            <li>
                <Link to="/about-me" className="nav-link">About me</Link>
            </li>
            <li >
                <a href="https://github.com/sindridan" className="nav-link">My GitHub</a>
            </li>
            <li >
                <a href="https://linkedin.com/in/sindridan" className="nav-link">My LinkedIn</a>
            </li>

            <li>
                <Link to="/my-cv" className="nav-link">My CV</Link>
            </li>
        </ul>
    );
};

export default NavbarItems;