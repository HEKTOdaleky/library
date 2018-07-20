import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Col, Form, FormGroup, PageHeader } from "react-bootstrap";

import FormElement from "../../../../components/UI/Form/FormElement";
import ModalForm from "../../../../components/UI/Modal/ModalForm";
import { deleteStatus, getStatus } from "../../../../store/actions/status";
import {sortArrayOfObjectsByKey} from "../../../../lib";

class DeleteStatus extends Component {
  state = {
    statusId: "",
    show: false
  };

  componentDidMount() {
    this.props.getStatus();
  }

  clickHandler = event => {
    event.preventDefault();
    this.props.deleteStatus(this.state.statusId);
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
    const status = this.props.status.map(state => {
      return { id: state._id, title: state.name };
    });
    status.unshift({id: '', title:  'Выберите статус ...'});

    return (
      <Fragment>
        <ModalForm
          show={this.state.show}
          close={this.handleClose}
          title="Удаление статуса книги"
          text="Вы действительно хотите удалить статус книги?"
          action={this.clickHandler}
          buttonText="Удалить статус"
        />

        <Form horizontal onSubmit={this.clickHandler}>
          <PageHeader>Удалить статус книги</PageHeader>
          <FormElement
            propertyName="statusId"
            title="Статус книги"
            type="select"
            options={status}
            value={this.state.statusId}
            changeHandler={this.onChangeHandler}
            error={this.props.postError && this.props.postError.message}
          />
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button
                disabled={!this.state.statusId}
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
    status: sortArrayOfObjectsByKey(state.status.status, 'name')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStatus: () => dispatch(getStatus()),
    deleteStatus: data => dispatch(deleteStatus(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteStatus);
