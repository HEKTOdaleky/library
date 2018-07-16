import React, {Component} from 'react';
import { Nav, NavItem } from "react-bootstrap";
import BookMenu from "./BookMenu/BookMenu";
import ReaderMenu from "./ReaderMenu/ReaderMenu";

class LibrarianMenu extends Component {

  render() {
    return (
      <Nav pullLeft>
        <NavItem eventKey={1} href="/librarian">
          Главная
        </NavItem>
       <BookMenu/>
       <ReaderMenu/>
      </Nav>
    );
  }
}

export default LibrarianMenu;