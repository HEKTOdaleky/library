import React, {Component, Fragment} from 'react';
import {Button, Col, Collapse, Form, FormGroup, PageHeader, Well} from "react-bootstrap";
import FormElement from "../../../components/UI/Form/FormElement";
import {connect} from "react-redux";

import {getGroups} from "../../../store/actions/groups";
import {clearFindingReader, editReader, getReaderByPin} from "../../../store/actions/readers";

class EditReader extends Component {

  state = {
    firstName: '',
    lastName: '',
    documentNumber: '',
    groupId: '',
    inventoryCode: '',
    isFind: false
  };

  componentDidMount() {
    this.props.onGetGroups();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.findingReader);
    if (!nextProps.findingReader) {
      this.setState({
        firstName: '',
        lastName: '',
        documentNumber: '',
        groupId: '',
        inventoryCode: '',
        isFind: false
      });
      return null;
    }

    if (nextProps.findingReader !== this.props.findingReader) {
      this.setState({
        firstName: nextProps.findingReader.firstName,
        lastName: nextProps.findingReader.lastName,
        documentNumber: nextProps.findingReader.documentNumber,
        groupId: nextProps.findingReader.groupId,
        isFind: true
      });
    }
  }

  componentWillUnmount() {
    this.props.onClearFindingReader();
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  formFindSubmitHandler = async event => {
    event.preventDefault();
    this.props.onFindReader(this.state.inventoryCode);
  };

  formSubmitHandler = event => {
    event.preventDefault();
    this.props.onEditReader({
      _id: this.props.findingReader._id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      documentNumber: this.state.documentNumber,
      groupId: this.state.groupId
    });
  };

  render() {

    const groups = this.props.groups.map(group => {
      return {id: group._id, title: group.name};
    });

    return (
      <Fragment>
        <PageHeader>Редактирование данных читателя</PageHeader>
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

        <Collapse in={this.state.isFind}>
          <Well>
            <Form horizontal onSubmit={this.formSubmitHandler}>
              <FormElement
                propertyName="lastName"
                title="Фамилия"
                type="text"
                value={this.state.lastName}
                changeHandler={this.onChangeHandler}
                error={this.props.error &&
                this.props.error.message}
              />

              <FormElement
                propertyName="firstName"
                title="Имя"
                type="text"
                value={this.state.firstName}
                changeHandler={this.onChangeHandler}
                error={this.props.error &&
                this.props.error.message}
              />

              <FormElement
                propertyName="documentNumber"
                title="Номер документа"
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

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button bsStyle="primary" type="submit">Сохранить</Button>
                </Col>
              </FormGroup>
            </Form>
          </Well>
        </Collapse>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups.groups,
    error: state.readers.error,
    findingReader: state.readers.findingReader
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetGroups: () => dispatch(getGroups()),
    onFindReader: pin => dispatch(getReaderByPin(pin)),
    onEditReader: data => dispatch(editReader(data)),
    onClearFindingReader: () => dispatch(clearFindingReader())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditReader);