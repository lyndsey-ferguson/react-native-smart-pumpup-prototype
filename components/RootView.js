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

class RootView extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#0000ff', flex: 1}}>
        <StatusBar hidden={true}/>
        <UserProfilePane {...this.props.profile}/>
        <ImagePreviewsPane />
        <ImageGrid />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RootView);
