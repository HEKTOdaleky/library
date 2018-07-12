import React, {Component} from 'react';
import {connect} from "react-redux";
import {
  Button, Col, ControlLabel, Form, FormControl, FormGroup, ListGroup, ListGroupItem, Panel,
  Row
} from "react-bootstrap";

import {getBookByBarcode} from "../../../store/actions/books";

class TakeBook extends Component {
  state = {
    bookCode: ''
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  formSearchBookHandler = event => {
    event.preventDefault();
    this.props.getBookByBarcode(this.state.bookCode);
    this.setState({bookCode: ''});
  };

  render() {
    const book = this.props.findingBook;
    return (
      <Row>
        <Col xs={12} md={6}>
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title>
                <Form inline onSubmit={this.formSearchBookHandler}>
                  <FormGroup>
                    <ControlLabel style={{marginRight: "30px"}}>Штрихкод книги</ControlLabel>
                    <FormControl
                      name="bookCode"
                      type="text"
                      placeholder="Штрихкод"
                      value={this.state.bookCode}
                      onChange={this.changeHandler}
                      style={{marginRight: '30px', width: '150px'}}/>
                  </FormGroup>
                  <Button bsSize="small" type="submit">Найти</Button>
                </Form>
              </Panel.Title>
            </Panel.Heading>
            <Pane.Body>{''}</Pane.Body>
            {this.props.findingBook && this.props.findingBook ?
              <ListGroup>
                <ListGroupItem>Название:  <strong>{book.title}</strong></ListGroupItem>
                <ListGroupItem>Автор:  <strong>{book.author}</strong></ListGroupItem>
                <ListGroupItem>Год:  <strong>{book.year}</strong></ListGroupItem>
                <ListGroupItem>Издательский дом:  <strong>{book.publishHouse}</strong></ListGroupItem>
                <ListGroupItem>Категория:  <strong>{book.categoryId.title}</strong></ListGroupItem>
                <ListGroupItem>Язык издания:  <strong>{book.language.title}</strong></ListGroupItem>
              </ListGroup>: null}
          </Panel>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    findingBook: state.books.findingBook
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getBookByBarcode: barcode => dispatch(getBookByBarcode(barcode))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TakeBook);