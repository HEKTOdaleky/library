import React, { Component, Fragment } from "react";
import {connect} from "react-redux";
import { Tab, Tabs} from "react-bootstrap";
import  './Admin.css';

import BookTable from "../../components/BookTable/BookTable";
import {getBook} from "../../store/actions/books";
import AddAdminMenu from "../../components/UI/Menus/AddAdminMenu/AddAdminMenu";
import DeleteAdminMenu from "../../components/UI/Menus/DeleteAdminMenu/DeleteAdminMenu";
import EditAdminMenu from "../../components/UI/Menus/EditAdminMenu/EditAdminMenu";


class Admin extends Component {

  componentDidMount() {
    this.props.getBook();
  }

  render() {
    return (
      <Fragment>
        <Tabs defaultActiveKey={1} id="admin-tabs">
          <Tab eventKey={1} title="Главная">
            Tab 1 content
          </Tab>
          <Tab eventKey={2} title="Добавить">
            <AddAdminMenu/>
          </Tab>
          <Tab eventKey={3} title="Удалить">
            <DeleteAdminMenu/>
          </Tab>
          <Tab eventKey={4} title="Редактировать">
            <EditAdminMenu/>
          </Tab>
          <Tab eventKey={5} title="Книги">
             <BookTable book={this.props.bookForTable} />
          </Tab>
          <Tab eventKey={6} title="Читатели">
            Tab 3 content
          </Tab>
          <Tab eventKey={7} title="Журналы">
            Tab 3 content
          </Tab>
          <Tab eventKey={8} title="Пользователи">
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