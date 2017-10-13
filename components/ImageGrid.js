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
  StyleSheet,
  View
} from 'react-native';
import Grid from 'react-native-grid-component';

export default class ImageGrid extends React.Component {
  renderImageGridItem(data, i) {
    return (
      <View style={[{backgroundColor: data}, styles.item]} key={i}/>
    );
  }
  render() {
    return (
      <Grid style={styles.list}
      renderItem={this.renderImageGridItem.bind(this)}
      data={['black', 'white', 'red', 'green', 'yellow', 'pink', 'cyan', 'brown', 'purple']}
      itemsPerRow={3}
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
