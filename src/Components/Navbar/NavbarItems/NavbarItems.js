
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import sdgLogo from '../../../Artefacts/bigstan.PNG';


const NavItemContainer = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    height: 100px;

    align-items: center;
    justify-content: flex-end;
    position: relative;
`

const NavItem = styled.div`
    height: auto;
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
    max-height: 100px;
    max-width: auto;

    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
`

const NavbarItems = () => {
    return (
        <NavItemContainer>
            <NavItem>
                <Link to="/" className="nav-link"><LogoImg src={sdgLogo} alt="sdglogo"/></Link>
            </NavItem>
            <NavItem>
                <a href="https://github.com/sindridan" className="nav-link">GitHub</a>
            </NavItem>
            <NavItem>
                <a href="https://linkedin.com/in/sindridan" className="nav-link">LinkedIn</a>
            </NavItem>
        </NavItemContainer>
    );
};

export default NavbarItems;