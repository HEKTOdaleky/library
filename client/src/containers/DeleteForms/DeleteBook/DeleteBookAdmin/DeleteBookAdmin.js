import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {getBookForDelete, getBooksFromSearchNull, removeBookForDelete} from "../../../../store/actions/books";
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";

class DeleteBookAdmin extends Component {
    componentDidMount() {
        this.props.getBookForDelete();
    }
    componentWillUnmount(){
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
            <Fragment>{this.props.books.length>0 ? (
                <Fragment>
                    <input
                        type="text"
                        style={{width: "100%"}}
                        onChange={this.orderInputChangeHandler}
                        name="order"
                        value={this.state.order}
                    />
                    <ListGroup>
                        {
                            this.props.books.map(book => {
                                return (<ListGroupItem
                                    key={book._id}>{book.title + ' ' + book.author + ' ' + book.year}</ListGroupItem>)
                            })
                        }
                    </ListGroup>
                    <Button disabled={!this.state.order} onClick={
                        this.removeAllBooksHandler
                    }>Удалить всё</Button>
                </Fragment>) : <div><p className="nothing-delete" style={{textAlign:"center", margin:"50px"}}>Нет книг для удаления</p></div>}</Fragment>)
    }

};

const mapStateToProps = state => {
    return {
        books: state.books.books
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBookForDelete: () =>
            dispatch(getBookForDelete()),
        removeBookForDelete: data =>
            dispatch(removeBookForDelete(data)),
        getBooksFromSearchNull:()=>dispatch(getBooksFromSearchNull())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBookAdmin);
