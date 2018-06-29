import React, {Component, Fragment, PropTypes} from 'react';
import {MenuItem, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class DeleteAdminMenu extends Component {

  render() {
    return (
      <Fragment>
        <NavDropdown title="Добавить" id="add-menu">
          <LinkContainer to="/add-book">
            <MenuItem>Удалить книгу</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-category">
            <MenuItem>Удалить пользователя</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-group">
            <MenuItem>Удалить группу</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-language">
            <MenuItem>Удалить категорию книг</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-status">
            <MenuItem>Удалить язык издания книги</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-user">
            <MenuItem>Удалить статус книги</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Fragment>
    );
  }
}

export default DeleteAdminMenu;