/**
 UserProfilePane.js
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
  Text,
  View
} from 'react-native';
import Bounceable from 'react-native-bounceable';
import Hyperlink from 'react-native-hyperlink'
import {
  TWITTER_URL_PREFIX
} from '../Constants';

const { width: windowWidth } = Dimensions.get('window');
const imagePreviewPaneWidth = windowWidth - 40;

export default class UserProfilePane extends React.Component {
  render() {
    const { isLoading, avatarUri, name, bio } = this.props;
    const imageSource = avatarUri ? {
                                  uri: avatarUri
                                } :
                                require('../res/no_avatar.png');

    return (
      <View style={{backgroundColor: '#f00'}}>
        <View style={styles.container}>
          <Image style={styles.avatar}
                 resizeMode={'contain'}
                 source={imageSource} />
          <View style={styles.infoPane}>
            <Text style={styles.name}>{name}</Text>
            <Hyperlink  linkDefault={true}
                        linkText={ url => {
                  if (url.startsWith(TWITTER_URL_PREFIX)) {
                      const entireMention = url.replace(TWITTER_URL_PREFIX, '');

                      return (entireMention.startsWith('%23') ? '#' : '@') +  entireMention.replace('%23', '');
                  }
                  return url
                }
              }
            >
              <Text numberOfLines={3}
                    ellipsizeMode={'tail'} >
                {bio}
              </Text>
            </Hyperlink>
          </View>
        </View>
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
  infoPane: {
    flex: 1,
    marginLeft: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
