import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./containers/Login/Login";
import Library from "./containers/Library/Library";
import Admin from "./containers/Admin/Admin";
import Librarian from "./containers/Librarian/Librarian";
import AddBook from "./containers/AddBook/AddBook";
<<<<<<< HEAD
import AddCategory from "./containers/AddCategory/AddCategory";
=======
import AddGroup from "./containers/AddGroup/AddGroup";
import AddLanguage from "./containers/AddLanguage/AddLanguage";
import AddStatus from "./containers/AddStatus/AddStatus";
>>>>>>> bec46e4bd0f4f7ed2325fe3e3f2b50304ce19b4b

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
        component={Librarian}
      />
      <ProtectedRoute
        isAllowed={user && user.role === "admin"}
        path="/admin"
        exact
        component={Admin}
      />
      <ProtectedRoute
        isAllowed={user && user.role === "admin"}
        path="/add-book"
        exact
        component={AddBook}
      />
      <ProtectedRoute
        isAllowed={user && user.role === "admin"}
<<<<<<< HEAD
        path="/add-category"
        exact
        component={AddCategory}
      />
=======
        path="/add-group"
        exact
        component={AddGroup}
      />
      <ProtectedRoute
        isAllowed={user && user.role === "admin"}
        path="/add-language"
        exact
        component={AddLanguage}
      />
        <ProtectedRoute
            isAllowed={user && user.role === "admin"}
            path="/add-status"
            exact
            component={AddStatus}
        />

>>>>>>> bec46e4bd0f4f7ed2325fe3e3f2b50304ce19b4b
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
