import React, {Component, Fragment} from 'react';
import {Nav} from "react-bootstrap";
import AddAdminMenu from "./AddAdminMenu/AddAdminMenu";
import DeleteAdminMenu from "./DeleteAdminMenu/DeleteAdminMenu";
import PersonalAdminMenu from "./PersonaAdminMenu/PersonalAdminMenu";

class AdminMenu extends Component {

    render() {
        return (
            <Fragment>
                <Nav pullLeft>
                    <AddAdminMenu/>
                    <DeleteAdminMenu/>

                </Nav>
                <Nav pullRight>
                    <PersonalAdminMenu/></Nav>
            </Fragment>
        );
    }
}

export default AdminMenu;