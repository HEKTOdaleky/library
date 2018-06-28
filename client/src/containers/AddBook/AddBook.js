import React, {Component} from 'react';
import {connect} from "react-redux";
import {getLanguage} from "../../store/actions/languages";
import {getStatus} from "../../store/actions/status";

class AddBook extends Component {
    componentDidMount() {
        this.props.getLanguage();
        this.props.getStatus();
    }

    render() {
        console.log(this.props.languages, this.props.status);
        return (
            <div>Hello</div>
        )
    }

};


const mapStateToProps = state => {
    return {
        languages: state.languages.languages,
        status: state.status.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLanguage: () => dispatch(getLanguage()),
        getStatus: () => dispatch(getStatus())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
