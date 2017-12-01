import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';


import {
    changeSelectedLde,
    postObject,
    deleteObject,
} from '../actions/ldes';
import LowDoseExtrapolationEditComponent from '../components/LowDoseExtrapolationEdit';
import h from 'utils/helpers';



class LowDoesExtrapolationEdit extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.getFormState(props.selectedLde);
    }

    componentWillReceiveProps(props){
        let newState = this.getFormState(props.selectedLde);
        this.state = newState;
        this.setState(newState);
    }

    getDefaultObject(){
        return {
            run: this.props.run.id,
        };
    }

    getFormState(object){
        let obj = (object) ?
            h.deepCopy(object):
            this.getDefaultObject();
        return obj;
    }

    handleCancel(){
        const { dispatch } = this.props;
        dispatch(changeSelectedLde(null));
    }

    handleFieldChange(e){
        let obj = {};
        obj[e.target.name] = h.getValue(e.target);
        this.setState(obj);
    }



    handleSubmit(e){
        const {dispatch} = this.props,
            id = this.state.id,
            callback = this.handleCancel.bind(this),
            values = this.state;
        if(id)
        {
            //update the record
        }
        else
        {
            dispatch(postObject(values, callback));
        }

        // const { dispatch } = this.props,
        //     prior_weight = this.getPriorWeightsFromForm(),
        //     id = this.state.id,
        //     cb = this.handleFormCancel.bind(this),
        //     values = Object.assign({}, this.state, {prior_weight});
        // if (values.bmr)
        //     values.bmr = parseFloat(values.bmr);
        // if (values.adversity_value)
        //     values.adversity_value = parseFloat(values.adversity_value);
        // if (id){
        //     const patch = h.getPatch(this.props.selectedModel, values);
        //     dispatch(patchObject(id, patch, cb));
        // } else {
        //     dispatch(postObject(values, cb));
        // }
    }

    handleDelete(e){
        const { dispatch } = this.props;
        dispatch(deleteObject(this.props.selectedLde.id, this.handleCancel.bind(this)));
    }


    render(){

        let isNew = (!this.state.id) ? true : false;

        console.log('containers/ldeedit.js -> render');
        console.log('this.state  form values');
        console.log(this.state);
        console.log("this.props-hahahahahah");
        console.log(this.props);


        return (
            <LowDoseExtrapolationEditComponent
                isNew={isNew}
                formValues={this.state}
                handleFieldChange={this.handleFieldChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleDelete={this.handleDelete.bind(this)}
                object={this.props.selectedLde}
                {...this.props}
            />
        );
    }
}



function mapStateToProps(state) {
    return {
        bmds: state.bmds,
        ldes: state.ldes,
        run: state.run.object,
    };
}

export default connect(mapStateToProps)(LowDoesExtrapolationEdit)

