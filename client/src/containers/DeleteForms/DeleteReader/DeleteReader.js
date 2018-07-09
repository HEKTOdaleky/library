import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  getReadersForRemove,
  sendReaders
} from "../../../store/actions/readers";
import { Button, Col, Form, FormGroup, Table } from "react-bootstrap";
import moment from "moment";
import FormElement from "../../../components/UI/Form/FormElement";

class DeleteReader extends Component {
  state = {
    readers: [],
    order: ""
  };

  componentDidMount() {
    this.props.getReadersForRemove();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => {
      const checkbox = nextProps.readers.map(item => ({
        [item._id]: { checked: false }
      }));
      return { checkbox };
    });
  }

  addReadersForDelete = id => {
    const ids = this.state.checkbox.map(item => {
      return Object.keys(item);
    });
    const index = ids.findIndex(elem => elem[0] === id);

    let checkbox = [...this.state.checkbox];
    let currentCheckbox = { ...checkbox[index] };
    currentCheckbox[id].checked = !currentCheckbox[id].checked;
    checkbox[index] = currentCheckbox;

    this.setState({ checkbox });

    if (this.state.checkbox[index][id].checked) {
      const readers = [...this.state.readers];
      readers.push(id);
      this.setState({ readers });
    } else {
      const readers = [...this.state.readers];
      const index = readers.findIndex(elem => elem === id);
      readers.splice(index, 1);
      this.setState({ readers });
    }
  };

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitFormHandler = event => {
    event.preventDefault();
    const data = { order: this.state.order, readers: this.state.readers };
    this.props.sendReaders(data);
  };

  render() {
    return (
      <Fragment>
        {this.state.readers.length === 0 && !this.props.readers
          ? (
          <div>В данный момент нет читателей для удаления</div>
        ) : (
          <Fragment>
            <Table striped bordered condensed hover responsive>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th># Код</th>
                  <th>Фамилия</th>
                  <th>Имя</th>
                  <th>Доукмент</th>
                  <th>Группа</th>
                  <th>Дата регистрации</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.props.readers &&
                  this.props.readers.map(item => (
                    <tr key={item._id}>
                      <td>{item.inventoryCode}</td>
                      <td>{item.lastName}</td>
                      <td>{item.firstName}</td>
                      <td>{item.documentNumber}</td>
                      <td>{item.groupId.name}</td>
                      <td>
                        {moment(item.registerDate).format("DD-MM-YYYY h:mm")}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <input
                          type="checkbox"
                          style={{ marginBottom: "0", marginTop: "0" }}
                          onChange={() => this.addReadersForDelete(item._id)}
                          name={item._id}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>

            <Form horizontal onSubmit={this.submitFormHandler}>
              <FormElement
                propertyName="order"
                title="Номер приказа"
                placeholder="Введите номер приказа на удаление читателей"
                type="text"
                value={this.state.order}
                changeHandler={this.inputChangeHandler}
                error={this.props.error && this.props.error.error}
              />
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button
                    bsStyle="danger"
                    type="submit"
                    disabled={this.state.readers.length === 0 && !this.state.order}
                  >
                    Удалить
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    readers: state.readers.readers,
    error: state.readers.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getReadersForRemove: () => dispatch(getReadersForRemove()),
    sendReaders: data => dispatch(sendReaders(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteReader);
