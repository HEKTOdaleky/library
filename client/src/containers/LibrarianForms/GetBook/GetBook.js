import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Button, Col, ControlLabel, Form, FormControl, FormGroup, Panel,
  Row
} from "react-bootstrap";
import {getReaderByBarcode} from "../../../store/actions/readers";
import { getBookByBarcode } from "../../../store/actions/books";
import GetBookFormForBook from "../../../components/GetBookFormForBook/GetBookFormForBook";
import GetBookFormForReader from "../../../components/GetBookFormForReader/GetBookFormForReader";
import { sendDataToJournal } from "../../../store/actions/journals";
import dateFormat from "dateformat";

class GetBook extends Component {

  state = {
    estimatedDate: dateFormat(new Date(), "yyyy-mm-dd"),
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  getBookToReader = event => {
    event.preventDefault();
    const data = {
      bookId: this.props.findingBook._id,
      userId: this.props.findingReader._id,
      estimatedDate: this.state.estimatedDate
    };
    this.props.sendDataToJournal(data);
  };

  render() {
    return (
      <Fragment>
        <Row>
          <GetBookFormForBook
            getBook={this.props.getBookByBarcode}
            book={this.props.findingBook}/>
          <GetBookFormForReader
            getReader={this.props.getReaderByBarcode}
            reader={this.props.findingReader}/>
        </Row>
        <Panel bsStyle="primary">
          <Panel.Body>
            <Form horizontal>
              <FormGroup controlId="estimatedDate">
                <Col componentClass={ControlLabel} sm={2}>Дата возврата</Col>
                <Col sm={4}>
                  <FormControl
                    name="estimatedDate"
                    type="date"
                    onChange={this.changeHandler}
                    value={this.state.estimatedDate}/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={12}>
                  <Button disabled={!(this.props.findingBook && this.props.findingReader && this.state.estimatedDate)}
                          bsStyle="primary" bsSize="large"
                          block style={{marginTop: '20px'}} onClick={this.getBookToReader}>
                    Выдать книгу читателю
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Panel.Body>
        </Panel>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.readers.error,
    findingReader: state.readers.findingReader,
    findingBook: state.books.findingBook
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getReaderByBarcode: barcode => dispatch(getReaderByBarcode(barcode)),
    getBookByBarcode: barcode => dispatch(getBookByBarcode(barcode)),
    sendDataToJournal: data => dispatch(sendDataToJournal(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetBook);