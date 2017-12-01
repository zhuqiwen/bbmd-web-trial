import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import {
    fetchLdesIfNeeded,
    changeSelectedLde, fetchLdePlotIfNeeded,
} from '../actions/ldes';

import LowDoseExtrapolation from '../components/LowDoseExtrapolation';


class LowDoesExtrapolations extends React.Component{


    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchLdesIfNeeded());
    }

    onLdeMount(lde){
        const { dispatch } = this.props;
        dispatch(fetchLdePlotIfNeeded(lde));
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



    render(){

        let selectedLde = _.findWhere(
                this.props.ldes.objects,
                {id: this.props.ldes.selectedObjectId});
        let ldes = this.props.ldes.objects || [],
            ldes_len = ldes.length;



        let content = (ldes_len > 0) ?
            <p className='help-block'>Select a Low Dose Extrapolation.</p>:
            <p className='help-block'>No Low Dose Extrapolations have been created.</p>;

        if(selectedLde)
        {
            content = <LowDoseExtrapolation
                object={selectedLde}
                onMount={this.onLdeMount.bind(this)}
            />
        }

        return (
            <div className='row-fluid'>
                <div className='col-sm-2'>
                    <ul className='nav nav-pills nav-stacked' data-items={ldes_len}>
                        {ldes.map(this.renderPills.bind(this))}
                    </ul>
                </div>
                <div className='col-sm-10'>
                    <div className='tab-content'>
                        {content}
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps)(LowDoesExtrapolations)