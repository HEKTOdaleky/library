import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import moment from "moment/moment";

class BookTable extends Component {

  state = {
    books: [],
    sortName: undefined,
    sortOrder: undefined
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.book) {

      const books = nextProps.book.map(book => {
        const registerDate = moment(book.registerDate).format("DD-MM-YYYY h:mm");
        return {
          ...book,
          language: book.language.title,
          categoryId: book.categoryId.title,
          registerDate
        }
      });

      return {books: books};
    }

    return {books: []};
  }

  onSortChange = (sortName, sortOrder) => {
    this.setState({
      sortName,
      sortOrder
    });
  };

  render() {
    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange
    };

    return (
      <div>
        <BootstrapTable data={this.state.books} hover pagination options={options} headerStyle={ { background: '#6ab9ff' } }>
          <TableHeaderColumn width='100' dataField='inventoryCode' isKey dataSort>Номер</TableHeaderColumn>
          <TableHeaderColumn dataField='registerDate' dataSort>Дата регистрации</TableHeaderColumn>
          <TableHeaderColumn dataField='author' dataSort>Автор</TableHeaderColumn>
          <TableHeaderColumn dataField='title' dataSort>Название</TableHeaderColumn>
          <TableHeaderColumn width='70' dataField='year' dataSort>Год издания</TableHeaderColumn>
          <TableHeaderColumn dataField='publishHouse' dataSort>Издательство</TableHeaderColumn>
          <TableHeaderColumn dataField='categoryId' dataSort>Категория</TableHeaderColumn>
          <TableHeaderColumn width='120' dataField='language' dataSort>Язык</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default BookTable;