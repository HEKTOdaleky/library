import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {
  Button, Col, ControlLabel, Form, FormControl, FormGroup, ListGroup, ListGroupItem, Panel,
  Row
} from "react-bootstrap";

import {getBookByBarcodeBook} from "../../../store/actions/books";

class TakeBook extends Component {
  state = {
    bookCode: ''
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  formSearchBookHandler = event => {
    event.preventDefault();
    this.props.getBookByBarcodeBook(this.state.bookCode);
    this.setState({bookCode: ''});
  };

  render() {
    const book = this.props.findingBook;
    return (
      <Fragment>
        <Row>
          <Col sm={12}>
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
                    <Button bsSize="small" type="submit" disabled={!this.state.bookCode}>Найти</Button>
                  </Form>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>{''}</Panel.Body>
              {this.props.findingBook && this.props.findingBook ?
                <ListGroup>
                  <ListGroupItem>Название: <strong>{book.title}</strong></ListGroupItem>
                  <ListGroupItem>Автор: <strong>{book.author}</strong></ListGroupItem>
                  <ListGroupItem>Год: <strong>{book.year}</strong></ListGroupItem>
                  <ListGroupItem>Издательский дом: <strong>{book.publishHouse}</strong></ListGroupItem>
                  <ListGroupItem>Категория: <strong>{book.categoryId.title}</strong></ListGroupItem>
                  <ListGroupItem>Язык издания: <strong>{book.language.title}</strong></ListGroupItem>
                </ListGroup> : null}
            </Panel>
          </Col>
        </Row>
        <Panel bsStyle="primary">
          <Panel.Body>
            <Form horizontal>
              <FormGroup controlId="estimatedDate">
                <Col componentClass={ControlLabel} sm={2}>Дата возврата</Col>
                <Col sm={4}>
                  <FormControl
                    name="estimatedDate"
                    type="date"
                    onChange={this.changeHandler}
                    value={this.state.estimatedDate}/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={12}>
                  <Button disabled={!(this.props.findingBook && this.state.estimatedDate)}
                          bsStyle="primary" bsSize="large"
                          block style={{marginTop: '20px'}}>
                    Принять книгу у читателя
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Panel.Body>
        </Panel>
      </Fragment>
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
    getBookByBarcodeBook: barcode => dispatch(getBookByBarcodeBook(barcode)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TakeBook);