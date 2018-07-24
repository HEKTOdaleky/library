import React, {Component, Fragment} from 'react';
import { Button, Col, Form, FormGroup, PageHeader } from "react-bootstrap";
import {connect} from "react-redux";
import dateFormat from "dateformat";

import FormElement from "../../../../components/UI/Form/FormElement";
import {getGroups} from "../../../../store/actions/groups";
import {addNewReader} from "../../../../store/actions/readers";
import {sortArrayOfObjectsByKey} from "../../../../lib";

class AddReader extends Component {

  state = {
    firstName: '',
    lastName: '',
    documentNumber: '',
    groupId: '',
    registerDate: dateFormat(new Date(), "yyyy-mm-dd")
  };

  componentDidMount() {
    this.props.getGroups();
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  formSubmitHandler = event => {
    event.preventDefault();
    this.props.addNewReader(this.state).then(() => {
      if (this.props.newReader) this.props.history.push("/print-reader-card");
    })
  };

  render() {
    const groups = this.props.groups.map(group => {
      return {id: group._id, title: group.name};
    });
    groups.unshift({id: '', title: 'Выберите группу ...'});

  return (
    <Fragment>
      <Form horizontal onSubmit={this.formSubmitHandler}>
        <PageHeader>Добавить нового читателя</PageHeader>

        <FormElement
          propertyName="lastName"
          title="Фамилия"
          placeholder="Фамилия"
          type="text"
          changeHandler={this.onChangeHandler}
          error={this.props.error &&
          this.props.error.message}
        />

        <FormElement
          propertyName="firstName"
          title="Имя"
          placeholder="Имя"
          type="text"
          value={this.state.firstName}
          changeHandler={this.onChangeHandler}
          error={this.props.error &&
          this.props.error.message}
        />

        <FormElement
          propertyName="documentNumber"
          title="Номер документа"
          placeholder="Номер документа"
          type="text"
          value={this.state.documentNumber}
          changeHandler={this.onChangeHandler}
          error={this.props.error &&
          this.props.error.message}
        />

        <FormElement
          propertyName="groupId"
          title="Группа"
          type="select"
          options={groups}
          value={this.state.groupId}
          changeHandler={this.onChangeHandler}
          error={this.props.error &&
          this.props.error.message}
        />

        <FormElement
          propertyName="registerDate"
          title="Дата регистрации читателя"
          placeholder="Дата регистрации"
          type="date"
          value={this.state.registerDate}
          changeHandler={this.onChangeHandler}
          error={this.props.error &&
          this.props.error.message}
        />

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button bsStyle="primary" type="submit" style={{marginRight: '20px'}}>Добавить</Button>
          </Col>
        </FormGroup>
      </Form>
    </Fragment>
  );
  }
}

const mapStateToProps = state => {
  return {
    groups: sortArrayOfObjectsByKey(state.groups.groups, 'name'),
    error: state.readers.error,
    newReader: state.readers.newReader
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getGroups: () => dispatch(getGroups()),
    addNewReader: data => dispatch(addNewReader(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReader);