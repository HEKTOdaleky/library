import React, {Component, Fragment} from 'react';
import {MenuItem, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class AddAdminMenu extends Component {

  render() {
    return (
      <Fragment>
        <NavDropdown title="Добавить" id="add-menu">
          <LinkContainer to="/add-book">
            <MenuItem>Добавить книгу</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-reader">
            <MenuItem>Добавить читателя</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-group">
            <MenuItem>Добавить группу</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-category">
            <MenuItem>Добавить категорию книг</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-language">
            <MenuItem>Добавить язык издания книги</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-status">
            <MenuItem>Добавить статус книги</MenuItem>
          </LinkContainer>
            <LinkContainer to="/create-new-user">
                <MenuItem>Создать пользователя</MenuItem>
            </LinkContainer>
        </NavDropdown>
      </Fragment>
    );
  }
}

export default AddAdminMenu;