import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {Button, Col, Form, FormGroup, PageHeader} from "react-bootstrap";

import FormElement from "../../../../components/UI/Form/FormElement";
import ModalForm from "../../../../components/UI/Modal/ModalForm";
import { deleteLang, getLanguage } from "../../../../store/actions/languages";
import {sortArrayOfObjectsByKey} from "../../../../lib";

class DeleteLanguage extends Component {
  state = {
    langId: "",
    show: false
  };

  componentDidMount() {
    this.props.getLanguage();
  }

  clickHandler = event => {
    event.preventDefault();
    this.props.deleteLang(this.state.langId);
    this.handleClose();
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const lang = this.props.languages.map(lang => {
      return { id: lang._id, title: lang.title };
    });
    lang.unshift({id: '', title:  'Выберите язык ...'});

    return (
      <Fragment>
        <ModalForm
          show={this.state.show}
          close={this.handleClose}
          title="Удаление языка издания книги"
          text="Вы действительно хотите удалить язык издания книги?"
          action={this.clickHandler}
          buttonText="Удалить язык книги"
        />
        <Form horizontal onSubmit={this.clickHandler}>
          <PageHeader>Удалить язык издания книги</PageHeader>
          <FormElement
            propertyName="langId"
            title="Язык издания книги"
            type="select"
            options={lang}
            value={this.state.langId}
            changeHandler={this.onChangeHandler}
            error={this.props.postError && this.props.postError.message}
          />
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button
                disabled={!this.state.langId}
                onClick={this.handleShow}
                bsStyle="danger"
              >
                Удалить
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    languages: sortArrayOfObjectsByKey(state.languages.languages, 'title')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLanguage: () => dispatch(getLanguage()),
    deleteLang: data => dispatch(deleteLang(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteLanguage);
