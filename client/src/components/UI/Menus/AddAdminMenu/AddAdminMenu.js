import React, {Component, Fragment} from 'react';
import { Col, Row, Thumbnail } from "react-bootstrap";
import add from "../../../../assets/images/add.png"
import apply from "../../../../assets/images/apply.png"
import addProperty from "../../../../assets/images/add-property.png"

class AddAdminMenu extends Component {

  render() {
    return (
      <Fragment>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={add} alt="Добавить книгу" href="/add-book">
              <p>Добавить книгу</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={apply} alt="Добавить читателя" href="/add-reader" >
              <p>Добавить читателя</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={addProperty} alt="Добавить группу" href="/add-group" >
              <p>Добавить группу</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={addProperty} alt="Добавить категорию книг" href="/add-category">
              <p>Добавить категорию книг</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={addProperty} alt="Добавить язык издания книги" href="/add-language">
              <p>Добавить язык издания книги</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={addProperty} alt="Добавить статус книги" href="/add-status">
              <p>Добавить статус книги</p>
            </Thumbnail>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default AddAdminMenu;