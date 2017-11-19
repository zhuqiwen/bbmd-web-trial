import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import config from './config';
import run from './run';
import models from './models';
import bmds from './bmds';
import ldes from './ldes';


const reducer = combineReducers({
    router: routerStateReducer,
    config,
    run,
    models,
    bmds,
    ldes,
});

export default reducer;
