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

class GetBook extends Component {

  state = {
    closeData: "",
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  getBookClickHandler = () => {
    const data = {
      bookId: this.props.findingBook._id,
      readerId: this.props.findingReader,
      closeData: this.state.closeData
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
              <FormGroup controlId="closeData">
                <Col componentClass={ControlLabel} sm={2}>Дата возврата</Col>
                <Col sm={4}>
                  <FormControl
                    name="closeData"
                    type="date"
                    onChange={this.changeHandler}
                    value={this.state.closeData}/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={12}>
                  <Button disabled={!(this.props.findingBook && this.props.findingReader && this.state.closeData)}
                          bsStyle="primary" bsSize="large"
                          block style={{marginTop: '20px'}}
                          onClick={this.props.getBookClickHandler}>
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