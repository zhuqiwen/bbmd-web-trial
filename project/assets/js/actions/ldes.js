import _ from 'underscore';

import * as types from 'constants';
import h from 'utils/helpers';


function receiveLdes(data){
    return {
        type: types.LDEs_RECEIVE,
        data: data,
    };
}


function fetchLdes() {
    return (dispatch, getState) => {
        let state = getState();
        return fetch(state.config.low_dose_extrapolation_root, h.fetchGet)
            .then(response => response.json())
            .then(json => dispatch(receiveLdes(json)))
            .catch((ex) => console.error('LDES parsing failed', ex));
    };
}



export function fetchLdesIfNeeded() {
    return (dispatch, getState) => {
        return dispatch(fetchLdes());
    };
}


function removeObject(id){
    return {
        type: types.LDE_DELETE,
        id,
    };
}


function receiveObject(object) {
    return {
        type: types.LDE_RECEIVE,
        object,
    };
}

function resetErrors() {
    return {
        type: types.LDE_RESET_ERRORS,
    }
    
}

function setErrors(errors, is500) {
    
}

function selectLde(id) {
    return {
        type: types.LDE_SELECT,
        id
    };

}

function deselectLde() {
    return {
        type: types.LDE_DESELECT,
    };

}

export function changeSelectedLde(id) {
    return (dispatch, getState) => {
        if(id)
        {
            dispatch(selectLde(id))
        }
        else
        {
            dispatch(deselectLde())
        }
    }

}




export function postObject(object, callback) {
    callback = callback || h.noop;
    return (dispatch, getState) => {
        let state = getState(),
            opts = h.fetchPost(state.config.csrf, object);
        return fetch(state.config.low_dose_extrapolation_root, opts)
            .then(
                (response) => {
                    if(response.status === 201)
                    {
                        response.json()
                            .then((json) => dispatch(receiveObject(json)))
                            .then(callback())
                            .then(() => dispatch(resetErrors()));
                    }
                    else
                    {
                        if( response.status === 500)
                        {
                            dispatch(setErrors(null, true));
                        }
                        else
                        {
                            response.json()
                                .then((json) => dispatch(setErrors(json, false)));
                        }
                    }

                }
            )
            .catch((ex) => console.error('Post failed', ex));




    }

}


export function deleteObject(id, callback) {
    callback = callback || h.noop;
    return (dispatch, getState) => {
        let state = getState(),
            opts = h.fetchDelete(state.config.csrf);
        return fetch(`${state.config.low_dose_extrapolation_root}${id}/`, opts)
            .then(function(response){
                if (response.status === 204){
                    dispatch(removeObject(id));
                    callback();
                } else {
                    response.json()
                        .then((json) => callback(json));
                }
            })
            .catch((ex) => console.error('Delete failed', ex));
    };

}