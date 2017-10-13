/**
 ImagePreviewsPaneActionCreators.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/

import {
  ACTION_IMAGES_CHANGE_LIST,
  ACTION_IMAGES_CHANGE_CURRENT
} from './ImagePreviewsPaneActions';

export const ChangeList = (imageList) => ({
  type: ACTION_IMAGES_CHANGE_LIST,
  imageList
});

export const ChangeCurrent = (currentImageIndex) => ({
  type: ACTION_IMAGES_CHANGE_CURRENT,
  currentImageIndex
});
