import React from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import Login from "./containers/Login/Login";
import Library from "./containers/Library/Library";
import Admin from "./containers/Admin/Admin";
import Librarian from "./containers/Librarian/Librarian";
import AddBook from "./containers/AddForms/AddBook/AddBook";
import AddGroup from "./containers/AddForms/AddGroup/AddGroup";
import AddLanguage from "./containers/AddForms/AddLanguage/AddLanguage";
import AddStatus from "./containers/AddForms/AddStatus/AddStatus";
import AddReader from "./containers/AddForms/AddReader/AddReader";
import AddCategory from "./containers/AddForms/AddCategory/AddCategory";
import NewUser from "./containers/AddForms/NewUser/NewUser";
import DeleteStatus from "./containers/DeleteForms/DeleteStatus/DeleteStatus";
import DeleteLanguage from "./containers/DeleteForms/DeleteLanguage/DeleteLanguage";
import DeleteCategory from "./containers/DeleteForms/DeleteCategory/DeleteCategory";
import DeleteGroup from "./containers/DeleteForms/DeleteGroup/DeleteGroup";
import DeleteReader from "./containers/DeleteForms/DeleteReader/DeleteReader";
import EditBook from "./containers/EditForms/EditBook/EditBook";
import EditReader from "./containers/EditForms/EditReader/EditReader";

const ProtectedRoute = ({isAllowed, ...props}) =>
    isAllowed ? <Route {...props} /> : <Redirect to="/login"/>;

const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={Library}/>
            <ProtectedRoute isAllowed={user && user.role === "librarian"} path="/librarian" exact
                            component={Librarian}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/admin" exact
                            component={Admin}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-book" exact
                            component={AddBook}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-group" exact
                            component={AddGroup}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-language" exact
                            component={AddLanguage}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-status" exact
                            component={AddStatus}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-reader" exact
                            component={AddReader}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-category" exact
                            component={AddCategory}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/create-new-user" exact
                            component={NewUser}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/delete-status" exact
                            component={DeleteStatus}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/delete-group" exact
                            component={DeleteGroup}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/delete-language" exact
                            component={DeleteLanguage}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/delete-category" exact
                            component={DeleteCategory}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/delete-reader" exact
                              component={DeleteReader}/>

          <ProtectedRoute isAllowed={user && user.role === "admin"} path="/edit-book/:id" exact
                          component={EditBook}/>
          <ProtectedRoute isAllowed={user && user.role === "admin"} path="/edit-reader" exact
                          component={EditReader}/>


            <Route path="/login" exact component={Login}/>
            <Route render={() => <h1 style={{textAlign: "center"}}>Page not found</h1>} />
        </Switch>
    );
};

const mapStateToProps = state => {
    return {
        user: state.users.user
    };
};

export default withRouter(connect(mapStateToProps)(Routes));
