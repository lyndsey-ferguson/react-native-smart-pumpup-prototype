/**
 JsonResponseHelper.js
 Smart Components

 Parses various json responses into objects we can use

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/

// Get just an array of uri,key objects for each thumbnail
export function GetImagesFromJsonResponse(json) {
  const imagesList = json.result.posts.map(function({thumbnail}, index) {
    return { uri: thumbnail, key: `image_grid_${index}`}
  }) || []
  return imagesList
}
