import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Grid, Row, Thumbnail } from "react-bootstrap";
import apply from "../../assets/images/apply.png"
import denied from "../../assets/images/denied.png"
import get from "../../assets/images/get.png"
import take from "../../assets/images/book.png"
import add from "../../assets/images/add.png"
import remove from "../../assets/images/delete.png"
import { Header, Segment } from "semantic-ui-react";
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