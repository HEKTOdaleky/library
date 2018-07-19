import React, { Component } from "react";
import { connect } from "react-redux";
import './Librarian.css';

class Librarian extends Component {
  render() {
    return (
      <div>
        рабочий стол библиотекаря
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Librarian);