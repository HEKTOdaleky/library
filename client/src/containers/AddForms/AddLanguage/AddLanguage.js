import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Alert, Button, Col, Form, FormGroup, PageHeader} from "react-bootstrap";
import FormElement from "../../../components/UI/Form/FormElement";
import {postLanguagesData} from "../../../store/actions/languages";


class AddLanguage extends Component {
  state = {
    title: ''
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  clickHandler = event => {
    event.preventDefault();
    this.props.postLanguagesData(this.state);

  };

  render() {
    return (
      <Fragment>
        <PageHeader>Добавить новый язык</PageHeader>

        <Form
          horizontal onSubmit={this.clickHandler}>
          {this.props.languageError &&
           <Alert bsStyle="danger">{this.props.languageError.message}</Alert>
          }

          <FormElement
            propertyName="title"
            title="Название языка"
            placeholder="Введите название языка"
            type="text"
            value={this.state.title}
            changeHandler={this.onChangeHandler}
            required
            error={this.props.languageError &&
              this.props.languageError.message}

          />

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={this.clickHandler} bsStyle="primary" type="submit">Save</Button>
            </Col>
          </FormGroup>

        </Form>
      </Fragment>
    )
  }
}


const mapStateToProps = state => {
  return {
    languageError: state.languages.languageError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postLanguagesData: (data) => dispatch(postLanguagesData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLanguage);