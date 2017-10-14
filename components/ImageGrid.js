/**
 ImageGrid.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/

import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet
} from 'react-native'
import Grid from 'react-native-grid-component'
import deepEqual from 'deep-equal'
import PropTypes from 'prop-types'



export default class ImageGrid extends React.Component {



  /**
    Render the image in the Grid.
  */
  renderImageGridItem(imageItem, i) {
    return (
      <Image style={styles.item}
        resizeMode='contain'
        source={{uri: imageItem.uri}}
        defaultSource={require('../res/no_avatar.png')}
        key={imageItem.key}/>
    )
  }



  render() {
    const { imagesList } = this.props

    return (
      <Grid style={styles.grid}
        renderItem={this.renderImageGridItem.bind(this)}
        data={imagesList}
        itemsPerRow={3}
        itemHasChanged={ (d1, d2) => d1 !== d2 && !deepEqual(d1, d2)}
      />
    )
  }
}



ImageGrid.propTypes = {
  imagesList: PropTypes.arrayOf(PropTypes.shape({
    uri: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }))
}



const { width: windowWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: (windowWidth - 6) / 3,
    margin: 1,
    backgroundColor: '#000000'
  },
  grid: {
    flex: 1
  },
})
