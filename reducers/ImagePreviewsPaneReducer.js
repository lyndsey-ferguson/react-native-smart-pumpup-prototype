/**
 ImagePreviewsPaneReducer.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/
import {
  ACTION_IMAGES_CHANGE_LIST,
  ACTION_IMAGES_CHANGE_CURRENT
} from '../actions/ImagePreviewsPaneActions';


const initialState = {
  isLoading: true,
  imagesList: [],
  currentImageIndex: 0
};

export default ImagePreviewsPaneReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_IMAGES_CHANGE_CURRENT: {
      return Object.assign({}, state, {
        currentImageIndex: action.currentImageIndex
      });
    }
    case ACTION_IMAGES_CHANGE_LIST: {
      return Object.assign({}, state, {
        imagesList: action.imagesList
      });
    }
    default: {
      return state;
    }
  }
}
