import React, {Component} from 'react';
import { Nav, NavItem } from "react-bootstrap";

class LibrarianMenu extends Component {

  render() {
    return (
      <Nav pullLeft>
        <NavItem eventKey={1} href="/librarian">
          Главная
        </NavItem>
      </Nav>
    );
  }
}

export default LibrarianMenu;