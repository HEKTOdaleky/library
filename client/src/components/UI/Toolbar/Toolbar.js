import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Toolbar = ({user, logout}) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <LinkContainer to="/">
            <a>LOGO</a>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/" exact>
            <NavItem>Новый поиск</NavItem>
          </LinkContainer>
        </Nav>
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
