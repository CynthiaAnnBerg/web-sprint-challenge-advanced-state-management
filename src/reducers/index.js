//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.

import { SMURF_VALUE, SMURF_FETCH, API_FETCH_SUCCESS, API_FETCH_FAIL, SMURF_ADD } from './../actions';

export const initialState = {
    smurfs:'',
    ladoing: true,
    errorMesage: ''
}

const reducer = (state, action) => {
    if(action.type === "SMURF_FETCH") {
        return(state);
    } else if (action.type === "API_FETCH_SUCCESS") {
        return(state);
    } else if (action.type === "API_FETCH_FAIL") {
        return(state)
    } else if (action.type === "SMURF_ADD") {
        return(state)
    }else if (action.type === "SMURF_VALUE") {
        return(state)
    }else {
        return(state);
    }
    
    switch(action.type){
        case(SMURF_FETCH):
            return({...state, newTitleText:action.payload});
        case(API_FETCH_SUCCESS):
            return({
                ...state,
                title: action.payload.newTitleText,
                editing: action.payload.editing
            });
            case(API_FETCH_FAIL):
            return({
                ...state,
                title: action.payload.newTitleText,
                editing: action.payload.editing
            });
            case(SMURF_ADD):
            return({...state, newTitleText:action.payload});
        case(SMURF_VALUE):
            return({...state, editing: !state.editing});
        default:
            return(state);
    }
}

export default reducer;