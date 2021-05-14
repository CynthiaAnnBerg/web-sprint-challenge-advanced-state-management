import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.


//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.


export const SMURF_FETCH = "SMURF_FETCH";
export const API_FETCH_SUCCESS = "API_FETCH_SUCCESS";
export const API_FETCH_FAIL = "API_FETCH_FAIL";
export const SMURF_ADD = "SMURF_ADD";
export const SMURF_VALUE = "SMURF_VALUE";

export const smurfFetch = ()=> {
    return({type: SMURF_FETCH});
}

export const apiFetchSuccess = ()=> {
    return({type: API_FETCH_SUCCESS});
}

export const apiFetchFail = ()=> {
    return({type: API_FETCH_FAIL});
}

export const smurfAdd = () => {
    return({type:SMURF_ADD});
}

export const smurfValue = ()=> {
    return({type: SMURF_VALUE});
}

export function fetchSmurfs() {
    return {
      type: SMURF_FETCH,
    };
  }

  export const fetchSmurfs = (name, nickname, position, summary) => {
    return dispatch => {
        const smurfData = {
            name: smurfName,
            nickname: nickname,
            position: position,
            summary: summary,
        };
       
    };
};