import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup, Table} from "react-bootstrap";
import moment from "moment/moment";
import FormElement from "../../../../components/UI/Form/FormElement";
import {connect} from "react-redux";
import {getBookForDelete, getBooksFromSearchNull, removeBookForDelete} from "../../../../store/actions/books";


class DeleteBookAdmin extends Component {
    componentDidMount() {
        this.props.getBookForDelete();
    }

    componentWillUnmount() {
        this.props.getBooksFromSearchNull()
    }

    state = {
        order: ""
    };
    orderInputChangeHandler = event => {
        this.setState({order: event.target.value})
    };
    removeAllBooksHandler = () => {

        this.props.removeBookForDelete({books: this.props.books, order: this.state.order})
    };


    render() {
        return (


            <Fragment>
                {this.props.books.length > 0
                    ? (
                        <Fragment>
                            <Table striped bordered condensed hover responsive>
                                <thead>
                                <tr style={{textAlign: "center"}}>
                                    <th># Код</th>
                                    <th>Название</th>
                                    <th>Автор</th>
                                    <th>Категория</th>
                                    <th>Год</th>
                                    <th>Издание</th>
                                    <th>Язык</th>
                                    <th>Дата регистрации</th>

                                </tr>
                                </thead>
                                <tbody>
                                {this.props.books.map(book => (
                                    <tr key={book._id}>
                                        <td>{book.inventoryCode}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.categoryId.title}</td>
                                        <td>{book.year}</td>
                                        <td>{book.publishHouse}</td>
                                        <td>{book.language.title}</td>
                                        <td>
                                            {moment(book.registerDate).format("DD-MM-YYYY h:mm")}
                                        </td>

                                    </tr>
                                ))}
                                </tbody>
                            </Table>

                            <Form horizontal>
                                <FormElement
                                    propertyName="order"
                                    title="Номер приказа"
                                    placeholder="Введите номер приказа на удаление книг"
                                    type="text"
                                    value={this.state.order}
                                    changeHandler={this.orderInputChangeHandler}
                                />
                                <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                        <Button disabled={!this.state.order} onClick={
                                            this.removeAllBooksHandler
                                        }>Удалить всё</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Fragment>) :
                    <div><p className="nothing-delete" style={{textAlign: "center", margin: "50px"}}>Нет книг для
                        удаления</p></div>}</Fragment>)
    }
};


const
    mapStateToProps = state => {
        return {
            books: state.books.books
        };
    };

const
    mapDispatchToProps = dispatch => {
        return {
            getBookForDelete: () =>
                dispatch(getBookForDelete()),
            removeBookForDelete: data =>
                dispatch(removeBookForDelete(data)),
            getBooksFromSearchNull: () => dispatch(getBooksFromSearchNull())

        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBookAdmin);
