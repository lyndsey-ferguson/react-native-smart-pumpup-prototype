import {
  _GetImagesFromJsonResponse,
  _CreateLoadGridImagesFetchData
} from '../ImageGridActionCreators'
import expect from 'expect'

it('creates the fetch data correctly', () => {
  const fetchData = _CreateLoadGridImagesFetchData()
  expect(fetchData.method).toBe('POST')
  // eslint-disable-next-line max-len
  expect(fetchData.body).toBe('{ "isThumbnailsOnly": true, "limit": 18, "_method": "POST", "_version": "5.0.5", "_SessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g" }')
  expect(fetchData.headers.get('X-Version')).toBe('5.0.5')
  // eslint-disable-next-line max-len
  expect(fetchData.headers.get('X-Session-Token')).toBe('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g')
  expect(fetchData.headers.get('Content-Type')).toBe('application/json')
})
