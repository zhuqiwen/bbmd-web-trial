import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

// import {
//     fetchBmdsIfNeeded,
//     fetchBmdPlotIfNeeded,
//     changeSelectedBmd,
// } from 'actions/bmds';

import LowDoseExtrapolation from '../components/LowDoseExtrapolation';


class LowDoesExtrapolations extends React.Component{

    render(){
        let content = <LowDoseExtrapolation/>;

        return (
            <div className='row-fluid'>
                <div className='col-sm-2'>
                    {/*<ul className='nav nav-pills nav-stacked'>*/}
                        {/*{objects.map(this.renderPills.bind(this))}*/}
                    {/*</ul>*/}
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
    return{
      state: state
    };

}

export default connect(mapStateToProps)(LowDoesExtrapolations)