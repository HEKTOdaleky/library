import React, {Component} from 'react';
import {MenuItem, Nav, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class AdminMenu extends Component {

  render() {
    return (
      <Nav pullLeft>
        <NavDropdown title="Добавить" id="add-menu">
          <LinkContainer to="/add-book">
            <MenuItem>Добавить книгу</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-category">
            <MenuItem>Добавить категорию</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-group">
            <MenuItem>Добавить группу</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-language">
            <MenuItem>Добавить язык книги</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-status">
            <MenuItem>Добавить статус книги</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-user">
            <MenuItem>Добавить нового пользователя</MenuItem>
          </LinkContainer>
        </NavDropdown>

        <NavDropdown title="Удалить" id="delete-menu">
          <LinkContainer to="/add-book">
            <MenuItem>Удалить книгу</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-category">
            <MenuItem>Удалить категорию</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-group">
            <MenuItem>Удалить группу</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-language">
            <MenuItem>Удалить язык книги</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-status">
            <MenuItem>Удалить статус книги</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-user">
            <MenuItem>Удалить пользователя</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    );
  }
}

export default AdminMenu;