import React, {Component} from 'react'
import {connect} from "react-redux";


class AddStatus extends Component {
    state = {};

    render() {
        return (<div>Hi</div>)
    }
};

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStatus);