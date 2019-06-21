import {
  FETCH_SMURFS,
  ADD_SMURF,
  DELETE_SMURF,
  SUCCESS,
  ERROR,
} from '../actions';

// initial/default state
const initial = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};

export default (state = initial, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return { ...state, fetchingSmurfs: true, error: null };
    case ADD_SMURF:
      return { ...state, addingSmurf: true, error: null };
    case DELETE_SMURF:
      return { ...state, deletingSmurf: true, error: null };
    case SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
      };
    default:
      return state;
  }
};
