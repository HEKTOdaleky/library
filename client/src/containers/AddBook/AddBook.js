import React, {Component} from 'react';
import {connect} from "react-redux";
import {getLanguage} from "../../store/actions/languages";
import {getStatus} from "../../store/actions/status";
import {getCategories} from "../../store/actions/categories";
import {ControlLabel, FormGroup} from "react-bootstrap";
import dateFormat from 'dateformat';
import FormElement from "../../components/UI/Form/FormElement";


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
        registerDate: dateFormat(new Date(), "yyyy-mm-dd"),
        category: ""
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
        const categories = this.props.categories.map(category => {
            return {id: category._id, title: category.title};
        });
        return (
            <FormGroup validationState={this.getValidationState()}>
                <ControlLabel>Добавить новую книгу</ControlLabel>

                <FormElement
                    propertyName="title"
                    title="Название книги"
                    placeholder="Введите Название книги"
                    type="text"
                    value={this.state.title}
                    changeHandler={this.onChangeHandler}
                />

                <FormElement
                    propertyName="author"
                    title="Автор"
                    placeholder="Введите автора"
                    type="text"
                    value={this.state.author}
                    changeHandler={this.onChangeHandler}
                />

                <FormElement
                    propertyName="date"
                    title="Год издания"
                    placeholder="Введите год издания"
                    type="date"
                    value={this.state.date}
                    changeHandler={this.onChangeHandler}
                />
                <FormElement
                    propertyName="category"
                    title="Категория"
                    type="select"
                    options={categories}
                    value={this.state.category}
                    changeHandler={this.onChangeHandler}
                />
                <FormElement
                    propertyName="registerDate"
                    title="Дата регистрации книги"
                    placeholder="Дата регистрации книги"
                    type="date"
                    value={this.state.registerDate}
                    changeHandler={this.onChangeHandler}
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
