/**
 ImageGridActionCreators.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/
import {
  ACTION_LOAD_GRID_IMAGES
} from './ImageGridActions'

const _LoadGridImages = (imagesList) => ({
  type: ACTION_LOAD_GRID_IMAGES,
  imagesList
})

export function LoadGridImages() {
  return dispatch => {
    let headers = new Headers()
    headers.append('X-Version', '5.0.5')
    // eslint-disable-next-line max-len
    headers.append('X-Session-Token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g')
    headers.append('Content-Type', 'application/json')

    let fetchData = {
      method: 'POST',
      headers: headers,
      // eslint-disable-next-line max-len
      body: '{ "isThumbnailsOnly": true, "limit": 18, "_method": "POST", "_version": "5.0.5", "_SessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g" }'
    }
    fetch('http://api.pumpup.com/1/functions/feed/popular/load-batch', fetchData)
      .then(function(response) {
        if(response.ok) {
          return response.json()
        }
        throw new Error(`Network Error ${response.status}): ${response.statusText}`)
      }).then(function(json) {
        const imagesList = json.result.posts.map(function({thumbnail}, index) {
          return { uri: thumbnail, key: `image_grid_${index}`}
        }) || []
        dispatch(_LoadGridImages(imagesList))
      })
  }
}
