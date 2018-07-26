import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Panel} from "react-bootstrap";
import dateFormat from "dateformat";

class ReportBooks extends Component {
    state = {
        startDate: dateFormat(new Date(), "yyyy-mm-dd"),
        endDate: dateFormat(new Date(), "yyyy-mm-dd"),
    };
    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return (
            <Fragment>
                <Panel bsStyle="primary">
                    <Panel.Body>
                        <Form horizontal>
                            <FormGroup controlId="estimatedDate">
                                <Col componentClass={ControlLabel} sm={2}> Начальная дата</Col>
                                <Col sm={4}>
                                    <FormControl
                                        name="startDate"
                                        type="date"
                                        onChange={this.changeHandler}
                                        value={this.state.startDate}/>
                                </Col>
                                <Col componentClass={ControlLabel} sm={2}>Конечная дата</Col>
                                <Col sm={4}>
                                    <FormControl
                                        name="endDate"
                                        type="date"
                                        onChange={this.changeHandler}
                                        value={this.state.endDate}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col sm={12}>
                                    <Button
                                        bsStyle="primary" bsSize="large"
                                        block style={{marginTop: '20px'}} onClick={()=>alert("Hello")}>
                                        Сформировать
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Panel.Body>
                </Panel>
            </Fragment>
        )
    }
};
const
    mapStateToProps = state => {
        return {};
    };

const
    mapDispatchToProps = dispatch => {
        return {};
    };

export default connect(mapStateToProps, mapDispatchToProps)(ReportBooks);
