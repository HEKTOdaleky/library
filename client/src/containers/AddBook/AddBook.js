import React, {Component} from 'react';
import {connect} from "react-redux";
import {getLanguage} from "../../store/actions/languages";

class AddBook extends Component {
    componentDidMount() {
        this.props.getLanguage();
    }

    render() {
        console.log(this.props.languages);
        return (
            <div>Hello</div>
        )
    }

};


const mapStateToProps = state => {
    return {
        languages: state.languages.languages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLanguage: () => dispatch(getLanguage())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
