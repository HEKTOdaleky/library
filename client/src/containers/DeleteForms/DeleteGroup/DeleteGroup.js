import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import FormElement from "../../../components/UI/Form/FormElement";
import { Button, Col, Form, FormGroup, PageHeader } from "react-bootstrap";
import { deleteGroup, getGroups } from "../../../store/actions/groups";
import ModalForm from "../../../components/UI/Modal/ModalForm";

class DeleteGroup extends Component {
  state = {
    groupId: "",
    show: false
  };

  componentDidMount() {
    this.props.getGroups();
  }

  formSubmitHandler = event => {
    event.preventDefault();
    this.props.deleteGroup(this.state.groupId);
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
    const groups = this.props.groups.map(state => {
      return { id: state._id, title: state.name };
    });
    groups.unshift({id: '', title:  'Выберите группу ...'});

    return (
      <Fragment>
        <ModalForm
          show={this.state.show}
          close={this.handleClose}
          title="Удаление группы"
          text="Вы действительно хотите удалить группу?"
          action={this.formSubmitHandler}
          buttonText="Удалить группу"
        />

        <Form horizontal onSubmit={this.formSubmitHandler}>
          <PageHeader>Удалить группу</PageHeader>
          <FormElement
            propertyName="groupId"
            title="Группа"
            type="select"
            options={groups}
            value={this.state.groupId}
            changeHandler={this.onChangeHandler}
          />
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button
                disabled={!this.state.groupId}
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
    groups: state.groups.groups
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGroups: () => dispatch(getGroups()),
    deleteGroup: id => dispatch(deleteGroup(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteGroup);
