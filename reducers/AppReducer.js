import { combineReducers } from 'redux';

const initialState = {

};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

export default combineReducers({
  app: appReducer
});
