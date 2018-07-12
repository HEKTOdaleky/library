import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {getLanguage} from "../../../../store/actions/languages";
import {getStatus} from "../../../../store/actions/status";
import {getCategories} from "../../../../store/actions/categories";
import { Button, Col, Collapse, Form, FormGroup, PageHeader, Well } from "react-bootstrap";
import dateFormat from 'dateformat';
import FormElement from "../../../../components/UI/Form/FormElement";
import {clearFindingBook, getBookByBarcode, updateBookData} from "../../../../store/actions/books";


class editBook extends Component {
  state = {
    id: '',
    title: '',
    author: '',
    year: new Date().getFullYear(),
    registerDate: dateFormat(new Date(), "yyyy-mm-dd"),
    categoryId: '',
    statusId: '',
    publishHouse: '',
    price: 0,
    language: '',
    inventoryCode: '',
    isFind: false
  };

  componentDidMount() {
    this.props.getLanguage();
    this.props.getStatus();
    this.props.getCategories();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.findingBook) {
      this.setState({
        id: nextProps.findingBook._id,
        title: nextProps.findingBook.title,
        author: nextProps.findingBook.author,
        year: nextProps.findingBook.year,
        registerDate: dateFormat(nextProps.findingBook.registerDate, "yyyy-mm-dd"),
        categoryId: nextProps.findingBook.categoryId,
        statusId: nextProps.findingBook.statusId,
        publishHouse: nextProps.findingBook.publishHouse,
        price: nextProps.findingBook.price,
        language: nextProps.findingBook.language,
        isFind: true
      });
    }
  }

  componentWillUnmount() {
    this.props.clearFindingBook();
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getValidationState() {
    if (this.state.year > 1800 && this.state.year <= new Date().getFullYear()) return null;
    else return 'error';
  }

  clickHandler = event => {
    event.preventDefault();
    this.props.updateBookData(this.state);
  };

  formFindSubmitHandler = async event => {
    event.preventDefault();
    this.props.getBookByBarcode(this.state.inventoryCode);
    this.setState({inventoryCode: ''});
  };

  render() {
    const categories = this.props.categories.map(category => {
      return {id: category._id, title: category.title};
    });
    const status = this.props.status.map(state => {
      return {id: state._id, title: state.name};
    });
    const lang = this.props.languages.map(lang => {
      return {id: lang._id, title: lang.title};
    });

    return (
      <Fragment>
        <PageHeader>Внести изменения в книге</PageHeader>
        <Form horizontal onSubmit={this.formFindSubmitHandler} style={{padding: '0 20px'}}>
          <FormElement
            propertyName="inventoryCode"
            title="ПИН"
            placeholder="ПИН"
            type="text"
            inputLength={6}
            changeHandler={this.onChangeHandler}
            error={this.props.error &&
            this.props.error.message}
          />

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button bsStyle="primary" type="submit">Найти</Button>
            </Col>
          </FormGroup>
        </Form>

        <Collapse in={this.state.isFind || false}>
          <Well>
            <Form horizontal onSubmit={this.clickHandler}>
              <FormElement
                propertyName="title"
                title="Название книги"
                placeholder="Введите Название книги"
                type="text"
                value={this.state.title || ''}
                changeHandler={this.onChangeHandler}
                required
                error={this.props.updateError &&
                this.props.updateError.message}
              />

              <FormElement
                propertyName="author"
                title="Автор"
                placeholder="Введите автора"
                type="text"
                value={this.state.author || ''}
                changeHandler={this.onChangeHandler}
                error={this.props.updateError &&
                this.props.updateError.message}
              />

              <FormElement
                propertyName="year"
                title="Год издания"
                placeholder="Введите год издания"
                type="number"
                value={this.state.year || new Date().getFullYear()}
                changeHandler={this.onChangeHandler}
                error={this.props.updateError &&
                this.props.updateError.message}
              />

              <FormElement
                propertyName="categoryId"
                title="Категория"
                type="select"
                options={categories}
                value={this.state.categoryId || ''}
                changeHandler={this.onChangeHandler}
                error={this.props.updateError &&
                this.props.updateError.message}
              />

              <FormElement
                propertyName="statusId"
                title="Статус"
                type="select"
                options={status}
                value={this.state.statusId || ''}
                changeHandler={this.onChangeHandler}
                error={this.props.updateError &&
                this.props.updateError.message}
              />

              <FormElement
                propertyName="publishHouse"
                title="Издательство"
                placeholder="Издательский дом"
                type="text"
                value={this.state.publishHouse || ''}
                changeHandler={this.onChangeHandler}
                error={this.props.updateError &&
                this.props.updateError.message}
              />

              <FormElement
                propertyName="language"
                title="Язык"
                type="select"
                options={lang}
                value={this.state.language || ''}
                changeHandler={this.onChangeHandler}
                error={this.props.updateError &&
                this.props.updateError.message}
              />

              <FormElement
                propertyName="price"
                title="Стоимость"
                placeholder="Стоимость"
                type="number"
                value={this.state.price || 0}
                changeHandler={this.onChangeHandler}
                error={this.props.updateError &&
                this.props.updateError.message}
              />

              <FormElement
                propertyName="registerDate"
                title="Дата регистрации книги"
                placeholder="Дата регистрации книги"
                type="date"
                value={this.state.registerDate || dateFormat(new Date(), "yyyy-mm-dd")}
                changeHandler={this.onChangeHandler}
                error={this.props.updateError &&
                this.props.updateError.message}
              />

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button onClick={this.clickHandler} bsStyle="primary" type="submit">Применить</Button>
                </Col>
              </FormGroup>
            </Form>
          </Well>
        </Collapse>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages.languages,
    status: state.status.status,
    categories: state.categories.categories,
    updateError: state.books.updateError,
    findingBook: state.books.findingBook
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLanguage: () => dispatch(getLanguage()),
    getStatus: () => dispatch(getStatus()),
    getCategories: () => dispatch(getCategories()),
    getBookByBarcode: barcode => dispatch(getBookByBarcode(barcode)),
    updateBookData: data => dispatch(updateBookData(data)),
    clearFindingBook: () => dispatch(clearFindingBook())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(editBook);