import React, {Component} from 'react';
import {MenuItem, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class LibrarianMenu extends Component {

  render() {
    return (
      <Nav pullLeft>
        <LinkContainer to="/librarian">
          <MenuItem>Выдача книги</MenuItem>
        </LinkContainer>
      </Nav>
    );
  }
}

export default LibrarianMenu;