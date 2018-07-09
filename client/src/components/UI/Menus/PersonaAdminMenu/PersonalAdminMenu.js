import React, {Component} from 'react';
import {MenuItem, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class PersonalAdminMenu extends Component {

    render() {
        return (
            <NavDropdown title="Личный Кабинет" id="personal" pullRight>
                <LinkContainer to="/create-new-user">
                    <MenuItem>Создать пользователя</MenuItem>
                </LinkContainer>
                <LinkContainer to="/delete-new-user">
                    <MenuItem>Удалить пользователя</MenuItem>
                </LinkContainer>
            </NavDropdown>
        );
    }
}

export default PersonalAdminMenu;