import React from "react";
import {Image, Nav, Navbar, NavItem} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import logoImg from '../../../assets/images/library-logo.png';

const Toolbar = ({user, logout}) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/" style={{padding: '5px 15px'}}>
            <Image src={logoImg} width={40}/>
          </a>
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