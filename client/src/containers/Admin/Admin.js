import React, {Component} from "react";
import {connect} from "react-redux";
import BookTable from "../../components/BookTable/BookTable";
import {getBook} from "../../store/actions/books";
import {Tab, Tabs} from "react-bootstrap";

class Admin extends Component {

  componentDidMount() {
    this.props.getBook();
  }

  render() {
    return (
      <div className="container">
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Книги в наличии">
            <BookTable book={this.props.bookForTable}/>
          </Tab>
        </Tabs>
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
