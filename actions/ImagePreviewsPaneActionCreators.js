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

const _ChangeList = (imagesList) => ({
  type: ACTION_IMAGES_CHANGE_LIST,
  imagesList
});

export const ChangeCurrent = (currentImageIndex) => ({
  type: ACTION_IMAGES_CHANGE_CURRENT,
  currentImageIndex
});

export function LoadImagePreviews() {
  return dispatch => {
    var headers = new Headers();
    headers.append('X-Version', '5.0.5');
    headers.append('X-Session-Token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g');
    headers.append('Content-Type', 'application/json');

    let fetchData = {
        method: 'POST',
        headers: headers,
        body: "{ \"isThumbnailsOnly\": true, \"limit\": 5, \"userId\": 2707798, \"_method\": \"POST\", \"_version\": \"5.0.5\", \"_SessionToken\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g\" }"
    }
    fetch('http://api.pumpup.com/1/functions/feed/profile/load-batch', fetchData)
    .then(function(response) {
      if(response.ok) {
        return response.json();
      }
      throw new Error(`Network Error ${response.status}): ${response.statusText}`);
    }).then(function(json) {
      const imagesList = json.result.posts.map(function({thumbnail}, index) {
        return { uri: thumbnail, key: `image_preview_${index}`};
      });
      dispatch(_ChangeList(imagesList));
    });
  }
}
