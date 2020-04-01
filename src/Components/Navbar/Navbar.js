import React, { Component } from "react";
import NavbarItems from "./NavbarItems/NavbarItems"
import styled from 'styled-components';

const NavbarContainer = styled.div`
  /*background-color: #e0e0e0;*/
  overflow: auto;
  padding-bottom: 1em;
  padding-top: 1em;
  border-bottom: 5px dotted #b6b7b7;
`

class Navbar extends Component {

    render() {
        return (
        <NavbarContainer>
            <NavbarItems>
            </NavbarItems>
        </NavbarContainer>
        );
    }
}

export default Navbar;