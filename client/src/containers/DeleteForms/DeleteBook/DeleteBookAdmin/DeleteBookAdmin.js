import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {getBookForDelete} from "../../../../store/actions/books";
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";

class DeleteBookAdmin extends Component {
    componentDidMount() {
        this.props.getBookForDelete();
    }

    render() {
        return (<Fragment>
            <ListGroup>
                {
                    this.props.books.map(book => {
                        return (<ListGroupItem
                            key={book._id}>{book.title + ' ' + book.author + ' ' + book.year}</ListGroupItem>)
                    })
                }
            </ListGroup>
            <Button>Удалить всё</Button>
        </Fragment>)
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
            dispatch(getBookForDelete())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBookAdmin);
