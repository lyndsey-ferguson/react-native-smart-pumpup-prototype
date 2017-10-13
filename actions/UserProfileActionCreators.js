/**
 UserProfileActionCreators.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/
import {
  ACTION_LOAD_USER_PROFILE
} from './UserProfileActions';

const _LoadProfile = (avatarUri, name, bio) => ({
  type: ACTION_LOAD_USER_PROFILE,
  avatarUri,
  name,
  bio
});

export function LoadUserProfile() {
  return dispatch => {
    var headers = new Headers();
    headers.append('X-Version', '5.0.5');
    headers.append('X-Session-Token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g');
    headers.append('Content-Type', 'application/json');

    let fetchData = {
        method: 'POST',
        headers: headers,
        body: "{ \"_method\": \"GET\", \"_version\": \"5.0.5\", \"_SessionToken\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g\" }"
    }
    fetch('http://api.pumpup.com/1/classes/User/318381', fetchData)
    .then(function(response) {
      if(response.ok) {
        return response.json();
      }
      throw new Error(`Network Error ${response.status}): ${response.statusText}`);
    }).then(function(json) {
      dispatch(_LoadProfile(json.profileThumbnail, json.name, json.bio));
    });
  }
}
