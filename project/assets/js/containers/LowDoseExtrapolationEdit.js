import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

// import {
//     postObject,
//     patchObject,
//     deleteObject,
//     changeSelectedBmd,
// } from 'actions/bmds';
import LowDoseExtrapolationEditComponent from '../components/LowDoseExtrapolationEdit';
import h from 'utils/helpers';



class LowDoesExtrapolationEdit extends React.Component{

    constructor(props) {
        super(props);
        // this.setState({});
        this.state = {};
    }

    render(){
        console.log('containers/LDEedit -> render()');
        console.log('this.state');
        console.log(this.state);
        console.log('this.props');
        console.log(this.props);

        let isNew = (!this.state.id) ? true : false;

        return (
            <LowDoseExtrapolationEditComponent
                isNew={isNew}
                {...this.props}
            />
        );
    }
}



function mapStateToProps(state) {
    return {
        bmds: state.bmds,
        ldes: state.ldes,
    };
}

export default connect(mapStateToProps)(LowDoesExtrapolationEdit)

