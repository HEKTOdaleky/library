import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import FormElement from "../../../components/UI/Form/FormElement";
import {Button, Col, Form, FormGroup, PageHeader} from "react-bootstrap";
import {deleteCategory, getCategories} from "../../../store/actions/categories";
import ModalForm from "../../../components/UI/Modal/ModalForm";

class DeleteCategory extends Component {
  state = {
    categoryId: '',
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
    this.setState({show: false})
  };

  handleShow = () => {
    this.setState({show: true})
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const categories = this.props.categories.map(category => {
      return {id: category._id, title: category.title};
    });

    return (
      <Fragment>
        <ModalForm
          show={this.state.show}
          close={this.handleClose}
          title="Удаление категории"
          text="Вы действительно хотите удалить категорию?"
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
              <Button disabled={!this.state.categoryId}
                      onClick={this.handleShow}
                      bsStyle="danger">Удалить</Button>
            </Col>
          </FormGroup>

        </Form>
      </Fragment>
    )
  }
}


const mapStateToProps = state => {
  return {
    categories: state.categories.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
    deleteCategory: (data) => dispatch(deleteCategory(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCategory);