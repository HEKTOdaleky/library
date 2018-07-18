import React, {Component, Fragment} from "react";
import {connect} from 'react-redux';
import {Alert, Button, Col, Form, FormGroup, PageHeader} from "react-bootstrap";

import FormElement from "../../../../components/UI/Form/FormElement";

class ChangePassword extends Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        passError: null
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitFormHandler = event => {
        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({passError: "Пароли не совпадают"});
        }
    };

    render() {
        return (
            <Fragment>
                <PageHeader>Сменить пароль для пользователя</PageHeader>
                <Form horizontal onSubmit={this.submitFormHandler}>
                    {this.props.createError &&
                    <Alert bsStyle="danger">{this.props.createError._message}</Alert>
                    }

                    <FormElement
                        propertyName="username"
                        title="Имя пользователя"
                        placeholder="Введите имя пользователя"
                        type="text"
                        value={this.state.username}
                        changeHandler={this.inputChangeHandler}
                        autoComplete="current-username"
                        required
                        error={false}
                    />

                    <FormElement
                        propertyName="password"
                        title="Пароль"
                        placeholder="Введите пароль"
                        type="password"
                        value={this.state.password}
                        changeHandler={this.inputChangeHandler}
                        required
                        error={this.state.passError}
                    />
                    <FormElement
                        propertyName="confirmPassword"
                        title="Подтвердите пароль"
                        placeholder="Подтвердите пароль"
                        type="password"
                        value={this.state.confirmPassword}
                        changeHandler={this.inputChangeHandler}
                        required
                        error={this.state.passError}
                    />
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button
                                bsStyle="primary"
                                type="submit"
                            >Изменить</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);