import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Grid, Row, Thumbnail } from "react-bootstrap";
import apply from "../../assets/images/apply.png"
import denied from "../../assets/images/denied.png"
import get from "../../assets/images/get.png"
import take from "../../assets/images/book.png"
import add from "../../assets/images/add.png"
import remove from "../../assets/images/delete.png"
import { Header, Segment } from "semantic-ui-react";
import './Librarian.css';

class Librarian extends Component {
  render() {
    return (
      <Grid>backend"
        <Segment raised textAlign='center'>
          <Header as='h2'>Книги</Header>
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
           </Row>
        </Segment>
        <Segment raised textAlign='center'>
          <Header as='h2'>Читатели</Header>
          <Row className="center-block">
            <Col xs={12} sm={6} md={6}>
            <Thumbnail src={apply} alt="Добавить читателя" href="/add-reader">
              <p>Новый читатель</p>
            </Thumbnail>
          </Col>
            <Col xs={12} sm={6} md={6}>
            <Thumbnail src={denied} alt="Удалить читателя" href="/mark-reader" >
              <p>Читателя на удаление</p>
            </Thumbnail>
          </Col>
          </Row>
        </Segment>
      </Grid>
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