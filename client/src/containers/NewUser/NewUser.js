import React, {Component, Fragment} from "react";
import {connect} from 'react-redux';
import {Alert, Button, Col, Form, FormGroup, PageHeader} from "react-bootstrap";

import FormElement from "../../components/UI/Form/FormElement";

class NewUser extends Component {
    state = {
        username: '',
        password: '',
        role: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitFormHandler = event => {
        event.preventDefault();

    };

    render() {

        return (
            <Fragment>
                <PageHeader>Создать нового пользователя</PageHeader>
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
                        required
                    />

                    <FormElement
                        propertyName="password"
                        title="Пароль"
                        placeholder="Введите пароль"
                        type="password"
                        value={this.state.password}
                        changeHandler={this.inputChangeHandler}
                        autoComplete="current-password"
                        required
                    />
                    <FormElement
                        propertyName="role"
                        title="Роль"
                        type="select"
                        options={[{
                            title: "Админимтратор",
                            id: "admin"
                        }, {
                            title: "Библиотекарь",
                            id: "librarian"
                        }, {
                            title: "Пользователь",
                            id: "user"
                        }]}
                        value={this.state.role}
                        changeHandler={this.inputChangeHandler}
                        required
                    />

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button
                                bsStyle="primary"
                                type="submit"
                            >Создать</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);