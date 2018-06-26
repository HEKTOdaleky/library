import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  InputGroup, ListGroup, ListGroupItem,
  Panel
} from "react-bootstrap";
import { Header } from "semantic-ui-react";
import {getBooksFromSearch} from "../../store/actions/books";

class Library extends Component {
  state = {
    searchKey: ""
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitFormHandler = event => {
    event.preventDefault();
    this.props.getBooksFromSearch(this.state);
    this.setState({searchKey: ''});
  };

  render() {
    return (
      <div className="container">
        <Header as="h1" dividing style={{ color: "#333", marginBottom: '20px' }}>
          Поиск книг
        </Header>
        <Panel>
          <Panel.Body>
            <Form onSubmit={this.submitFormHandler}>
              <FormGroup>
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="Введите слово для поиска"
                    name="searchKey"
                    value={this.state.searchKey}
                    onChange={this.inputChangeHandler}
                  />
                  <InputGroup.Button>
                    <Button type="submit">Поиск</Button>
                  </InputGroup.Button>
                </InputGroup>
              </FormGroup>
            </Form>
          </Panel.Body>
        </Panel>

        <ListGroup>
          {this.props.books && this.props.books.map(item => (
            <ListGroupItem key={item._id}>
              {`Название: "${item.title}", Автор: "${item.author}", Год издания: "${item.year}", Издательство: "${item.publishHouse}"`}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.books,
    booksError: state.books.booksError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBooksFromSearch: searchData => dispatch(getBooksFromSearch(searchData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);
