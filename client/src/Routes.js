import React from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import Login from "./containers/Login/Login";
import Library from "./containers/Library/Library";
import Admin from "./containers/Admin/Admin";
import Librarian from "./containers/Librarian/Librarian";
import DeleteBookAdmin from "./containers/DeleteForms/DeleteBook/DeleteBookAdmin/DeleteBookAdmin";
import AddBook from "./containers/AdminForms/AddForms/AddBook/AddBook";
import AddGroup from "./containers/AdminForms/AddForms/AddGroup/AddGroup";
import AddLanguage from "./containers/AdminForms/AddForms/AddLanguage/AddLanguage";
import AddStatus from "./containers/AdminForms/AddForms/AddStatus/AddStatus";
import AddReader from "./containers/AdminForms/AddForms/AddReader/AddReader";
import AddCategory from "./containers/AdminForms/AddForms/AddCategory/AddCategory";
import NewUser from "./containers/AdminForms/AddForms/NewUser/NewUser";
import DeleteStatus from "./containers/AdminForms/DeleteForms/DeleteStatus/DeleteStatus";
import DeleteLanguage from "./containers/AdminForms/DeleteForms/DeleteLanguage/DeleteLanguage";
import DeleteCategory from "./containers/AdminForms/DeleteForms/DeleteCategory/DeleteCategory";
import DeleteGroup from "./containers/AdminForms/DeleteForms/DeleteGroup/DeleteGroup";
import DeleteReader from "./containers/AdminForms/DeleteForms/DeleteReader/DeleteReader";
import EditBook from "./containers/AdminForms/EditForms/EditBook/EditBook";
import EditReader from "./containers/AdminForms/EditForms/EditReader/EditReader";
import GetBook from "./containers/LibrarianForms/GetBook/GetBook";
import TakeBook from "./containers/LibrarianForms/TakeBook/TakeBook";
import DeleteReaderLibrarian from "./containers/LibrarianForms/DeleteReaderLibrarian/DeleteReaderLibrarian";
import DeleteBookLibr from "./containers/LibrarianForms/DeleteBookLibr/DeleteBookLibr";
import DeleteUser from "./containers/AdminForms/DeleteForms/DeleteUser/DeleteUser";
import ChangePassword from "./containers/AdminForms/AddForms/ChangePassword/ChangePassword";
import ReaderCardToPrint from "./components/ReaderCardToPrint/ReaderCardToPrint";

const ProtectedRoute = ({isAllowed, ...props}) =>
    isAllowed ? <Route {...props} />
        : <Redirect to="/login"/>;

const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={Library}/>
            <ProtectedRoute isAllowed={user && user.role === "librarian"} path="/librarian" exact
                            component={Librarian}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/admin" exact
                            component={Admin}/>
            <ProtectedRoute isAllowed={user && (user.role === "admin" || user.role === 'librarian')} path="/add-book" exact
                            component={AddBook}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-group" exact
                            component={AddGroup}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-language" exact
                            component={AddLanguage}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/add-status" exact
                            component={AddStatus}/>
            <ProtectedRoute isAllowed={user && (user.role === "admin" || user.role === 'librarian')} path="/add-reader"
                            exact component={AddReader}/>
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

            <ProtectedRoute isAllowed={user && (user.role === "admin" || user.role === 'librarian')} path="/edit-book" exact
                            component={EditBook}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/edit-reader" exact
                            component={EditReader}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/delete-book" exact
                            component={DeleteBookAdmin}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/delete-user" exact
                            component={DeleteUser}/>
            <ProtectedRoute isAllowed={user && user.role === "admin"} path="/change-password" exact
                            component={ChangePassword}/>


            <ProtectedRoute isAllowed={user && user.role === "librarian"} path="/get-book" exact
                            component={GetBook}/>
            <ProtectedRoute isAllowed={user && user.role === "librarian"} path="/take-book" exact
                            component={TakeBook}/>
            <ProtectedRoute isAllowed={user && user.role === "librarian"} path="/mark-reader" exact
                            component={DeleteReaderLibrarian}/>
            <ProtectedRoute isAllowed={user && user.role === "librarian"} path="/remove-book" exact
                            component={DeleteBookLibr}/>

            <Route path="/login" exact component={Login}/>
            <Route path="/print-reader-card" exact component={ReaderCardToPrint}/>
            <Route render={() => <h1 style={{textAlign: "center"}}>Page not found</h1>}/>
        </Switch>
    );
};

const mapStateToProps = state => {
    return {
        user: state.users.user
    };
};

export default withRouter(connect(mapStateToProps)(Routes));
