import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import apply from "../../assets/images/apply.png"
import denied from "../../assets/images/denied.png"
import get from "../../assets/images/get.png"
import take from "../../assets/images/book.png"
import add from "../../assets/images/add.png"
import remove from "../../assets/images/delete.png"
import edit from "../../assets/images/edit.png"
import './Librarian.css';
import { Col, Row, Tab, Tabs, Thumbnail } from "react-bootstrap";

class Librarian extends Component {

  render() {
    return (
      <Fragment>
         <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Главная">
            Tab 1 content
          </Tab>
          <Tab eventKey={2} title="Книги">
            <Row>
              <Col xs={12} sm={6} md={3}>
                <Thumbnail src={get} alt="Выдать книгу" href="/get-book">
                  <p>Выдать книгу</p>
                </Thumbnail>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Thumbnail src={take} alt="Принять книгу" href="/take-book" >
                  <p>Принять книгу</p>
                </Thumbnail>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Thumbnail src={add} alt="Добавить книгу" href="/add-book" >
                  <p>Добавить книгу</p>
                </Thumbnail>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Thumbnail src={remove} alt="Книга на удаление" href="/remove-book">
                  <p>Книга на удаление</p>
                </Thumbnail>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Thumbnail src={edit} alt="Редактирование книги" href="/edit-book">
                  <p>Редактирование книги</p>
                </Thumbnail>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey={3} title="Читатели">
            <Row className="center-block">
              <Col xs={12} sm={6} md={4}>
                <Thumbnail src={apply} alt="Добавить читателя" href="/add-reader">
                  <p>Новый читатель</p>
                </Thumbnail>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Thumbnail src={denied} alt="Удалить читателя" href="/mark-reader" >
                  <p>Читателя на удаление</p>
                </Thumbnail>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Thumbnail src={edit} alt="Редактировать читателя" href="/edit-reader" >
                  <p>Редактировать читателя</p>
                </Thumbnail>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Librarian);