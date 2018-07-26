import React, {Component, Fragment} from 'react';
import { Col, Row, Thumbnail } from "react-bootstrap";
import deleteBook from "../../../../assets/images/delete.png"
import denied from "../../../../assets/images/denied.png"
import deleteProperty from "../../../../assets/images/delete-property.png"

class DeleteAdminMenu extends Component {

  render() {
    return (
      <Fragment>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={deleteBook} alt="Удалить книгу" href="/delete-book">
              <p>Удалить книгу</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={denied} alt="Удалить читателя" href="/delete-reader" >
              <p>Удалить читателя</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={deleteProperty} alt="Удалить группу" href="/delete-group" >
              <p>Удалить группу</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={deleteProperty} alt="Удалить категорию книг" href="/delete-category">
              <p>Удалить категорию книг</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={deleteProperty} alt="Удалить язык издания книги" href="/delete-language">
              <p>Удалить язык издания книги</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={deleteProperty} alt="Удалить статус книги" href="/delete-status">
              <p>Удалить статус книги</p>
            </Thumbnail>
          </Col>
        </Row>

      </Fragment>
    );
  }
}

export default DeleteAdminMenu;