/**
 ImagePreviewsPaneReducer.js
 Smart Components

 Handle actions related to the image previews pane. Currently responds to the
 action sent when the images were downloaded from the web, and the action
 triggered when the user selects a different image using the dots.
 
 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/
import {
  ACTION_IMAGES_CHANGE_LIST,
  ACTION_IMAGES_CHANGE_CURRENT
} from '../actions/ImagePreviewsPaneActions'



const initialState = {
  imagesList: [],
  currentImageIndex: 0
}



export default function ImagePreviewsPaneReducer(state = initialState, action) {
  switch(action.type) {
  case ACTION_IMAGES_CHANGE_CURRENT: {
    return Object.assign({}, state, {
      currentImageIndex: action.currentImageIndex
    })
  }
  case ACTION_IMAGES_CHANGE_LIST: {
    return Object.assign({}, state, {
      imagesList: action.imagesList
    })
  }
  default: {
    return state
  }
  }
}
