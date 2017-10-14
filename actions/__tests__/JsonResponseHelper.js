import {
  GetImagesFromJsonResponse
} from '../JsonResponseHelper'
import expect from 'expect'

it('gets image thumbnails and keys from the json response', () => {
  const json = {
    result: {
      posts: [
        { thumbnail: 'https://example.com/avatar1.png', objectId: 'blah_1' },
        { thumbnail: 'https://example.com/avatar2.png', objectId: 'blah_2' }
      ]
    }
  }
  const imagesList = GetImagesFromJsonResponse(json)
  expect(imagesList).toEqual([
    { uri: 'https://example.com/avatar1.png', key: 'image_grid_0' },
    { uri: 'https://example.com/avatar2.png', key: 'image_grid_1' }
  ])
})
