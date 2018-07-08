import React, {Component} from 'react';
import {MenuItem, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class LibrarianMenu extends Component {

  render() {
    return (
      <Nav pullLeft>
        <LinkContainer to="/">
          <MenuItem>Меню библиотекаря</MenuItem>
        </LinkContainer>
      </Nav>
    );
  }
}

export default LibrarianMenu;