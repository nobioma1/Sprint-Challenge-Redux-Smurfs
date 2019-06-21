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
    default:
      return state;
  }
};
