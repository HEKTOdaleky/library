import React, {Component, Fragment} from 'react';
import {getBookByBarcode} from "../../../store/actions/books";
import {connect} from "react-redux";

class DeleteBookLibr extends Component {
    render() {
        return (
            <Fragment>

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
        getBookByBarcode: barcode => dispatch(getBookByBarcode(barcode))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBookLibr);