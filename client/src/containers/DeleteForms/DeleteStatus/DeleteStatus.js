import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import FormElement from "../../../components/UI/Form/FormElement";
import { Button, Col, Form, FormGroup, Modal, PageHeader } from "react-bootstrap";
import {deleteStatus, getStatus} from "../../../store/actions/status";

class DeleteStatus extends Component {
    state = {
        statusId: "",
        show: false
    };

    componentDidMount() {
        this.props.getStatus();
    }

    clickHandler = event => {
        event.preventDefault();
        this.props.deleteStatus(this.state.statusId);
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
        const status = this.props.status.map(state => {
            return {id: state._id, title: state.name};
        });
        return (
            <Fragment>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Удаление</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>{`Вы действительно хотите удалить статус ${this.state.statusId}???`}</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                        <Button onClick={this.clickHandler} bsStyle="primary">Удалить</Button>
                    </Modal.Footer>
                </Modal>
                <Form
                    horizontal onSubmit={this.clickHandler}>
                  <PageHeader>Удалить статус книги</PageHeader>
                    <FormElement
                        propertyName="statusId"
                        title="Статус"
                        type="select"
                        options={status}
                        value={this.state.statusId}
                        changeHandler={this.onChangeHandler}
                        error={this.props.postError &&
                        this.props.postError.message.errors.statusId
                        && this.props.postError.message.errors.statusId.message}
                    />
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button disabled={!this.state.statusId} onClick={this.handleShow}
                                    bsStyle="danger">Удалить</Button>
                        </Col>
                    </FormGroup>

                </Form>
            </Fragment>
        )
    }

}


const mapStateToProps = state => {
    return {
        status: state.status.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getStatus: () => dispatch(getStatus()),
        deleteStatus: (data) => dispatch(deleteStatus(data))

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DeleteStatus);
