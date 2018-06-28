import React, {Component} from 'react';
import {connect} from "react-redux";
import {getLanguage} from "../../store/actions/languages";
import {getStatus} from "../../store/actions/status";
import {getCategories} from "../../store/actions/categories";

class AddBook extends Component {
    componentDidMount() {
        this.props.getLanguage();
        this.props.getStatus();
        this.props.getCategories();
    }

    render() {
        return (
            <div>Hello</div>
        )
    }

};


const mapStateToProps = state => {
    return {
        languages: state.languages.languages,
        status: state.status.status,
        categories: state.categories.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLanguage: () => dispatch(getLanguage()),
        getStatus: () => dispatch(getStatus()),
        getCategories: () => dispatch(getCategories())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
