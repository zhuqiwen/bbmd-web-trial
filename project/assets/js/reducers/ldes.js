import _ from 'underscore';

import * as types from 'constants';



let initialState = {
    isFetching: false,
    objects: null,
    editObjectErrors: null,
    selectedObjectId: null,
    isFetchingPlot: {},
    serverError: false,
};

export default function (state = initialState, action) {
    let model, index, objects, isFetchingPlot;
    switch (action.type){
        case types.LDEs_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case types.LDEs_RECEIVE:
            return Object.assign({}, state, {
                objects: action.data,
                isFetching: false,
            });
        case types.LDE_REQUEST:
            return state;
        case types.LDE_RECEIVE:
            action.object.plot_json = undefined;
            index = state.objects.indexOf(
                _.findWhere(state.objects, {id: action.object.id})
            );

            if (index>=0){
                objects = [
                    ...state.objects.slice(0, index),
                    action.object,
                    ...state.objects.slice(index+1),
                ];
            } else {
                objects = [
                    ...state.objects,
                    action.object,
                ];
            }
            return Object.assign({}, state, {
                isFetching: false,
                selectedObjectId: null,
                objects,
            });
        case types.LDE_DELETE:
            return state;
        case types.LDE_SELECT:
            return state;
        case types.LDE_DESELECT:
            return state;
        case types.PLOT_LDE_REQUEST:
            return state;
        case types.PLOT_LDE_RECEIVE:
            return state;
        default:
            return state;
    }

}
