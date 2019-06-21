import { FETCH_SMURFS, SUCCESS, ERROR } from '../actions';


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
