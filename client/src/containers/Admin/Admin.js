import React, { Component } from "react";
import { connect } from "react-redux";
import BookTable from "../../components/BookTable/BookTable";
import {getBook} from "../../store/actions/books";

class Admin extends Component {

  componentDidMount () {
    this.props.getBook();
  }

  render() {
    return (
      <div className="container">
        <h3>Книги в наличии</h3>
        <BookTable
          book={this.props.bookForTable}
          // getBook={this.getBook}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookForTable: state.books.bookForTable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBook: () => dispatch(getBook())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Admin);
