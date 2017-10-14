import {
  _CreateLoadUserProfileFetchData,
  TwitterfyBio
} from '../UserProfileActionCreators'
import expect from 'expect'

it('creates the fetch data correctly', () => {
  const fetchData = _CreateLoadUserProfileFetchData()
  expect(fetchData.method).toBe('POST')
  // eslint-disable-next-line max-len
  expect(fetchData.body).toBe('{ "_method": "GET", "_version": "5.0.5", "_SessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g" }')
  expect(fetchData.headers.get('X-Version')).toBe('5.0.5')
  // eslint-disable-next-line max-len
  expect(fetchData.headers.get('X-Session-Token')).toBe('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g')
  expect(fetchData.headers.get('Content-Type')).toBe('application/json')
})

it('does not change a bio if there are no twitter mentions', () => {
  const bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
  expect(TwitterfyBio(bio)).toBe(bio)
})

it('does add a Twitter Url if there is a user mention in a bio', () => {
  const bio = '@pumpup Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
  const twitterfiedBio = 'https://twitter.com/search/?q=pumpup Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
  expect(TwitterfyBio(bio)).toBe(twitterfiedBio)
})

it('does add a Twitter Url if there is a hashtag in a bio', () => {
  const bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. #ActiveOctober'
  const twitterfiedBio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. https://twitter.com/search/?q=%23ActiveOctober'
  expect(TwitterfyBio(bio)).toBe(twitterfiedBio)
})
