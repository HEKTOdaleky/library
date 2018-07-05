import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {getLanguage} from "../../../store/actions/languages";
import {getStatus} from "../../../store/actions/status";
import {getCategories} from "../../../store/actions/categories";
import {Alert, Button, Col, Form, FormGroup, PageHeader} from "react-bootstrap";
import dateFormat from 'dateformat';
import FormElement from "../../../components/UI/Form/FormElement";
import {postBooksData} from "../../../store/actions/books";


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
        language: ""
    };
    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    getValidationState() {
        if (this.state.year > 1800 && this.state.year <= new Date().getFullYear()) return null;
        else return 'error';
    }

    clickHandler = event => {
        event.preventDefault();
        this.props.postBooksData(this.state);

    };

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
            <Fragment>
                <PageHeader>Добавить новую книгу</PageHeader>

                <Form
                    horizontal onSubmit={this.clickHandler}>
                    {this.props.postError &&
                    <Alert bsStyle="danger">{this.props.postError.message._message}</Alert>
                    }

                    <FormElement
                        propertyName="title"
                        title="Название книги"
                        placeholder="Введите Название книги"
                        type="text"
                        value={this.state.title}
                        changeHandler={this.onChangeHandler}
                        required
                        error={this.props.postError &&
                        this.props.postError.message.errors.title
                        && this.props.postError.message.errors.title.message}

                    />

                    <FormElement
                        propertyName="author"
                        title="Автор"
                        placeholder="Введите автора"
                        type="text"
                        value={this.state.author}
                        changeHandler={this.onChangeHandler}
                        error={this.props.postError &&
                        this.props.postError.message.errors.author
                        && this.props.postError.message.errors.author.message}
                    />

                    <FormElement
                        propertyName="year"
                        title="Год издания"
                        placeholder="Введите год издания"
                        type="number"
                        value={this.state.year}
                        changeHandler={this.onChangeHandler}
                        error={this.props.postError &&
                        this.props.postError.message.errors.year
                        && this.props.postError.message.errors.year.message}
                    />
                    <FormElement
                        propertyName="categoryId"
                        title="Категория"
                        type="select"
                        options={categories}
                        value={this.state.categoryId}
                        changeHandler={this.onChangeHandler}
                        error={this.props.postError &&
                        this.props.postError.message.errors.categoryId
                        && this.props.postError.message.errors.categoryId.message}
                    />
                    <FormElement
                        propertyName="statusId"
                        title="Статус"
                        type="select"
                        options={status}
                        value={this.state.statusId}
                        changeHandler={this.onChangeHandler}
                        error={this.props.postError &&
                        this.props.postError.message.errors.groupId
                        && this.props.postError.message.errors.groupId.message}
                    />
                    <FormElement
                        propertyName="publishHouse"
                        title="Издательство"
                        placeholder="Издательский дом"
                        type="text"
                        value={this.state.publishHouse}
                        changeHandler={this.onChangeHandler}
                        error={this.props.postError &&
                        this.props.postError.message.errors.publishHouse
                        && this.props.postError.message.errors.publishHouse.message}
                    />
                    <FormElement
                        propertyName="language"
                        title="Язык"
                        type="select"
                        options={lang}
                        value={this.state.language}
                        changeHandler={this.onChangeHandler}
                        error={this.props.postError &&
                        this.props.postError.message.errors.language
                        && this.props.postError.message.errors.language.message}
                    />
                    <FormElement
                        propertyName="price"
                        title="Стоимость"
                        placeholder="Стоимость"
                        type="number"
                        value={this.state.price}
                        changeHandler={this.onChangeHandler}
                        error={this.props.postError &&
                        this.props.postError.message.errors.price
                        && this.props.postError.message.errors.price.message}
                    />
                    <FormElement
                        propertyName="registerDate"
                        title="Дата регистрации книги"
                        placeholder="Дата регистрации книги"
                        type="date"
                        value={this.state.registerDate}
                        changeHandler={this.onChangeHandler}
                        error={this.props.postError &&
                        this.props.postError.message.errors.registerDate
                        && this.props.postError.message.errors.registerDate.message}
                    />

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button onClick={this.clickHandler} bsStyle="primary" type="submit">Добавить</Button>
                        </Col>
                    </FormGroup>

                </Form>
            </Fragment>
        )
    }

}


const mapStateToProps = state => {
    return {
        languages: state.languages.languages,
        status: state.status.status,
        categories: state.categories.categories,
        postError: state.books.postError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLanguage: () => dispatch(getLanguage()),
        getStatus: () => dispatch(getStatus()),
        getCategories: () => dispatch(getCategories()),
        postBooksData: (data) => dispatch(postBooksData(data))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
