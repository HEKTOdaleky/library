import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup, PageHeader} from "react-bootstrap";

import ModalForm from "../../../../components/UI/Modal/ModalForm";
import FormElement from "../../../../components/UI/Form/FormElement";

class DeleteUser extends Component {
  state = {
    userId: '',
    show: false
  };

  componentDidMount() {

  };

  clickHandler = event => {
    event.preventDefault();
    this.props.deleteUser(this.state.userId);
    this.handleClose();
  };

  handleClose = () => {
    this.setState({show: false});
  };

  handleShow = () => {
    this.setState({show: true});
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const user = this.props.user.map(state => {
      return {id: state._id, title: state.username};
    });
    user.unshift({id: '', title: 'Выберите пользователя ...'});

    return (
      <Fragment>
        <ModalForm
          show={this.state.show}
          close={this.handleClose}
          title="Удаление пользователя"
          text="Вы действительно хотите удалить пользователя?"
          action={this.clickHandler}
          buttonText="Удалить пользователя"
        />

        <Form horizontal onSubmit={this.clickHandler}>
          <PageHeader>Удалить пользователя</PageHeader>
          <FormElement
            propertyName="userId"
            title="Пользователь"
            type="select"
            options={user}
            value={this.state.userId}
            changeHandler={this.onChangeHandler}
            error={this.props.postError && this.props.postError.message}
          />
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button
                disabled={!this.state.userId}
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
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);