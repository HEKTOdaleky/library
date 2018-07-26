import React, {Component, Fragment} from 'react';
import { Nav, NavItem } from "react-bootstrap";
import PersonalAdminMenu from "./PersonaAdminMenu/PersonalAdminMenu";

class AdminMenu extends Component {

  render() {
    return (
      <Fragment>
        <Nav pullLeft>
          <NavItem eventKey={1} href="/admin">
            Главная
          </NavItem>
        </Nav>
        {/*<Nav pullRight>*/}
          {/*<PersonalAdminMenu/>*/}
        {/*</Nav>*/}
      </Fragment>
    );
  }
}

export default AdminMenu;