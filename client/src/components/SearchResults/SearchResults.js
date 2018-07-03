import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const SearchResults = ({ books }) => {
  return (
    <ListGroup>
      {books &&
        books.map(item => (
          <ListGroupItem key={item._id}>
            {`Автор: "${item.author}",
              Название: "${item.title}",
              Год издания: "${item.year}",
              Издательство: "${item.publishHouse}"`}
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};

export default SearchResults;
