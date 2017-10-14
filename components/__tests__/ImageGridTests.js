import React from 'react';
import ImageGrid from '../ImageGrid';
import renderer from 'react-test-renderer';

it('renders correctly without any images', () => {
  const tree = renderer.create(
    <ImageGrid imagesList={[]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with 6 images', () => {
  const tree = renderer.create(
    <ImageGrid imagesList={[
      { uri: 'https://www.example.com/image1.png', key: '1'},
      { uri: 'https://www.example.com/image2.png', key: '2'},
      { uri: 'https://www.example.com/image3.png', key: '3'},
      { uri: 'https://www.example.com/image4.png', key: '4'},
      { uri: 'https://www.example.com/image5.png', key: '5'},
      { uri: 'https://www.example.com/image6.png', key: '6'},
    ]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
