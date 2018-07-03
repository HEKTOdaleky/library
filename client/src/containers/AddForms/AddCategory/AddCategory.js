import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup, PageHeader} from "react-bootstrap";
import {connect} from "react-redux";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import FormElement from "../../../components/UI/Form/FormElement";
import {addCategory} from "../../../store/actions/categories";

class AddCategory extends Component {
  state = {
    title: ''
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formSubmit = event => {
    event.preventDefault();
    this.props.addCategory(this.state);
  };

  render() {
    return (
      <Fragment>
        <NotificationContainer/>
        <PageHeader>Добавить новую категорию</PageHeader>
        <Form horizontal onSubmit={this.formSubmit}>
          <FormElement
            propertyName="title"
            title="Название категории"
            placeholder="Введите Название категории"
            type="text"
            value={this.state.title}
            changeHandler={this.onChangeHandler}
          />

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button bsStyle="primary" type="submit">Добавить</Button>
            </Col>
          </FormGroup>
        </Form>

      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    category: state.title
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCategory: data => dispatch(addCategory(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
