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
import {getReaderByBarcode} from "../../store/actions/readers";

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
                    <ControlLabel style={{marginRight: '30px'}}>Штрихкод книги</ControlLabel>
                    <FormControl
                      name="bookCode"
                      type="text"
                      placeholder="Штрихкод книги"
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
                    <ControlLabel style={{marginRight: '30px'}}>Штрихкод читателя</ControlLabel>
                    <FormControl
                      name="readerCode"
                      type="text"
                      placeholder="Штрихкод читателя"
                      value={this.state.readerCode}
                      onChange={this.changeHandler}
                      style={{marginRight: '30px', width: '150px'}}/>
                  </FormGroup>
                  <Button bsSize="small" type="submit">Найти</Button>
                </Form>
              </Panel.Title>
            </Panel.Heading>
            {this.props.findingReader && this.props.findingReader ?
              <ListGroup>
                <ListGroupItem>Фамилия:  <strong>{reader.lastName}</strong></ListGroupItem>
                <ListGroupItem>Имя: <strong>{reader.firstName}</strong></ListGroupItem>
                <ListGroupItem>Документ: <strong>{reader.documentNumber}</strong></ListGroupItem>
                <ListGroupItem>Группа: <strong>{reader.groupId.name}</strong></ListGroupItem>
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
    onFindReader: barcode => dispatch(getReaderByBarcode(barcode)),

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Librarian);