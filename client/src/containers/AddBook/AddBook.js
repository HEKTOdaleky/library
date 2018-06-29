import React, {Component} from 'react';
import {connect} from "react-redux";
import {getLanguage} from "../../store/actions/languages";
import {getStatus} from "../../store/actions/status";
import {getCategories} from "../../store/actions/categories";
import {Button, Col, ControlLabel, FormGroup} from "react-bootstrap";
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
        year: new Date().getFullYear(),
        registerDate: dateFormat(new Date(), "yyyy-mm-dd"),
        categoryId: "",
        statusId: "",
        publishHouse: "",
        price: 0,
        language:""
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
    clickHandler=event=>{
        event.preventDefault();
        console.log(this.state)

    }

    render() {
        const categories = this.props.categories.map(category => {
            return {id: category._id, title: category.title};
        });
        const status = this.props.status.map(state => {
            return {id: state._id, title: state.name};
        });
        const lang = this.props.languages.map(lang => {
            return {id: lang._id, title: lang.title};
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
                    propertyName="year"
                    title="Год издания"
                    placeholder="Введите год издания"
                    type="number"
                    value={this.state.year}
                    changeHandler={this.onChangeHandler}
                />
                <FormElement
                    propertyName="categoryId"
                    title="Категория"
                    type="select"
                    options={categories}
                    value={this.state.categoryId}
                    changeHandler={this.onChangeHandler}
                />
                <FormElement
                    propertyName="statusId"
                    title="Статус"
                    type="select"
                    options={status}
                    value={this.state.statusId}
                    changeHandler={this.onChangeHandler}
                />
                <FormElement
                    propertyName="publishHouse"
                    title="Издательство"
                    placeholder="Издательский дом"
                    type="text"
                    value={this.state.publishHouse}
                    changeHandler={this.onChangeHandler}
                />
                <FormElement
                    propertyName="language"
                    title="Язык"
                    type="select"
                    options={lang}
                    value={this.state.language}
                    changeHandler={this.onChangeHandler}
                />
                <FormElement
                    propertyName="price"
                    title="Стоимость"
                    placeholder="Стоимость"
                    type="number"
                    value={this.state.price}
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

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button onClick={this.clickHandler} bsStyle="primary" type="submit">Save</Button>
                    </Col>
                </FormGroup>

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
