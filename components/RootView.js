/**
 RootView.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/

import React, {
  Component
} from 'react';
import {
  StatusBar,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserProfilePane from './UserProfilePane';
import ImagePreviewsPane from './ImagePreviewsPane';
import ImageGrid from './ImageGrid';
import * as ImagePreviewsPaneActionCreators from '../actions/ImagePreviewsPaneActionCreators';
import * as UserProfileActionCreators from '../actions/UserProfileActionCreators';

class RootView extends React.Component {
  componentWillMount() {
    this.props.BoundUserProfileActionCreators.LoadUserProfile();
  }
  render() {
    return (
      <View style={{backgroundColor: '#0000ff', flex: 1}}>
        <StatusBar hidden={true}/>
        <UserProfilePane {...this.props.profile}/>
        <ImagePreviewsPane
          {...this.props.imagePreviews}
          {...this.props.BoundImagePreviewsPaneActionCreators} />
        <ImageGrid />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    profile: state.profile,
    imagePreviews: state.imagePreviews
  }
}

const mapDispatchToProps = (dispatch) => {
  const boundActionCreators = Object.assign({}, {
    BoundImagePreviewsPaneActionCreators: bindActionCreators({
      ...ImagePreviewsPaneActionCreators
    }, dispatch),
    BoundUserProfileActionCreators: bindActionCreators({
      ...UserProfileActionCreators
    }, dispatch)
  });

  return boundActionCreators;
}

export default connect(mapStateToProps, mapDispatchToProps)(RootView);
