import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminMenu from "../Menus/AdminMenu";
import LibrarianMenu from "../Menus/LibrarianMenu";

const Toolbar = ({user, logout}) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <LinkContainer to="/">
            <a>Библиотека ПЛ №10</a>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {user ?
            <NavItem onClick={() => logout()}>Выйти</NavItem>
            :
            <LinkContainer to="/login" exact>
              <NavItem>Войти</NavItem>
            </LinkContainer>
          }
        </Nav>
        { user && user.role === 'admin' ?
          <AdminMenu />
          : user && user.role === 'librarian' ?
            <LibrarianMenu /> : null
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Toolbar;