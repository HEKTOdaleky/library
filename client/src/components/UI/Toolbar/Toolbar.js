import React from "react";
import {Image, Nav, Navbar, NavItem} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import logoImg from '../../../assets/images/library-logo.png';

const Toolbar = ({user, logout}) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <LinkContainer to="/" exact>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Toolbar;