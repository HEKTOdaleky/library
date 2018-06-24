import React, { Fragment } from "react";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { connect } from "react-redux";
import Toolbar from "../../components/Toolbar/Toolbar";

const Layout = props => (
  <Fragment>
    <NotificationContainer/>
    <header>
      <Toolbar />
    </header>
    <main className="container">
      {props.children}
    </main>
  </Fragment>
);

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
