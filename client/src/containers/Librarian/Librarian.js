import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Panel,
  Row
} from "react-bootstrap";
import { getReaderByPin } from "../../store/actions/readers";

class Librarian extends Component {

  state = {
    bookCode: '',
    readerCode: ''
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  formSearchReaderHandler = event => {
    event.preventDefault();
    this.props.onFindReader(this.state.readerCode);
    this.setState({readerCode: ''});
  };

  formSearchBookHandler = event => {
    event.preventDefault();

  };

  render() {
    const reader = this.props.findingReader;

    return (
      <Row>
        <Col xs={12} md={6}>
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title>
                <Form inline onSubmit={this.formSearchBookHandler}>
                  <FormGroup>
                    <ControlLabel style={{marginRight: '30px'}}>Пинкод книги</ControlLabel>
                    <FormControl
                      name="bookCode"
                      type="text"
                      placeholder="пинкод книги"
                      value={this.state.bookCode}
                      onChange={this.changeHandler}
                      style={{marginRight: '30px', width: '150px'}}/>
                  </FormGroup>
                  <Button bsSize="small" type="submit">Найти</Button>
                </Form>
              </Panel.Title>
            </Panel.Heading>
            <ListGroup>
              <ListGroupItem>Item1</ListGroupItem>
              <ListGroupItem>Item 2</ListGroupItem>
              <ListGroupItem>&hellip;</ListGroupItem>
            </ListGroup>
          </Panel>
        </Col>
        <Col xs={12} md={6}>
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title>
                <Form inline onSubmit={this.formSearchReaderHandler}>
                  <FormGroup>
                    <ControlLabel style={{marginRight: '30px'}}>Пинкод читателя</ControlLabel>
                    <FormControl
                      name="readerCode"
                      type="text"
                      placeholder="пинкод читателя"
                      value={this.state.readerCode}
                      onChange={this.changeHandler}
                      style={{marginRight: '30px', width: '150px'}}/>
                  </FormGroup>
                  <Button bsSize="small" type="submit">Найти</Button>
                </Form>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
            {this.props.findingReader ?
              <ListGroup>
                <ListGroupItem>{reader.lastName}</ListGroupItem>
                <ListGroupItem>{reader.firstName}</ListGroupItem>
                <ListGroupItem>{}</ListGroupItem>
              </ListGroup> : null}
          </Panel>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.readers.error,
    findingReader: state.readers.findingReader

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFindReader: pin => dispatch(getReaderByPin(pin)),

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Librarian);