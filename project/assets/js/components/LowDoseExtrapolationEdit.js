import _ from 'underscore';
import React from 'react';

import h from 'utils/helpers';

import LowDoseExtrapolation from './LowDoseExtrapolation';
import FormFieldError from './FormFieldError';
import FormButtons from './FormButtons';
import ServerError from './ServerError';



class LowDoseExtrapolationEdit extends React.Component{

    constructor(props) {
        super(props);
        // this.state = this.getPriorLdeState(props.object);
        this.state = {};

    }

    // componentWillReceiveProps(props){
    //     let newState = this.getPriorLdeState(props.object);
    //     this.state = newState;
    //     this.setState(newState);
    // }
    //
    // getPriorLdeState(object){
    //     return h.deepCopy(object);
    // }

    handleCreateClick() {
        // const { dispatch } = this.props;
        // // dispatch(changeSelectedBmd(null));
    }

    renderCreateButton(){
        // let className = (this.props.bmds.selectedObjectId === null) ? 'active' : '';
        let styles = {cursor: 'pointer'};
        return (
            <li className={'active'}>
                <a style={styles}
                   onClick={this.handleCreateClick.bind(this)}>
                    <i className='fa fa-plus-circle'></i> Add New
                </a>
            </li>
        );
    }


    renderBmdOptions(objects){
        if(objects && objects.length > 0){

            return objects.map((object, index) =>
                        <option value={object.id}>
                            {object.name}
                        </option>
                    );
        }

    }




    render(){

        let errs = {};
        let display = null,
            selectedBmd = null;

        let bmds = this.props.bmds.objects;
        if(this.props.object)
        {
            display = (
                <div>
                    <LowDoseExtrapolation
                    object={this.props.object}
                    onMount={this.props.onLdeMount.bind(this)}
                    />
                    <hr/>
                </div>
            );

            selectedBmd = (
                <div className={h.getInputDivClass('name', errs)}>
                    <label>Selected BMD Estimate</label>
                    <p>{this.props.formValues.bmd_name}</p>
                </div>
            );

        }
        else
        {
            selectedBmd = (
                <div className={h.getInputDivClass('name', errs)}>
                    <label>Select A BMD Estimate</label>
                    <select
                        className="form-control"
                        name="bmd"
                        onChange={this.props.handleFieldChange}>
                        <option selected="selected">Select A BMD Estimate</option>
                        {this.renderBmdOptions(bmds)}
                    </select>
                </div>
            );
        }




        return (
            <div>
                {display}
                <form>
                    <div className={h.getInputDivClass('name', errs)}>
                        <label>
                            Name
                        </label>
                        <input
                            className="form-control"
                            name="name"
                            type="text"
                            onChange={this.props.handleFieldChange}
                            value={this.props.formValues.name}
                        />
                    </div>
                    {selectedBmd}
                    <div>
                        <fieldset>
                            <legend>Animal to Human UFa</legend>
                            <div className="col-md-6">
                                <p className="help-block">MeanLog</p>
                                <input
                                    className="form-control"
                                    name="ufa_m"
                                    type="number"
                                    onChange={this.props.handleFieldChange}
                                    value={this.props.formValues.ufa_m}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="help-block">StdLog</p>
                                <input
                                    className="form-control"
                                    name="ufa_s"
                                    type="number"
                                    onChange={this.props.handleFieldChange}
                                    value={this.props.formValues.ufa_s}
                                />
                            </div>

                        </fieldset>
                        <fieldset>
                            <legend>Human Variability UFh</legend>
                            <div className="col-md-6">
                                <p className="help-block">MeanLog</p>
                                <input
                                    className="form-control"
                                    name="ufh_m"
                                    type="number"
                                    onChange={this.props.handleFieldChange}
                                    value={this.props.formValues.ufh_m}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="help-block">StdLog</p>
                                <input
                                    className="form-control"
                                    name="ufh_s"
                                    type="number"
                                    onChange={this.props.handleFieldChange}
                                    value={this.props.formValues.ufh_s}
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Subchronic to Chronic UFs</legend>
                            <div className="col-md-6">
                                <p className="help-block">MeanLog</p>
                                <input
                                    className="form-control"
                                    name="ufs_m"
                                    type="number"
                                    onChange={this.props.handleFieldChange}
                                    value={this.props.formValues.ufs_m}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="help-block">StdLog</p>
                                <input
                                    className="form-control"
                                    name="ufs_s"
                                    type="number"
                                    onChange={this.props.handleFieldChange}
                                    value={this.props.formValues.ufs_s}
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Datasets UFd</legend>
                            <div className="col-md-6">
                                <p className="help-block">MeanLog</p>
                                <input
                                    className="form-control"
                                    name="ufd_m"
                                    type="number"
                                    onChange={this.props.handleFieldChange}
                                    value={this.props.formValues.ufd_m}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="help-block">StdLog</p>
                                <input
                                    className="form-control"
                                    name="ufd_s"
                                    type="number"
                                    onChange={this.props.handleFieldChange}
                                    value={this.props.formValues.ufd_s}
                                />
                            </div>
                        </fieldset>
                    </div>
                    <FormButtons {...this.props}/>
                </form>
            </div>
        );
    }
}


export default LowDoseExtrapolationEdit;