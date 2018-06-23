import React, { Fragment } from "react";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
// import Toolbar from "../../components/UI/Toolbar/Toolbar";
import { connect } from "react-redux";

const Layout = props => (
  <Fragment>
    <NotificationContainer/>
    <header>
      {/*<Toolbar user={props.user} logout={props.logoutUser}/>*/}
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
