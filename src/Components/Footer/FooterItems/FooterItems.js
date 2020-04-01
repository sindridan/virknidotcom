
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const FooterItemContainer = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    height: 100px;

    align-items: center;
    flex-wrap: nowrap;
`

const FooterItem = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-basis: 100%
    flex-direction: column;
    justify-content: center;
    text-align: center;

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

const FooterItems = () => {
    return (
        <FooterItemContainer>
            <FooterItem>
                <a href="mailto:sindridan@gmail.com">sindridan@gmail.com</a>
            </FooterItem>
            <FooterItem>
                <a href="https://sindri.org">sindri.org</a>
            </FooterItem>
        </FooterItemContainer>
    );
};

export default FooterItems;