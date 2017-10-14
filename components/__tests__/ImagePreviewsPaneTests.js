/**
 ImagePreviewsPaneTests.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/
import React from 'react'
import ImagePreviewsPane from '../ImagePreviewsPane'
import renderer from 'react-test-renderer'
import expect from 'expect'



it('renders correctly without any images and a currentImageIndex of 0', () => {
  const tree = renderer.create(
    <ImagePreviewsPane imagesList={[]} currentImageIndex={9}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})



it('renders correctly without any images and an invalid currentImageIndex', () => {
  const tree = renderer.create(
    <ImagePreviewsPane imagesList={[]} currentImageIndex={9}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})



it('renders correctly with 6 images and a currentImageIndex of 0', () => {
  const tree = renderer.create(
    <ImagePreviewsPane  currentImageIndex={0}
      imagesList={[
        { uri: 'https://www.example.com/image1.png', key: '1'},
        { uri: 'https://www.example.com/image2.png', key: '2'},
        { uri: 'https://www.example.com/image3.png', key: '3'},
        { uri: 'https://www.example.com/image4.png', key: '4'},
        { uri: 'https://www.example.com/image5.png', key: '5'},
        { uri: 'https://www.example.com/image6.png', key: '6'},
      ]}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
