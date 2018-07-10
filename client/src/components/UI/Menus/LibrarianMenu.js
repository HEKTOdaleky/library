import React, {Component} from 'react';
import { Nav, NavItem } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class LibrarianMenu extends Component {

  render() {
    return (
      <Nav pullLeft>
        <LinkContainer to="/librarian" activeKey={5} >
          <NavItem eventKey={1}>Выдача книг</NavItem>
        </LinkContainer>
        <LinkContainer to="/">
          <NavItem eventKey={2}>Списание книг</NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}

export default LibrarianMenu;