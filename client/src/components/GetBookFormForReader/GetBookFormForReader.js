import React, { Component } from "react";
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Panel
} from "react-bootstrap";

class GetBookFormForReader extends Component {

  state = {
    readerCode: ''
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  formSearchReaderHandler = event => {
    event.preventDefault();
    this.props.getReader(this.state.readerCode);
    this.setState({readerCode: ''});
  };

  render() {
    const reader = this.props.reader;

    return (
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
                    placeholder="Штрихкод"
                    value={this.state.readerCode}
                    onChange={this.changeHandler}
                    style={{marginRight: '30px', width: '150px'}}/>
                </FormGroup>
                <Button bsSize="small" type="submit" disabled={!this.state.readerCode}>Найти читателя</Button>
              </Form>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>{''}</Panel.Body>
          {reader && reader ?
            <ListGroup>
              <ListGroupItem>Фамилия:  <strong>{reader.lastName}</strong></ListGroupItem>
              <ListGroupItem>Имя: <strong>{reader.firstName}</strong></ListGroupItem>
              <ListGroupItem>Документ: <strong>{reader.documentNumber}</strong></ListGroupItem>
              <ListGroupItem>Группа: <strong>{reader.groupId.name}</strong></ListGroupItem>
            </ListGroup> : null}
        </Panel>
      </Col>
    );
  }
}

export default GetBookFormForReader;