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
const imagePreviewsPaneWidth = windowWidth - 40;

export default class ImagePreviewsPane extends React.Component {
  renderImagePreview({item}) {
    return (
      <Image style={{width: imagePreviewsPaneWidth, height: imagePreviewsPaneWidth}} source={item.source} key={item.key}/>
    );
  }
  handleScrollEnd(event) {
    const horizontalOffset = event.nativeEvent.contentOffset.x;
    const imagePreviewIndex = horizontalOffset ? Math.round(horizontalOffset / imagePreviewsPaneWidth) : 0;
    if (this.props.currentImageIndex != imagePreviewIndex) {
      this.props.ChangeCurrent(imagePreviewIndex);
    }
  }
  getItemLayout(data, index) {
    return {
      length: imagePreviewsPaneWidth,
      offset: imagePreviewsPaneWidth * index,
      index
    };
  }

  render() {
    const images = [
    ];
    const { currentImageIndex } = this.props;
    console.log('#### currentImageIndex is ' + currentImageIndex);
    return (
      <View>
        <FlatList ref={component => {this.flatList = component; component && currentImageIndex < images.length && component.scrollToIndex({index: currentImageIndex});}}
                  onMomentumScrollEnd={(event) => this.handleScrollEnd.call(this, event)}
                  data={images}
                  style={styles.imagePreviews}
                  horizontal={true}
                  decelerationRate={0}
                  getItemLayout={this.getItemLayout.bind(this)}
                  snapToAlignment={'center'}
                  snapToInterval={imagePreviewsPaneWidth}
                  renderItem={this.renderImagePreview.bind(this)} />
        <View
          style={{ flexDirection: 'row', justifyContent: 'center' }} // this will layout our dots horizontally (row) instead of vertically (column)
          >
          {
            images.map((_, imageIndex) => {
              return (
                <Bounceable key={imageIndex}
                            onPress={() => this.props.ChangeCurrent(imageIndex)}
                            level={1.1}
                >
                  <View style={[
                    styles.imagePreviewDot,
                    currentImageIndex == imageIndex && styles.imagePreviewActiveDot
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
    width: imagePreviewsPaneWidth,
    height: imagePreviewsPaneWidth,
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
