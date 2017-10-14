/**
 UserProfileReducer.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/
import {
  ACTION_LOAD_USER_PROFILE
} from '../actions/UserProfileActions'



const initialState = {
  avatarUri: undefined,
  name: 'Unknown',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
}



export default function UserProfileReducer(state = initialState, action) {
  switch(action.type) {
  case ACTION_LOAD_USER_PROFILE: {
    return Object.assign({}, state, {
      name: action.name,
      avatarUri: action.avatarUri,
      bio: action.bio
    })
  }
  default: {
    return state
  }
  }
}
