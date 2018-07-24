import React, { Component, Fragment } from "react";
import {connect} from "react-redux";
import  './Admin.css';
import { Tab, Tabs } from "react-bootstrap";

import BookTable from "../../components/BookTable/BookTable";
import {getBook} from "../../store/actions/books";

class Admin extends Component {

  componentDidMount() {
    this.props.getBook();
  }

  render() {

    return (
      <Fragment>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Главная">
            Tab 1 content
          </Tab>
          <Tab eventKey={2} title="Добавить">
            Tab 1 content
          </Tab>
          <Tab eventKey={3} title="Удалить">
            Tab 2 content
          </Tab>
          <Tab eventKey={4} title="Книги">
             <BookTable book={this.props.bookForTable} />
          </Tab>
          <Tab eventKey={5} title="Читатели">
            Tab 3 content
          </Tab>
          <Tab eventKey={6} title="Журналы">
            Tab 3 content
          </Tab>
          <Tab eventKey={7} title="Пользователи">
            Tab 3 content
          </Tab>
        </Tabs>
      </Fragment>
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
