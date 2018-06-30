import React, {Component} from 'react'
import {connect} from "react-redux";
import {postStatus} from "../../store/actions/status";
import FormElement from "../../components/UI/Form/FormElement";
import {Button, Form} from "react-bootstrap";


class AddStatus extends Component {
    state = {
        name: "",
        description: ""
    };
    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    clickHandler = event => {
        event.preventDefault();
        this.props.postStatus(this.state);

    };

    render() {
        return (<Form
            horizontal onSubmit={this.clickHandler}>
            <FormElement
                propertyName="name"
                title="Название статуса"
                placeholder="Введите название статуса"
                type="text"
                value={this.state.name}
                changeHandler={this.onChangeHandler}
                required
                error={this.props.statusErr &&
                this.props.statusErr.message.name.title
                && this.props.statusErr.message.errors.name.message}

            />
            <FormElement
                propertyName="description"
                title="Описание статуса"
                placeholder="Введите описание статуса"
                type="text"
                value={this.state.description}
                changeHandler={this.onChangeHandler}
                required
                error={this.props.statusErr &&
                this.props.statusErr.message.errors.description
                && this.props.statusErr.message.errors.description.message}

            />
            <Button bsStyle="primary" type="submit">Отправить</Button></Form>)
    }
};

const mapStateToProps = state => {
    return {
        statusErr: state.status.err
    }
};

const mapDispatchToProps = dispatch => {
    return {
        postStatus: (data) => dispatch(postStatus(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStatus);