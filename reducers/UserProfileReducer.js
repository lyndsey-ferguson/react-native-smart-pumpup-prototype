/**
 UserProfileReducer.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/
import {
  ACTION_LOAD_USER_PROFILE
} from '../actions/UserProfileActions';

const initialState = {
  avatarUri: undefined,
  name: 'Unknown',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

export default UserProfileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_LOAD_USER_PROFILE: {
      return Object.assign({}, state, {
        name: action.name,
        avatarUri: action.avatarUri,
        bio: action.bio
      });
    }
    default: {
      return state;
    }
  }
}
