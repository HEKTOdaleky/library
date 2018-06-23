import React, { Component } from "react";
import { connect } from "react-redux";

class Library extends Component {

  render() {
    return (
      <div>
        Library search
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
