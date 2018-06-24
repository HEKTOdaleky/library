import React, { Component } from "react";
import { connect } from "react-redux";

class Library extends Component {

  render() {
    return (
      <div>
        Library main page
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


export default connect(mapStateToProps, mapDispatchToProps)(Library);
