/**
 ImagePreviewsPane.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/

import React, {
  Component
} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View
} from 'react-native';
import Bounceable from 'react-native-bounceable';

const { width: windowWidth } = Dimensions.get('window');
const imagePreviewPaneWidth = windowWidth - 40;

export default class ImagePreviewsPane extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImagePreviewIndex: 0
    }
  }
  renderImagePreview({item}) {
    return (
      <Image style={{width: imagePreviewPaneWidth, height: imagePreviewPaneWidth}} source={item.source} key={item.key}/>
    )
  }
  scrollToImagePreview(index) {
    this.flatList.scrollToIndex({index});
  }
  handleScrollEnd(event) {
    const horizontalOffset = event.nativeEvent.contentOffset.x;
    const imagePreviewIndex = horizontalOffset ? Math.round(horizontalOffset / imagePreviewPaneWidth) : 0;
    if (this.state.currentImagePreviewIndex != imagePreviewIndex) {
      this.setState({
        currentImagePreviewIndex: imagePreviewIndex
      });
    }
  }
  render() {
    const images = [
      {
        key: 'me 1',
        source: require('../res/me.png')
      },
      {
        key: 'me 2',
        source: require('../res/me.png')
      }
    ];
    return (
      <View>
        <FlatList ref={component => this.flatList = component}
                  onMomentumScrollEnd={(event) => this.handleScrollEnd.call(this, event)}
                  data={images}
                  style={styles.imagePreviews}
                  horizontal={true}
                  decelerationRate={0}
                  snapToAlignment={'center'}
                  snapToInterval={imagePreviewPaneWidth}
                  renderItem={this.renderImagePreview.bind(this)} />
        <View
          style={{ flexDirection: 'row', justifyContent: 'center' }} // this will layout our dots horizontally (row) instead of vertically (column)
          >
          {
            images.map((_, i) => { // the _ just means we won't use that parameter
              return (
                <Bounceable key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                            onPress={() => this.scrollToImagePreview.call(this, i)}
                            level={1.1}
                >
                  <View style={[
                    styles.imagePreviewDot,
                    this.state.currentImagePreviewIndex == i && styles.imagePreviewActiveDot
                  ]} />
                </Bounceable>
              );
            })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagePreviews: {
    width: imagePreviewPaneWidth,
    height: imagePreviewPaneWidth,
    marginTop: 20,
    marginLeft: 20
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
});
