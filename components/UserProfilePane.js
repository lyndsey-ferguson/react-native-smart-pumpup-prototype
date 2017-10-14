/**
 UserProfilePane.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/

import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Hyperlink from 'react-native-hyperlink'
import ReadMore from '@expo/react-native-read-more-text'
import PropTypes from 'prop-types'
import {
  TWITTER_URL_PREFIX
} from '../Constants'



export default class UserProfilePane extends React.Component {


  /**
    Used by the ReadMore component to show a control when the component is
    minimized.
  */
  renderTruncatedFooter(handlePress) {
    return (
      <Text onPress={handlePress} style={styles.readMoreLess}>
        Read more
      </Text>
    )
  }



  /**
    Used by the ReadMore component to show a control when the component is
    maximized.
  */
  renderRevealedFooter(handlePress) {
    return (
      <Text onPress={handlePress} style={styles.readMoreLess}>
        Show less
      </Text>
    )
  }



  render() {
    const { avatarUri, name, bio } = this.props
    const imageSource = avatarUri ? {
      uri: avatarUri
    } : require('../res/no_avatar.png')

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
                  /**
                    linkText replaces the link, i.e. https://twitter.com/something
                    with the mention text. Either #hashtag or @user.
                  */
                  const entireMention = url.replace(TWITTER_URL_PREFIX, '')

                  return (entireMention.startsWith('%23') ? '#' : '@') +  entireMention.replace('%23', '')
                }
                // otherwise just return the URL if it is not a twitter search.
                return url
              }
              }
            >
              <ReadMore numberOfLines={3}
                renderTruncatedFooter={this.renderTruncatedFooter}
                renderRevealedFooter={this.renderRevealedFooter}
              >
                <Text>
                  {bio}
                </Text>
              </ReadMore>
            </Hyperlink>
          </View>
        </View>
      </View>
    )
  }
}



UserProfilePane.propTypes = {
  avatarUri: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1.0,
    alignItems: 'flex-start',
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
  },
  readMoreLess: {
    color: 'blue'
  }
})
