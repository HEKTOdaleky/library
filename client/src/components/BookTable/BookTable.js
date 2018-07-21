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
    console.log(book);

    return (
      <div>
        <BootstrapTable data={book} options={options}>
          <TableHeaderColumn dataField='inventoryCode' isKey dataSort>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default BookTable;