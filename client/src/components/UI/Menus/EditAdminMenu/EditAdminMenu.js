import React, {Component, Fragment} from 'react';
import {MenuItem, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class EditAdminMenu extends Component {

  render() {
    return (
      <Fragment>
        <NavDropdown title="Редактировать" id="edit-menu">
          <LinkContainer to="/edit-book">
            <MenuItem>Редактировать книгу</MenuItem>
          </LinkContainer>
          <LinkContainer to="/edit-reader">
            <MenuItem>Редактировать читателя</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Fragment>
    );
  }
}

export default EditAdminMenu;