import React, { Component } from "react";
import styled from 'styled-components';
import FooterItems from './FooterItems/FooterItems';


const FooterContainer = styled.div`
  /*background-color: #e0e0e0;*/
  overflow: auto;
  padding-bottom: 1em;
  padding-top: 1em;
  border-top: 5px dotted #b6b7b7;
`



class Footer extends Component {

    render() {
        return (
        <FooterContainer>
            <FooterItems />
        </FooterContainer>
        );
    }
}

export default Footer;