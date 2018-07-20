import React, {Component, Fragment} from 'react';
import {getBookByBarcode, getBookByBarcodeCancel, markBookForDelete} from "../../../store/actions/books";
import {connect} from "react-redux";
import GetBookFormForBook from "../../../components/GetBookFormForBook/GetBookFormForBook";
import {Button, Col, Form, Panel, Row} from "react-bootstrap";
import FormElement from "../../../components/UI/Form/FormElement";

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
                <Row>
                    <Col sm={12}>
                        <GetBookFormForBook
                            getBook={this.props.getBookByBarcode}
                            book={this.props.findingBook}/>
                        {this.props.findingBook ? <div>
                            <Panel bsStyle="primary">
                                <Panel.Body>
                                    <Form horizontal>
                                       <Col sm={12}> <FormElement
                                            className="reason"
                                            propertyName="reason"
                                            title="Причина удаления"
                                            placeholder="Введите причину удаления книги"
                                            type="text"
                                            value={this.state.comment}
                                            changeHandler={this.inputChangeHandler}
                                       /></Col>

                                        <Col sm={12}>
                                            <Button disabled={!this.state.comment}
                                                    bsStyle="primary" bsSize="large"
                                                    block style={{marginTop: '20px'}}
                                                    onClick={this.setMarkForDelete}>
                                                Удалить
                                            </Button>
                                        </Col>

                                    </Form>
                                </Panel.Body>
                            </Panel>

                        </div> : null}
                    </Col></Row>
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