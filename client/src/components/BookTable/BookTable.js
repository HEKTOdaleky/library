import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class BookTable extends Component {

  state = {
    sortName: undefined,
    sortOrder: undefined
  };

  onSortChange = (sortName, sortOrder) => {
    console.info('onSortChange', arguments);
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

    const book = this.props.book;

    return (
      <div>
        <BootstrapTable data={book} pagination options={options}>
          <TableHeaderColumn width='100' dataField='inventoryCode' isKey dataSort>Номер</TableHeaderColumn>
          <TableHeaderColumn dataField='author' dataSort>Автор</TableHeaderColumn>
          <TableHeaderColumn dataField='title' dataSort>Название</TableHeaderColumn>
          <TableHeaderColumn width='120' dataField='year' dataSort>Год издания</TableHeaderColumn>
          <TableHeaderColumn dataField='publishHouse' dataSort>Издательство</TableHeaderColumn>
          <TableHeaderColumn dataField='language' dataSort>Язык</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default BookTable;