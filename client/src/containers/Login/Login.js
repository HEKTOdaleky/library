import React, {Component, Fragment} from "react";
import {connect} from 'react-redux';
import {Alert, Button, Col, Form, FormGroup, PageHeader} from "react-bootstrap";

import FormElement from "../../components/UI/Form/FormElement";
import {loginUser} from "../../store/actions/users";

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitFormHandler = event => {
    event.preventDefault();

    this.props.loginUser(this.state);
  };

  render() {
    return (
      <Fragment>
        <PageHeader>Форма авторизации</PageHeader>
        <Form horizontal onSubmit={this.submitFormHandler}>
          {this.props.error &&
          <Alert bsStyle="danger">{this.props.error.error}</Alert>
          }

          <FormElement
            propertyName="username"
            title="Имя пользователя"
            placeholder="Введите имя пользователя"
            type="text"
            value={this.state.username}
            changeHandler={this.inputChangeHandler}
            autoComplete="current-username"
          />

          <FormElement
            propertyName="password"
            title="Пароль"
            placeholder="Введите пароль"
            type="password"
            value={this.state.password}
            changeHandler={this.inputChangeHandler}
            autoComplete="current-password"
          />

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button
                bsStyle="primary"
                type="submit"
              >Войти</Button>
            </Col>
          </FormGroup>
        </Form>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  error: state.users.loginError
});

const mapDispatchToProps = dispatch => ({
  loginUser: userData => dispatch(loginUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);