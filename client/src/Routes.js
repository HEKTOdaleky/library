import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./containers/Login/Login";
import Library from "./containers/Library/Library";
import Admin from "./containers/Admin/Admin";
import Librarian from "./containers/Librarian/Librarian";
import AddBook from "./containers/AddBook/AddBook";

const ProtectedRoute = ({ isAllowed, ...props }) =>
  isAllowed ? <Route {...props} /> : <Redirect to="/login" />;

const Routes = ({ user }) => {
  return (
    <Switch>
      <Route path="/" exact component={Library} />
      <ProtectedRoute
        isAllowed={user && user.role === "librarian"}
        path="/librarian"
        exact
        component={Librarian} />
      <ProtectedRoute
        isAllowed={user && user.role === "admin"}
        path="/admin"
        exact
        component={Admin}
      />
        <ProtectedRoute
            isAllowed={user && user.role === "admin"}
            path="/addbook"
            exact
            component={AddBook}
        />
      <Route path="/login" exact component={Login} />
      <Route
        render={() => <h1 style={{ textAlign: "center" }}>Page not found</h1>}
      />
    </Switch>
  );
};

const mapStateToProps = state => {
  return {
    user: state.users.user
  };
};

export default withRouter(connect(mapStateToProps)(Routes));
