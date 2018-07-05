import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import FormElement from "../../../components/UI/Form/FormElement";
import {Button, Col, Form, FormGroup, Modal, PageHeader} from "react-bootstrap";
import {deleteCategory, getCategories} from "../../../store/actions/categories";

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
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Удаление</Modal.Title>
          </Modal.Header>

          <Modal.Body>{`Вы действительно хотите удалить категорию?`}</Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleClose}>Отказаться</Button>
            <Button onClick={this.clickHandler} bsStyle="primary">Удалить</Button>
          </Modal.Footer>
        </Modal>

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