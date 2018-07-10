import React from 'react';
import PropTypes from 'prop-types';
import {Col, ControlLabel, FormControl, FormGroup, HelpBlock} from "react-bootstrap";

const FormElement = props => {
  let componentClass,
    formControlChildren;

  if (props.type === 'textarea') {
    componentClass = 'textarea';
  }

  if (props.type === 'select') {
    componentClass = 'select';
    // props.options.unshift({id: '', title:  props.title + ' ...'});

    formControlChildren = props.options.map(element => (
      <option key={element.id} value={element.id}>{element.title}</option>
    ))
  }

  return (
    <FormGroup
      bsSize={props.size}
      controlId={props.propertyName}
      validationState={props.error && 'error'}
    >
      <Col componentClass={ControlLabel} sm={props.titleLength || 2}>
        {props.title}
      </Col>
      <Col sm={props.inputLength || 10}>
        <FormControl
          type={props.type}
          componentClass={componentClass}
          required={props.required}
          placeholder={props.placeholder}
          name={props.propertyName}
          value={props.value}
          onChange={props.changeHandler}
          autoComplete={props.autoComplete}
        >
          {formControlChildren}
        </FormControl>
        {props.error &&
        <HelpBlock>{props.error}</HelpBlock>
        }
      </Col>
    </FormGroup>
  );
};

FormElement.propTypes = {
  propertyName: PropTypes.string.isRequired,
  error: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  changeHandler: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  inputLength: PropTypes.number,
  titleLength: PropTypes.number,
};

export default FormElement;