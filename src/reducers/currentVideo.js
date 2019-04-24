import Redux from 'redux';

var currentVideoReducer = (state = null, action) => { // maybe an empty object
  //TODO: define a reducer for the currentVideo field of our state.
  switch(action.type) {
    case 'CHANGE_VIDEO':
      return action.video;
    default: 
      return state;
  }
};

export default currentVideoReducer;
