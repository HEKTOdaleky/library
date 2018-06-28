import React, {Component} from 'react';
import {connect} from "react-redux";
import {getLanguage} from "../../store/actions/languages";
import {getStatus} from "../../store/actions/status";
import {getCategories} from "../../store/actions/categories";
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import dateFormat from 'dateformat';


class AddBook extends Component {
    componentDidMount() {
        this.props.getLanguage();
        this.props.getStatus();
        this.props.getCategories();
    }

    state = {
        title: "",
        author: "",
        date: new Date().getFullYear(),
        registerDate:dateFormat(new Date(), "yyyy-mm-dd")
    };
    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    getValidationState() {
        if (this.state.date > 1800 && this.state.date <= new Date().getFullYear()) return 'success';
        else return 'error';
        return null;
    }

    render() {
        return (
            <FormGroup validationState={this.getValidationState()}>
                <ControlLabel>Добавить новую книгу</ControlLabel>
                <FormControl
                    type="text"
                    name="title"
                    value={this.state.title}
                    placeholder="Название книги"
                    onChange={this.onChangeHandler}
                />
                <FormControl
                    type="text"
                    name="author"
                    placeholder="Автор"
                    value={this.state.author}
                    onChange={this.onChangeHandler}
                />
                <FormControl
                    type="number"
                    name="date"
                    placeholder="Год издания"
                    value={this.state.date}
                    onChange={this.onChangeHandler}
                />
                <FormControl
                    type="date"
                    name="registerDate"
                    placeholder="Дата регистрации книги"
                    value={this.state.registerDate}
                    onChange={this.onChangeHandler}
                />
            </FormGroup>
        )
    }

};


const mapStateToProps = state => {
    return {
        languages: state.languages.languages,
        status: state.status.status,
        categories: state.categories.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLanguage: () => dispatch(getLanguage()),
        getStatus: () => dispatch(getStatus()),
        getCategories: () => dispatch(getCategories())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
