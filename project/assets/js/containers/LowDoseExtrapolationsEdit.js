import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import {
    fetchLdesIfNeeded,
    changeSelectedLde,
} from '../actions/ldes';
import LowDoseExtrapolationEdit from './LowDoseExtrapolationEdit';




class LowDoesExtrapolationsEdit extends React.Component{

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchLdesIfNeeded());
    }

    handlePillsClick(e){
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(changeSelectedLde(parseInt(e.target.getAttribute('data-id'))));
    }

    renderPills(lde){
        let className = (
             this.props.ldes.selectedObjectId &&
             this.props.ldes.selectedObjectId === lde.id) ? 'active' : '',
            styles = {cursor: 'pointer'};
        return (
            <li key={lde.id} className={className}>
                <a style={styles}
                   data-id={lde.id}
                   onClick={this.handlePillsClick.bind(this)}>{lde.name}</a>
            </li>
        );
    }

    handleAddNewClick() {
        const { dispatch } = this.props;
        dispatch(changeSelectedLde(null));
    }

    renderAddNewButton(){
        let className = (this.props.ldes.selectedObjectId === null) ? 'active' : '',
            styles = {cursor: 'pointer'};
        return (
            <li className={className}>
                <a style={styles}
                   onClick={this.handleAddNewClick.bind(this)}>
                    <i className='fa fa-plus-circle'></i> Add new Extrapolation
                </a>
            </li>
        );
    }



    render(){
        let selectedLde = _.findWhere(
                this.props.ldes.objects,
                {id: this.props.ldes.selectedObjectId});
        let ldes = this.props.ldes.objects || [],
            ldes_len = ldes.length;


        console.log('containers/ldesedit.js -> render()');
        console.log(this.props);

        return (
            <div className='row-fluid'>
                <div className='col-sm-2'>
                    <ul className='nav nav-pills nav-stacked' data-items={ldes_len}>
                    {/*<ul className='nav nav-pills nav-stacked'>*/}
                        {ldes.map(this.renderPills.bind(this))}
                        {this.renderAddNewButton()}
                    </ul>
                </div>
                <div className='col-sm-10'>
                    <div className='tab-content'>
                        <LowDoseExtrapolationEdit
                            selectedLde={selectedLde}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


function mapStatetoProps(state) {
    return {
        config: state.config,
        bmds: state.bmds,
        ldes: state.ldes,
    };

}


export default connect(mapStatetoProps)(LowDoesExtrapolationsEdit)
