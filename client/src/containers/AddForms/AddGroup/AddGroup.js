import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup, PageHeader} from "react-bootstrap";
import {connect} from "react-redux";

import FormElement from "../../../components/UI/Form/FormElement";
import {addGroup} from "../../../store/actions/groups";

class AddGroup extends Component {
  state = {
    name: ''
  };

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  submitFormHandler = event => {
    event.preventDefault();
    this.props.onAddGroup(this.state);
  };

  render() {
    return (
      <Fragment>
        <PageHeader>Добавить новую группу учащихся</PageHeader>

        <Form
          horizontal onSubmit={this.submitFormHandler}>

          <FormElement
            propertyName="name"
            title="Название группы"
            placeholder="Введите название группы"
            type="text"
            value={this.state.name}
            changeHandler={this.inputChangeHandler}
            error={this.props.postError && this.props.postError.message}
          />

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button bsStyle="primary" type="submit">Добавить</Button>
            </Col>
          </FormGroup>

        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  postError: state.groups.postError
});

const mapDispatchToProps = dispatch => ({
  onAddGroup: group => dispatch(addGroup(group))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup);