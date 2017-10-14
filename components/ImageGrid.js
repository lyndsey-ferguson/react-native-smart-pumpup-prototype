/**
 ImageGrid.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/

import React, {
  Component
} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View
} from 'react-native';
import Grid from 'react-native-grid-component';
import deepEqual from 'deep-equal';

export default class ImageGrid extends React.Component {
  renderImageGridItem(imageItem, i) {
    const { imagesList } = this.props;

    const imageUri = imagesList.length > 0 ? imagesList[0].uri : 'https://regmedia.co.uk/2017/06/02/fireball.jpg';

    return (
      <Image style={[styles.item, { backgroundColor: 'white' }]}
       resizeMode='contain'
       source={{uri: imageItem.uri}}
       defaultSource={require('../res/no_avatar.png')}
       key={imageItem.key}/>
    );
  }
  render() {
    const { imagesList } = this.props;

    return (
      <Grid style={styles.list}
      renderItem={this.renderImageGridItem.bind(this)}
      data={imagesList}
      itemsPerRow={3}
      itemHasChanged={ (d1, d2) => d1 !== d2 && !deepEqual(d1, d2)}
      />
    )
  }
}

const { width: windowWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: (windowWidth - 6) / 3,
    margin: 1
  },
  list: {
    flex: 1
  },
});
