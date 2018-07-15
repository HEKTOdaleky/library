import React, {Component, Fragment} from 'react';
import {getBookByBarcode, getBookByBarcodeCancel, markBookForDelete} from "../../../store/actions/books";
import {connect} from "react-redux";
import GetBookFormForBook from "../../../components/GetBookFormForBook/GetBookFormForBook";
import {Button} from "react-bootstrap";

class DeleteBookLibr extends Component {
    state = {
        comment: ''
    };

    componentWillUnmount() {
        this.props.getBookByBarcodeCancel();
    }

    inputChangeHandler = event => {
        this.setState({comment: event.target.value})
    };

    setMarkForDelete = event => {
        event.preventDefault();

        this.props.markBookForDelete({book: this.props.findingBook._id, mark: this.state.comment});
    };

    render() {
        return (
            <Fragment>
                <GetBookFormForBook
                    getBook={this.props.getBookByBarcode}
                    book={this.props.findingBook}/>
                {this.props.findingBook ? <div>
                    <input className="reason" name="reason" value={this.state.comment}
                           type="text"
                           style={{marginTop: '20px', width: "100%", fontSize: "18px"}}
                           onChange={this.inputChangeHandler}
                           placeholder="Введите причину удаления книги"/>

                    <Button disabled={!this.state.comment}
                            bsStyle="primary" bsSize="large"
                            block style={{marginTop: '20px'}}
                            onClick={this.setMarkForDelete}>
                        Удалить
                    </Button>
                </div> : null}
            </Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {
        findingBook: state.books.findingBook
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBookByBarcode: barcode => dispatch(getBookByBarcode(barcode)),
        markBookForDelete: data => dispatch(markBookForDelete(data)),
        getBookByBarcodeCancel: () => dispatch(getBookByBarcodeCancel())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBookLibr);