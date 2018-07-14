import React, {Component, Fragment} from 'react';
import {getBookByBarcode} from "../../../store/actions/books";
import {connect} from "react-redux";
import GetBookFormForBook from "../../../components/GetBookFormForBook/GetBookFormForBook";

class DeleteBookLibr extends Component {
    render() {
        return (
            <Fragment>
                <GetBookFormForBook
                getBook={this.props.getBookByBarcode}
                book={this.props.findingBook}/>
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBookLibr);