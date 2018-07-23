import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class BookTable extends Component {

  state = {
    sortName: undefined,
    sortOrder: undefined
  };

  onSortChange = (sortName, sortOrder) => {
    // console.info('onSortChange', arguments);
    this.setState({
      sortName,
      sortOrder
    });
  };

  languageFormat = (cell, row) => {
    return row.language.title;
  };

  categoryFormat = (cell, row) => {
    return row.categoryId.title;
  };

  render() {
    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange
    };

    const book = this.props.book;

    return (
      <div>
        <BootstrapTable data={book} hover pagination options={options} headerStyle={ { background: '#6ab9ff' } }>
          <TableHeaderColumn width='100' dataField='inventoryCode' isKey dataSort>Номер</TableHeaderColumn>
          <TableHeaderColumn dataField='author' dataSort>Автор</TableHeaderColumn>
          <TableHeaderColumn dataField='title' dataSort>Название</TableHeaderColumn>
          <TableHeaderColumn width='120' dataField='year' dataSort>Год издания</TableHeaderColumn>
          <TableHeaderColumn dataField='publishHouse' dataSort>Издательство</TableHeaderColumn>
          <TableHeaderColumn dataFormat={this.categoryFormat} dataField='categoryId' dataSort>Категория</TableHeaderColumn>
          <TableHeaderColumn width='120' dataFormat={this.languageFormat} dataField='language' dataSort>Язык</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default BookTable;