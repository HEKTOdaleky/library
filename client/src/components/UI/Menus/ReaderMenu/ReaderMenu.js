import React from "react";
import { MenuItem, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ReaderMenu = () => {
  return (
    <NavDropdown title="Читатель" id="reader-menu">
      <LinkContainer to="/add-reader">
        <MenuItem>Новый читатель</MenuItem>
      </LinkContainer>
      <LinkContainer to="/mark-reader">
        <MenuItem>Удалить читателя</MenuItem>
      </LinkContainer>

    </NavDropdown>
  );
};

export default ReaderMenu;
