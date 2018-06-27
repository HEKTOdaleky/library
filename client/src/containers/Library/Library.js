import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button, Col, Collapse,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  ListGroup,
  ListGroupItem,
  PageHeader,
  Panel, Well
} from "react-bootstrap";
import { getBooksFromSearch } from "../../store/actions/books";
import FormElement from "../../components/UI/Form/FormElement";

class Library extends Component {
  state = {
    searchKey: "",
    open: false,
    title: '',
    author: '',
    publishHouse: ''
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleHandler = () => {
    this.setState({open: !this.state.open});
  };

  submitFormHandler = event => {
    event.preventDefault();
    const key = {searchKey: this.state.searchKey};
    this.props.getBooksFromSearch(key);
    this.setState({ searchKey: "" });
  };

  render() {
    return (
      <div className="container">
        <PageHeader>Поиск книг</PageHeader>
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
            <span onClick={this.toggleHandler} style={{}}>Расширенный поиск</span>
          </Panel.Body>
          <Collapse in={this.state.open}>
            <Well>
              <Form horizontal>
                <FormElement
                  size="small"
                  propertyName="title"
                  title="Название книги"
                  placeholder="Название книги"
                  type="text"
                  value={this.state.title}
                  changeHandler={this.inputChangeHandler}
                  autoComplete="current-username"
                />
                <FormElement
                  size="small"
                  propertyName="author"
                  title="Автор"
                  placeholder="Автор книги"
                  type="text"
                  value={this.state.author}
                  changeHandler={this.inputChangeHandler}
                  autoComplete="current-username"
                />
                <FormElement
                  size="small"
                  propertyName="publishHouse"
                  title="Издательский дом"
                  placeholder="Издательский дом"
                  type="text"
                  value={this.state.publishHouse}
                  changeHandler={this.inputChangeHandler}
                  autoComplete="current-username"
                />
              </Form>
            </Well>
          </Collapse>
        </Panel>

        <ListGroup>
          {this.props.books &&
            this.props.books.map(item => (
              <ListGroupItem key={item._id}>
                {`Название: "${item.title}", Автор: "${
                  item.author
                }", Год издания: "${item.year}", Издательство: "${
                  item.publishHouse
                }"`}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
