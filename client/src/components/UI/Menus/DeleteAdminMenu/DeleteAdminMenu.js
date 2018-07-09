import React, {Component, Fragment} from 'react';
import {MenuItem, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class DeleteAdminMenu extends Component {

  render() {
    return (
      <Fragment>
        <NavDropdown title="Удалить" id="add-menu">
          <LinkContainer to="/delete-book">
            <MenuItem>Удалить книгу</MenuItem>
          </LinkContainer>
          <LinkContainer to="/delete-reader">
            <MenuItem>Удалить читателя</MenuItem>
          </LinkContainer>
          <LinkContainer to="/delete-group">
            <MenuItem>Удалить группу</MenuItem>
          </LinkContainer>
          <LinkContainer to="/delete-category">
            <MenuItem>Удалить категорию книг</MenuItem>
          </LinkContainer>
          <LinkContainer to="/delete-language">
            <MenuItem>Удалить язык издания книги</MenuItem>
          </LinkContainer>
          <LinkContainer to="/delete-status">
            <MenuItem>Удалить статус книги</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Fragment>
    );
  }
}

export default DeleteAdminMenu;