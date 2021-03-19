import {
  FETCH_SMURF_FAILURE,
  FETCH_SMURF_LOADING,
  FETCH_SMURF_SUCCESS,
  ADD_SMURF,
  ERROR_SMURF,
} from '../actions';

export const initialState = {
  smurfs: [],
  isLoading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        smurfs: action.payload,
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
      };
    case ERROR_SMURF:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
