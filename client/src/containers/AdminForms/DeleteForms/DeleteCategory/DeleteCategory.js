import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {Button, Col, Form, FormGroup, PageHeader} from "react-bootstrap";
import ModalForm from "../../../../components/UI/Modal/ModalForm";

import FormElement from "../../../../components/UI/Form/FormElement";
import {deleteCategory, getCategories} from "../../../../store/actions/categories";
import {sortArrayOfObjectsByKey} from "../../../../lib";

class DeleteCategory extends Component {
  state = {
    categoryId: "",
    show: false
  };

  componentDidMount() {
    this.props.getCategories();
  }

  clickHandler = event => {
    event.preventDefault();

    this.props.deleteCategory(this.state.categoryId);
    this.handleClose();
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const categories = this.props.categories.map(category => {
      return { id: category._id, title: category.title };
    });
    categories.unshift({id: '', title:  'Выберите категорию ...'});

    return (
      <Fragment>
        <ModalForm
          show={this.state.show}
          close={this.handleClose}
          title="Удаление категории книги"
          text="Вы действительно хотите удалить категорию книги?"
          action={this.clickHandler}
          buttonText="Удалить категорию"
        />

        <PageHeader>Удалить категорию</PageHeader>
        <Form horizontal onSubmit={this.clickHandler}>
          <FormElement
            propertyName="categoryId"
            title="Категория"
            type="select"
            options={categories}
            value={this.state.categoryId}
            changeHandler={this.onChangeHandler}
          />

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button
                disabled={!this.state.categoryId}
                onClick={this.handleShow}
                bsStyle="danger"
              >
                Удалить
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: sortArrayOfObjectsByKey(state.categories.categories, 'title')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
    deleteCategory: data => dispatch(deleteCategory(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCategory);
