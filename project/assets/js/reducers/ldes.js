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
            console.log('reducers/ldes.js -> lde_receive');
            console.log(action.object);
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
                selectedObjectId: action.object.id,
                objects,
            });
        case types.LDE_DELETE:
            index = state.objects.indexOf(
                _.findWhere(state.objects, {id: action.id})
            );
            if (index>=0){
                objects = [
                    ...state.objects.slice(0, index),
                    ...state.objects.slice(index+1),
                ];
            }

            return Object.assign({}, state, {
                isFetching: false,
                selectedObjectId: null,
                objects,
            });
        case types.LDE_SELECT:
            return Object.assign({}, state, {
                selectedObjectId: action.id,
            });
        case types.LDE_DESELECT:
            return Object.assign({}, state, {
            selectedObjectId: null,
        });
        case types.LDE_PLOT_REQUEST:
            return state;
        case types.LDE_PLOT_RECEIVE:
            isFetchingPlot = Object.assign({}, state.isFetchingPlot);
            delete isFetchingPlot[action.plot_id];
            model = _.findWhere(state.objects, {id: action.plot_id});
            index = state.objects.indexOf(model);
            objects = [
                ...state.objects.slice(0, index),
                _.extend({}, model, {plot_json: action.plot_json}),
                ...state.objects.slice(index+1),
            ];
            return Object.assign({}, state, {
                objects,
                isFetchingPlot,
            });
        default:
            return state;
    }

}
