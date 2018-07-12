import React, { Component } from "react";
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Panel
} from "react-bootstrap";

class GetBookFormForBook extends Component {

  state = {
    bookCode: ''
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  formSearchBookHandler = event => {
    event.preventDefault();
    this.props.getBook(this.state.bookCode);
    this.setState({bookCode: ''});
  };

  render() {
    const book = this.props.book;

    return (
      <Col xs={12} md={6}>
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title>
              <Form inline onSubmit={this.formSearchBookHandler}>
                <FormGroup>
                  <ControlLabel style={{marginRight: '30px'}}>Штрихкод книги</ControlLabel>
                  <FormControl
                    name="bookCode"
                    type="text"
                    placeholder="Штрихкод"
                    value={this.state.bookCode}
                    onChange={this.changeHandler}
                    style={{marginRight: '30px', width: '150px'}}/>
                </FormGroup>
                <Button bsSize="small" type="submit" disabled={!this.state.bookCode}>Найти книгу</Button>
              </Form>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>{''}</Panel.Body>
          {book && book ?
            <ListGroup>
              <ListGroupItem>Название:  <strong>{book.title}</strong></ListGroupItem>
              <ListGroupItem>Автор:  <strong>{book.author}</strong></ListGroupItem>
              <ListGroupItem>Год:  <strong>{book.year}</strong></ListGroupItem>
              <ListGroupItem>Издательский дом:  <strong>{book.publishHouse}</strong></ListGroupItem>
              <ListGroupItem>Категория:  <strong>{book.categoryId.title}</strong></ListGroupItem>
              <ListGroupItem>Язык издания:  <strong>{book.language.title}</strong></ListGroupItem>
            </ListGroup> : null}
        </Panel>
      </Col>
    );
  }
}

export default GetBookFormForBook;