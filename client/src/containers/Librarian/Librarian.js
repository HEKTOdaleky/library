import React, { Component } from "react";
import { connect } from "react-redux";

class Librarian extends Component {

  render() {
    return (
      <div>
        Librarian form
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(Librarian);
