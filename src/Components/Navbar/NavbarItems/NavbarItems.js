
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
        font-size: 2em;
        text-decoration: none; 
        margin: 0 0 0 1em;
        color: #b6b7b7;
    }

    a:visited { text-decoration: none; #b6b7b7; }

    a:hover, a:active { text-decoration: none; 
        -moz-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        -webkit-transition: all .2s ease-in;
        transition: all .2s ease-in;
        background-color: #454545; 

    }
`

const NavTitle = styled(Link)`
    height: auto;
    width: auto;

    font-size: 2em;
    font-weight: bold;
    text-decoration: none; 
    color: #b6b7b7;
    
    &:visited { text-decoration: none; #b6b7b7; }

    &:hover, &:active { text-decoration: none; 
        -moz-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        -webkit-transition: all .2s ease-in;
        transition: all .2s ease-in;
        background-color: #454545; 
    }
    
    position: absolute;
    left: 0;
`
/* old title logo css module
const NavLogo = styled.div`
    max-height: 100px;
    max-width: auto;

    position: absolute;
    border-radius: 50%;
    left: 0;
`
*/
const NavbarItems = () => {
    return (
        <NavItemContainer>
            <NavTitle to="/">GitCrawler</NavTitle>
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