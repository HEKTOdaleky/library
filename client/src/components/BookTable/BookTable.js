import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import moment from "moment/moment";
import {getCategories} from "../../store/actions/categories";
import {connect} from "react-redux";
import {Button, Form, FormControl, FormGroup, InputGroup, Panel} from "react-bootstrap";
import FormElement from "../UI/Form/FormElement";
import {sortArrayOfObjectsByKey} from "../../lib";
import {getBook} from "../../store/actions/books";

class BookTable extends Component {

  state = {
    books: [],
    categories: {},
    sortName: undefined,
    sortOrder: undefined,
    categoryId: ''
  };

  componentDidMount() {
    this.props.getCategories();
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.book && nextProps.categories) {
      const books = nextProps.book.map(book => {
        const registerDate = moment(book.registerDate).format("DD-MM-YYYY h:mm");
        return {
          ...book,
          language: book.language.title,
          categoryId: book.categoryId.title,
          registerDate
        }
      });

      let categories = {};

      nextProps.categories.forEach((category, index) => {
        categories[index] = category.title;
      });
      console.log(categories);

      return {books: books, categories: categories};
    }


    return {...prevState};
  };

  enumFormatter = (cell, row, enumObject) => {
    return enumObject[cell];
  };


  onSortChange = (sortName, sortOrder) => {
    this.setState({
      sortName,
      sortOrder
    });
  };

  categorySubmitHandler = event => {
    event.preventDefault();
    this.props.getCategories(this.state);
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange
    };

    const categories = this.props.categories.map(category => {
      return {id: category._id, title: category.title};
    });
    categories.unshift({id: '', title:  'Выберите категорию ...'});

    return (
      <div>
        <Form horizontal onSubmit={this.categorySubmitHandler}>
        <FormElement
          propertyName="categoryId"
          title="Категория"
          type="select"
          options={categories}
          value={this.state.categoryId}
          changeHandler={this.onChangeHandler}
          error={this.props.postError &&
          this.props.postError.message}
        />
        </Form>
        <BootstrapTable data={this.state.books} hover pagination options={options} headerStyle={ { background: '#6ab9ff' } }>
          <TableHeaderColumn width='100' dataField='inventoryCode' isKey dataSort>Номер</TableHeaderColumn>
          <TableHeaderColumn dataField='registerDate' dataSort>Дата регистрации</TableHeaderColumn>
          <TableHeaderColumn dataField='author' dataSort>Автор</TableHeaderColumn>
          <TableHeaderColumn dataField='title' dataSort>Название</TableHeaderColumn>
          <TableHeaderColumn width='70' dataField='year' dataSort>Год издания</TableHeaderColumn>
          <TableHeaderColumn dataField='publishHouse' dataSort>Издательство</TableHeaderColumn>
          <TableHeaderColumn
            dataField='categoryId'
            // filterFormatted
            // dataFormat={ this.enumFormatter }
            // dataSort
            // formatExtraData={ this.state.categories }
            // filter={ { type: 'SelectFilter', options: this.state.categories } }
          >Категория</TableHeaderColumn>
          <TableHeaderColumn width='120' dataField='language' dataSort>Язык</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: sortArrayOfObjectsByKey(state.categories.categories, 'title')
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
    getBook: () => dispatch(getBook())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookTable);