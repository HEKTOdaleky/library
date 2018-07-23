import React, { Component, Fragment } from "react";
import {connect} from "react-redux";
import BookTable from "../../components/BookTable/BookTable";
import {getBook} from "../../store/actions/books";
import { Menu, Segment } from "semantic-ui-react";

class Admin extends Component {
  state = { activeItem: 'Рабочий стол' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    this.props.getBook();
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Fragment>
        <Menu attached='top' tabular>
          <Menu.Item name='Рабочий стол' active={activeItem === 'Рабочий стол'} onClick={this.handleItemClick} />
          <Menu.Item name='Добавить' active={activeItem === 'Добавить'} onClick={this.handleItemClick} />
          <Menu.Item name='Удалить' active={activeItem === 'Удалить'} onClick={this.handleItemClick} />
          <Menu.Item name='Книги' active={activeItem === 'Книги'} onClick={this.handleItemClick} />
          <Menu.Item name='Читатели' active={activeItem === 'Читатели'} onClick={this.handleItemClick} />
          <Menu.Item name='Личный кабинет' active={activeItem === 'Личный кабинет'} onClick={this.handleItemClick} />
        </Menu>

        { this.state.activeItem === 'Рабочий стол' ?
            <Segment raised textAlign='center' attached='bottom'>

            </Segment> : null }

        { this.state.activeItem === 'Книги' ?
            <Segment raised>
                <BookTable book={this.props.bookForTable}/>
            </Segment> : null }

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
