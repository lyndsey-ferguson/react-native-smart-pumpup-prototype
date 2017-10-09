import { combineReducers } from 'redux';

import UserProfileReducer from './UserProfileReducer';

const initialState = {

};

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

export default combineReducers({
  app: AppReducer,
  profile: UserProfileReducer
});
