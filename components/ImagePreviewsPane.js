/**
 ImagePreviewsPane.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/
import React from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View
} from 'react-native'
import Bounceable from 'react-native-bounceable'
import PropTypes from 'prop-types'

const { width: windowWidth } = Dimensions.get('window')
const imagePreviewsPaneWidth = windowWidth - 40



export default class ImagePreviewsPane extends React.Component {


  /**
    Render the image in the horizontal FlatList.
  */
  renderImagePreview({item}) {
    return (
      <Image style={styles.imagePreview}
        resizeMode='contain'
        source={{uri: item.uri}}
        key={item.key}/>
    )
  }


  /**
    Update the state so that when the user finishes scrolling, the correct dot
    is updated.
  */
  handleScrollEnd(event) {
    const horizontalOffset = event.nativeEvent.contentOffset.x
    const imagePreviewIndex = horizontalOffset ? Math.round(horizontalOffset / imagePreviewsPaneWidth) : 0
    if (this.props.currentImageIndex !== imagePreviewIndex) {
      this.props.ChangeCurrent(imagePreviewIndex)
    }
  }


  /**
    Used by React Native FlatList to calculate where to scroll to in `scrollToIndex`
  */
  getItemLayout(data, index) {
    return {
      length: imagePreviewsPaneWidth,
      offset: imagePreviewsPaneWidth * index,
      index
    }
  }



  render() {
    const { currentImageIndex, imagesList } = this.props
    const shouldScroll = currentImageIndex < imagesList.length && currentImageIndex > 0
    return (
      <View style={styles.previewPane}>
        <FlatList ref={component => {
          // if the conponent has been created, and we *should* scroll, scroll
          // to the given image when we can.
          this.flatList = component
          if (component && shouldScroll) {
            component.scrollToIndex({index: currentImageIndex})
          }}
        }
        // eslint-disable-next-line no-useless-call
        onMomentumScrollEnd={(event) => this.handleScrollEnd.call(this, event)}
        extraData={imagesList}
        data={imagesList}
        style={styles.imagePreviews}
        horizontal={true}
        decelerationRate={0}
        getItemLayout={this.getItemLayout.bind(this)}
        snapToAlignment={'center'}
        snapToInterval={imagePreviewsPaneWidth}
        renderItem={this.renderImagePreview.bind(this)} />
        <View
          style={{ flexDirection: 'row', justifyContent: 'center' }}
        >
          {
            // create dot views for each image. Highlight the one that
            // corresponds to the currently visible image in the list.
            imagesList.map((_, imageIndex) => {
              return (
                <Bounceable key={imageIndex}
                  onPress={() => this.props.ChangeCurrent(imageIndex)}
                  level={1.1}
                >
                  <View style={[
                    styles.imagePreviewDot,
                    currentImageIndex === imageIndex && styles.imagePreviewActiveDot
                  ]} />
                </Bounceable>
              )
            })}
        </View>
      </View>
    )
  }
}



ImagePreviewsPane.propTypes = {
  imagesList: PropTypes.arrayOf(PropTypes.shape({
    uri: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  })),
  currentImageIndex: PropTypes.number.isRequired,
  ChangeCurrent: PropTypes.func.isRequired
}



const styles = StyleSheet.create({
  previewPane: {
    backgroundColor: '#d0c0f0'
  },
  imagePreviews: {
    width: imagePreviewsPaneWidth,
    height: imagePreviewsPaneWidth,
    marginTop: 20,
    marginLeft: 20
  },
  imagePreview: {
    width: imagePreviewsPaneWidth,
    height: imagePreviewsPaneWidth,
  },
  imagePreviewDot: {
    height: 10,
    width: 10,
    backgroundColor: '#595959',
    margin: 8,
    borderRadius: 5
  },
  imagePreviewActiveDot: {
    backgroundColor: '#FFFF00',
  }
})
