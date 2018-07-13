import React from "react";
import { MenuItem, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const BookMenu = () => {
  return (
    <NavDropdown title="Книга" id="book-menu">
      <LinkContainer to="/get-book">
        <MenuItem>Выдать книгу</MenuItem>
      </LinkContainer>
      <LinkContainer to="/take-book">
        <MenuItem>Принять книгу</MenuItem>
      </LinkContainer>
      <LinkContainer to="/remove-book">
        <MenuItem>Книгу на удаление</MenuItem>
      </LinkContainer>
    </NavDropdown>
  );
};

export default BookMenu;
