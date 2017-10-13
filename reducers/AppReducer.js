/**
 AppReducer.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/
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
