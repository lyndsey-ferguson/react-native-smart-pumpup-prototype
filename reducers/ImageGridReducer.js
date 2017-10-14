/**
 ImageGridReducer.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/
import {
  ACTION_LOAD_GRID_IMAGES
} from '../actions/ImageGridActions';

const initialState = {
  isLoading: true,
  imagesList: []
};

export default ImageGridReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_LOAD_GRID_IMAGES: {
      console.assert(action.imagesList != undefined, {"message":"action.imagesList is undefined"});

      return Object.assign({}, state, {
        imagesList: action.imagesList
      });
    }
    default: {
      return state;
    }
  }
}
