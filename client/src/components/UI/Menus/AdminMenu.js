import React, {Component, Fragment} from 'react';
import { Nav, NavItem } from "react-bootstrap";
import AddAdminMenu from "./AddAdminMenu/AddAdminMenu";
import DeleteAdminMenu from "./DeleteAdminMenu/DeleteAdminMenu";
import EditAdminMenu from "./EditAdminMenu/EditAdminMenu";
import PersonalAdminMenu from "./PersonaAdminMenu/PersonalAdminMenu";

class AdminMenu extends Component {

  render() {
    return (
      <Fragment>
        <Nav pullLeft>
          <NavItem eventKey={1} href="/admin">
            Главная
          </NavItem>
          <AddAdminMenu/>
          <DeleteAdminMenu/>
          <EditAdminMenu/>
        </Nav>
        <Nav pullRight>
          <PersonalAdminMenu/>
        </Nav>
      </Fragment>
    );
  }
}

export default AdminMenu;