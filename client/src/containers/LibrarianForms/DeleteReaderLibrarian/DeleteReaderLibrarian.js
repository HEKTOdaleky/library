import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {
  Button, Col, ControlLabel, Form, FormControl, FormGroup, ListGroup, ListGroupItem, Panel,
  Row
} from "react-bootstrap";

import {getReaderByBarcode, sendReaderToRemove} from "../../../store/actions/readers";

class DeleteReaderLibrarian extends Component {
  state = {
    readerCode: '',
    closeDate: ''
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  formSearchReaderHandler = event => {
    event.preventDefault();
    this.props.getReaderByBarcode(this.state.readerCode);
    this.setState({readerCode: ''});
  };

  markingReaderToRemove = event => {
    event.preventDefault();
    const data = {
      readerId: this.props.findingReader._id,
      closeDate: this.state.closeDate
    };
    console.log(data);
    this.props.sendReaderToRemove(data);
  };

  render() {
    const reader = this.props.findingReader;
    return (
      <Fragment>
        <Row>
          <Col sm={12}>
            <Panel bsStyle="primary">
              <Panel.Heading>
                <Panel.Title>
                  <Form inline onSubmit={this.formSearchReaderHandler}>
                    <FormGroup>
                      <ControlLabel style={{marginRight: "30px"}}>Читательский код читатель</ControlLabel>
                      <FormControl
                        name="readerCode"
                        type="text"
                        placeholder="Читательский код"
                        value={this.state.readerCode}
                        onChange={this.changeHandler}
                        style={{marginRight: '30px', width: '150px'}}/>
                    </FormGroup>
                    <Button bsSize="small" type="submit" disabled={!this.state.readerCode}>Найти</Button>
                  </Form>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>{''}</Panel.Body>
              {reader && reader ?
                <ListGroup>
                  <ListGroupItem>Фамилия: <strong>{reader.lastName}</strong></ListGroupItem>
                  <ListGroupItem>Имя: <strong>{reader.firstName}</strong></ListGroupItem>
                  <ListGroupItem>Номер документа: <strong>{reader.documentNumber}</strong></ListGroupItem>
                  <ListGroupItem>Группа: <strong>{reader.groupId.name}</strong></ListGroupItem>
                </ListGroup> : null}
            </Panel>
          </Col>
        </Row>
        <Panel bsStyle="primary">
          <Panel.Body>
            <Form horizontal>
              <FormGroup controlId="closeDate">
                <Col componentClass={ControlLabel} sm={3}>Пометить на дату</Col>
                <Col sm={4}>
                  <FormControl
                    name="closeDate"
                    type="date"
                    onChange={this.changeHandler}
                    value={this.state.closeDate}/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={12}>
                  <Button disabled={!(this.props.findingReader && this.state.closeDate)}
                          bsStyle="primary" bsSize="large"
                          block style={{marginTop: '20px'}} onClick={this.markingReaderToRemove}>
                    Пометить читателя на удаление
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Panel.Body>
        </Panel>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    findingReader: state.readers.findingReader,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getReaderByBarcode: barcode => dispatch(getReaderByBarcode(barcode)),
    sendReaderToRemove: readerData => dispatch(sendReaderToRemove(readerData))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteReaderLibrarian);