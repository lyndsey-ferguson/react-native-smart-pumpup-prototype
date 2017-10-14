/**
 UserProfilePaneTests.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/
import React from 'react'
import UserProfilePane from '../UserProfilePane'
import renderer from 'react-test-renderer'
import expect from 'expect'



it('renders correctly without an avatar', () => {
  const tree = renderer.create(
    <UserProfilePane name={'Reg Park'} bio={'Likes to lift weights and do yoga #YogaBear'}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})



it('renders correctly with an avatar', () => {
  const tree = renderer.create(
    <UserProfilePane avatarUri={'https://www.example.com/avatar.png'}
      name={'Reg Park'}
      bio={'Likes to lift weights and do yoga #YogaBear'}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
