import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Row
} from "react-bootstrap";
import {getReaderByBarcode} from "../../../store/actions/readers";
import { getBookByBarcode } from "../../../store/actions/books";
import GetBookFormForBook from "../../../components/GetBookFormForBook/GetBookFormForBook";
import GetBookFormForReader from "../../../components/GetBookFormForReader/GetBookFormForReader";

class GetBook extends Component {

  render() {
    return (
      <Fragment>
      <Row>
        <GetBookFormForBook
          getBook={this.props.getBookByBarcode}
          book={this.props.findingBook}/>
        <GetBookFormForReader
          getReader={this.props.getReaderByBarcode}
          reader={this.props.findingReader}/>
      </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.readers.error,
    findingReader: state.readers.findingReader,
    findingBook: state.books.findingBook
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getReaderByBarcode: barcode => dispatch(getReaderByBarcode(barcode)),
    getBookByBarcode: barcode => dispatch(getBookByBarcode(barcode))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(GetBook);