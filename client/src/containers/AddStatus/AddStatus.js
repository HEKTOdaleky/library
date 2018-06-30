import React, {Component} from 'react'
import {connect} from "react-redux";
import {postStatus} from "../../store/actions/status";


class AddStatus extends Component {
    state = {

    };

    render() {
        return (<div>Hi</div>)
    }
};

const mapStateToProps = state => {
    return {
        statusErr: state.status.err
    }
};

const mapDispatchToProps = dispatch => {
    return {
        postStatus: (data) => dispatch(postStatus(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStatus);