'use strict'

import React, {
  Component
} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const { width: windowWidth } = Dimensions.get('window');
const imagePreviewPaneWidth = windowWidth - 40;

export default class UserProfilePane extends React.Component {
  renderImagePreview({item}) {
    return (
      <Image style={{width: imagePreviewPaneWidth, height: imagePreviewPaneWidth}} source={item.source} key={item.key}/>
    )
  }
  render() {
    const { isLoading, photo, name, bio } = this.props;
    const imageSource = isLoading ? require('../res/no_avatar.png') : photo;
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
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#f00'}}>
        <View style={styles.container}>
          <Image style={styles.avatar}
                 resizeMode={'contain'}
                 source={imageSource} />
          <View style={styles.infoPane}>
            <Text style={styles.name}>{name}</Text>
            <Text numberOfLines={3}
                  ellipsizeMode={'tail'} >
              {bio}
            </Text>
          </View>
        </View>
        <FlatList data={images}
                  style={styles.imagePreviews}
                  horizontal={true}
                  decelerationRate={0}
                  snapToAlignment={'center'}
                  snapToInterval={imagePreviewPaneWidth}
                  renderItem={this.renderImagePreview.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1.0,
    alignItems: 'flex-end',
    borderColor: '#444',
    paddingBottom: 5,
    paddingTop: 5
  },
  avatar: {
    width: 80,
    height: 80
  },
  imagePreviews: {
    width: imagePreviewPaneWidth,
    height: imagePreviewPaneWidth,
    marginTop: 20,
    marginLeft: 20
  },
  infoPane: {
    flex: 1,
    marginLeft: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
