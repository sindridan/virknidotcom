
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const FooterItemContainer = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: center;

    }
`
const SubFooterItemContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin: 0 3em 0 0;

    align-self: flex-start;

`
const FooterItemTitle = styled.div`
    font-weight: bold;
    font-size: 1.5em;
`

const FooterItem = styled.div`

    a, Link {
        font-size: 1.5em;
        text-decoration: none; 
        
        color: #b6b7b7;
    }

    a:visited { text-decoration: none; #b6b7b7; }

    a:hover, a:active { text-decoration: none; 
        -moz-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        -webkit-transition: all .2s ease-in;
        transition: all .2s ease-in;
        color: #454545; }
`

const FooterItems = () => {
    return (
        <FooterItemContainer>
            <SubFooterItemContainer>
                <FooterItemTitle>Contact</FooterItemTitle>
                    <FooterItem>
                        <a href="mailto:sindridan@gmail.com">sindridan@gmail.com</a>
                    </FooterItem>
                    <FooterItem>
                        <a href="mailto:sindrig17@ru.is">sindrig17@ru.is</a>
                    </FooterItem>
            </SubFooterItemContainer>
            
            <SubFooterItemContainer>
                <FooterItemTitle>External links</FooterItemTitle>
                    <FooterItem>
                        <a href="https://sdg.is">sdg.is</a>
                    </FooterItem>
                    <FooterItem>
                        <a href="https://github.com/sindridan">GitHub</a>
                    </FooterItem>
                    <FooterItem>
                        <a href="https://linkedin.com/in/sindridan">LinkedIn</a>
                    </FooterItem>
            </SubFooterItemContainer>
        </FooterItemContainer>
    );
};

export default FooterItems;