import React, { Component } from "react";
import { connect } from "react-redux";

class Librarian extends Component {

  render() {
    return (
      <div>
        Главна страница библиотекаря
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