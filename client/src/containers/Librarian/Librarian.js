import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Grid, Row, Thumbnail } from "react-bootstrap";
import getBook from "../../assets/images/get-book.png"
import takeBook from "../../assets/images/take-book.png"
import addBook from "../../assets/images/add-book.png"
import mark from "../../assets/images/mark-remove.png"

class Librarian extends Component {
  render() {
    return (
      <Grid>
        <Row style={{textAlign: 'center'}}>
          <Col xs={6} md={3}>
            <Thumbnail src={getBook} alt="выдать книгу" href="/get-book">
              <p>Выдать книгу</p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail src={takeBook} alt="принять книгу" href="/take-book" >
              <p>Принять книгу</p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail src={addBook} alt="выдать книгу" href="/add-book" >
              <p>Добавить книгу</p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail src={mark} alt="принять книгу" href="/remove-book">
              <p>Книгу на удаление</p>
            </Thumbnail>
        </Col>
        </Row>
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