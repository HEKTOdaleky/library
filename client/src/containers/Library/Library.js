import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button, Col, Collapse,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  PageHeader,
  Panel, Well
} from "react-bootstrap";
import {getBooksFromFullSearch, getBooksFromSearch} from "../../store/actions/books";
import FormElement from "../../components/UI/Form/FormElement";
import SearchResults from "../../components/SearchResults/SearchResults";

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

  submitSearchFormHandler = event => {
    event.preventDefault();
    const searchData = {title: this.state.title, author: this.state.author, publishHouse: this.state.publishHouse};
    this.props.getBooksFromFullSearch(searchData);
    this.setState({title: '', author: '', publishHouse: ''});
  };

  render() {
    return (
      <div className="container">
        <PageHeader>Поиск:</PageHeader>
        <Panel>
          <Panel.Body>
            <Form onSubmit={this.submitFormHandler}>
              <FormGroup>
                <InputGroup bsSize="large">
                  <FormControl
                    type="text"
                    placeholder="Введите слово для поиска в названии книги"
                    name="searchKey"
                    value={this.state.searchKey}
                    onChange={this.inputChangeHandler}
                  />
                  <InputGroup.Button>
                    <Button type="submit" bsStyle="primary">
                      Поиск
                    </Button>
                  </InputGroup.Button>
                </InputGroup>
              </FormGroup>
            </Form>
            <span id="full-search"
                  onClick={this.toggleHandler}
                  style={{cursor: "pointer", fontSize: '15px'}}>
              Расширенный поиск
            </span>
          </Panel.Body>
          <Collapse in={this.state.open}>
            <Well>
              <Form horizontal onSubmit={this.submitSearchFormHandler}>
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
                  propertyName="title"
                  title="Название книги"
                  placeholder="Название книги или набор слов из названия"
                  type="text"
                  value={this.state.title}
                  changeHandler={this.inputChangeHandler}
                  autoComplete="current-username"
                />
                <FormElement
                  size="small"
                  propertyName="publishHouse"
                  title="Издательство"
                  placeholder="Издательство"
                  type="text"
                  value={this.state.publishHouse}
                  changeHandler={this.inputChangeHandler}
                  autoComplete="current-username"
                />
                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button
                      bsStyle="primary"
                      type="submit"
                    >Найти</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Well>
          </Collapse>
        </Panel>

        {this.props.books.length > 0 &&
          <SearchResults books={this.props.books}/> }
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
    getBooksFromSearch: searchData => dispatch(getBooksFromSearch(searchData)),
    getBooksFromFullSearch: searchData => dispatch(getBooksFromFullSearch(searchData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
