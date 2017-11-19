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


    }

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

            return objects.map((object) =>
                        <option>
                            {object.name}
                        </option>
                    );
        }

    }

    render(){

        let display = null;
        let somecondition = false;

        let objects = this.props.bmds.objects;
        let options = this.renderBmdOptions(this.props.bmds.objects);

        if(somecondition)
        {
            display = (
                <div>
                    <LowDoseExtrapolation />
                    <hr/>
                </div>
            );
        }


        return (
            <div>
                {display}
                <form>
                    <div>
                        <label>Select A BMD Estimate</label>
                        <select>
                            {this.renderBmdOptions(objects)}
                        </select>
                    </div>
                    <div>
                        <fieldset>
                            <legend>Animal to Human UFa</legend>
                            <div className="col-md-6">
                                <p className="help-block">MeanLog</p>
                                <input/>
                            </div>
                            <div className="col-md-6">
                                <p className="help-block">StdLog</p>
                                <input/>
                            </div>

                        </fieldset>
                        <fieldset>
                            <legend>Human Variability UFh</legend>
                            <div className="col-md-6">
                                <p className="help-block">MeanLog</p>
                                <input/>
                            </div>
                            <div className="col-md-6">
                                <p className="help-block">StdLog</p>
                                <input/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Subchronic to Chronic UFs</legend>
                            <div className="col-md-6">
                                <p className="help-block">MeanLog</p>
                                <input/>
                            </div>
                            <div className="col-md-6">
                                <p className="help-block">StdLog</p>
                                <input/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Datasets UFd</legend>
                            <div className="col-md-6">
                                <p className="help-block">MeanLog</p>
                                <input/>
                            </div>
                            <div className="col-md-6">
                                <p className="help-block">StdLog</p>
                                <input/>
                            </div>
                        </fieldset>
                    </div>
                    <FormButtons />
                </form>
            </div>
        );
    }
}


export default LowDoseExtrapolationEdit;