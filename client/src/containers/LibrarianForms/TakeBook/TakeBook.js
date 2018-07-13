import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {
  Button, Col, ControlLabel, Form, FormControl, FormGroup, ListGroup, ListGroupItem, Panel,
  Row
} from "react-bootstrap";

import {getBookByBarcodeBook} from "../../../store/actions/books";
import {sendDataTakeBookToJournal} from "../../../store/actions/journals"

class TakeBook extends Component {
  state = {
    bookCode: '',
    closeDate: ''
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  formSearchBookHandler = event => {
    event.preventDefault();
    this.props.getBookByBarcodeBook(this.state.bookCode);
    this.setState({bookCode: ''});
  };

  takeBookToReader = event => {
    event.preventDefault();
    const data = {
      bookId: this.props.findingTakeBook._id,
      closeDate: this.state.closeDate
    };
    console.log(data);
    this.props.sendDataTakeBookToJournal(data);
  };

  render() {
    const book = this.props.findingTakeBook;
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
              {book && book ?
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
              <FormGroup controlId="closeDate">
                <Col componentClass={ControlLabel} sm={2}>Дата возврата</Col>
                <Col sm={4}>
                  <FormControl
                    name="closeDate"
                    type="date"
                    onChange={this.changeHandler}
                    value={this.state.closeDate}/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={12}>
                  <Button disabled={!(this.props.findingTakeBook && this.state.closeDate)}
                          bsStyle="primary" bsSize="large"
                          block style={{marginTop: '20px'}} onClick={this.takeBookToReader}>
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
    findingTakeBook: state.books.findingTakeBook
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getBookByBarcodeBook: barcode => dispatch(getBookByBarcodeBook(barcode)),
    sendDataTakeBookToJournal: data => dispatch(sendDataTakeBookToJournal(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TakeBook);