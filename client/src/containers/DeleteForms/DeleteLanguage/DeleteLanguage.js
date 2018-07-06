import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {deleteLang, getLanguage} from "../../../store/actions/languages";
import {Button, Col, Form, FormGroup, Modal} from "react-bootstrap";
import FormElement from "../../../components/UI/Form/FormElement";
class DeleteLanguage extends Component{
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
        this.setState({show: false})
    };
    handleShow = () => {
        this.setState({show: true})
    };

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const lang = this.props.languages.map(lang => {
            return {id: lang._id, title: lang.title};
        });
        return (
            <Fragment>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Удаление</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>{`Вы действительно хотите удалить язык ${this.state.langId}???`}</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                        <Button onClick={this.clickHandler} bsStyle="primary">Удалить язык книги</Button>
                    </Modal.Footer>
                </Modal>
                <Form
                    horizontal onSubmit={this.clickHandler}>
                    <FormElement
                        propertyName="langId"
                        title="Язык"
                        type="select"
                        options={lang}
                        value={this.state.langId}
                        changeHandler={this.onChangeHandler}
                        error={this.props.postError &&
                        this.props.postError.message.errors.langId
                        && this.props.postError.message.errors.langId.message}
                    />
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button disabled={!this.state.langId} onClick={this.handleShow}
                                    bsStyle="danger">Удалить</Button>
                        </Col>
                    </FormGroup>

                </Form>
            </Fragment>
        )
    }
};
const mapStateToProps = state => {
    return {
        languages: state.languages.languages,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLanguage: () => dispatch(getLanguage()),
        deleteLang: (data) => dispatch(deleteLang(data))

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DeleteLanguage);
