import React, {Component} from 'react';
import {Nav} from "react-bootstrap";
import AddAdminMenu from "./AddAdminMenu/AddAdminMenu";
import DeleteAdminMenu from "./DeleteAdminMenu/DeleteAdminMenu";

class AdminMenu extends Component {

  render() {
    return (
      <Nav pullLeft>
        <AddAdminMenu/>
        <DeleteAdminMenu/>
      </Nav>
    );
  }
}

export default AdminMenu;