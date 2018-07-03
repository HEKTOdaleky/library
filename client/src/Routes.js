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

const ProtectedRoute = ({isAllowed, ...props}) =>
    isAllowed ? <Route {...props} /> : <Redirect to="/login"/>;

const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={Library}/>
            <ProtectedRoute isAllowed={user && user.role === "librarian"} path="/librarian" exact
                            component={Librarian}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/admin" exact component={Admin}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-book" exact component={AddBook}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-group" exact component={AddGroup}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-language" exact
                            component={AddLanguage}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-status" exact component={AddStatus}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-reader" exact component={AddReader}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-category" exact
                            component={AddCategory}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/create-new-user" exact
                            component={NewUser}/>

            <Route path="/login" exact component={Login}/>
            <Route
                render={() => <h1 style={{textAlign: "center"}}>Page not found</h1>}
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
