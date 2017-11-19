import React from 'react';
import { connect } from 'react-redux';
// import _ from 'underscore';

// import {
//     fetchBmdsIfNeeded,
//     fetchBmdPlotIfNeeded,
//     changeSelectedBmd,
// } from 'actions/bmds';
import LowDoseExtrapolationEdit from './LowDoseExtrapolationEdit';




class LowDoesExtrapolationsEdit extends React.Component{

    renderAddNewButton(){
        // let className = (this.props.bmds.selectedObjectId === null) ? 'active' : '',
        let className = 'active',
            styles = {cursor: 'pointer'};
        console.log('containers/LDEsEdit -> renderAddNEwButton');
        console.log(this.props);
        return (
            <li className={className}>
                <a style={styles}
                   onClick={this.handleAddNewClick()}>
                    <i className='fa fa-plus-circle'></i> Add new Extrapolation
                </a>
            </li>
        );
    }

    handleAddNewClick() {
        console.log('Add new extrapolation clicked');
    }

    render(){
        console.log('containers/ldesEdit -> render()');
        console.log(this.props);
        return (
            <div className='row-fluid'>
                <div className='col-sm-2'>
                    {/*<ul className='nav nav-pills nav-stacked' data-items={objects_len}>*/}
                    <ul className='nav nav-pills nav-stacked'>
                        {this.renderAddNewButton()}
                    </ul>
                </div>
                <div className='col-sm-10'>
                    <div className='tab-content'>
                        <LowDoseExtrapolationEdit />
                    </div>
                </div>
            </div>
        );
    }
}


function mapStatetoProps(state) {
    return {
        bmds: state.bmds,
        ldes: state.ldes,
    };

}


export default connect(mapStatetoProps)(LowDoesExtrapolationsEdit)
