/**
 ImageGridActionCreators.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/
import {
  ACTION_LOAD_GRID_IMAGES
} from './ImageGridActions'
import {
  GetImagesFromJsonResponse
} from './JsonResponseHelper'

const _LoadGridImages = (imagesList) => ({
  type: ACTION_LOAD_GRID_IMAGES,
  imagesList
})

// Exported for testing.
export function _CreateLoadGridImagesFetchData() {
  let headers = new Headers()
  headers.append('X-Version', '5.0.5')
  // eslint-disable-next-line max-len
  headers.append('X-Session-Token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g')
  headers.append('Content-Type', 'application/json')

  return {
    method: 'POST',
    headers: headers,
    // eslint-disable-next-line max-len
    body: '{ "isThumbnailsOnly": true, "limit": 18, "_method": "POST", "_version": "5.0.5", "_SessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g" }'
  }
}


export function LoadGridImages() {
  return dispatch => {

    fetch('http://api.pumpup.com/1/functions/feed/popular/load-batch', _CreateLoadGridImagesFetchData())
      .then(function(response) {
        if(response.ok) {
          // take the response, and promise the JSON data to the next `then`
          return response.json()
        }
        throw new Error(`Network Error ${response.status}): ${response.statusText}`)
      }).then(function(json) {
        // Get just an array of uri,key objects for each thumbnail

        dispatch(_LoadGridImages(GetImagesFromJsonResponse(json)))
      })
  }
}
