
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const NavItemContainer = styled.div`
    background-color: #dbf2cb;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
`

const NavItem = styled.div`
    height: 100%;
    width: auto;
  
    a, Link {
        font-size: 30px;
        text-decoration: none; 
        padding: 0 20px 0 20px;
    } 

    a:visited { text-decoration: none; black; }
    a:hover { text-decoration: none; color: green; }
    a:focus { text-decoration: none; color:yellow; }
    a:hover, a:active { text-decoration: none; color:black }
`
const LogoImg = styled.img`
    max-height: 120px;
    max-width: auto;
`

const NavbarItems = () => {
    return (
        <NavItemContainer>
            <NavItem>
                <Link to="/" className="nav-link"><LogoImg src="https://vectr.com/tmp/c11FHuwddZ/bCzZxsYpk.svg?width=500&height=499.9999999999999&select=a2tZO4AjtH,f2wCwegQPW&source=selection" alt="sdglogo"/></Link>
            </NavItem>
            <NavItem>
                <Link to="/about-me" className="nav-link">About me</Link>
            </NavItem>
            <NavItem>
                <a href="https://github.com/sindridan" className="nav-link">My GitHub</a>
            </NavItem>
            <NavItem>
                <a href="https://linkedin.com/in/sindridan" className="nav-link">My LinkedIn</a>
            </NavItem>

            <NavItem>
                <Link to="/my-cv" className="nav-link">My CV</Link>
            </NavItem>
        </NavItemContainer>
    );
};

export default NavbarItems;