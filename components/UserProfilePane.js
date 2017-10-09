'use strict'

import React, {
  Component
} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class UserProfilePane extends React.Component {
  render() {
    const { isLoading, photo, name, bio } = this.props;
    const imageSource = isLoading ? require('../res/no_avatar.png') : photo;

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
        <FlatList />
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