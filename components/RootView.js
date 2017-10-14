/**
 RootView.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/

import React from 'react'
import {
  StatusBar,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import UserProfilePane from './UserProfilePane'
import ImagePreviewsPane from './ImagePreviewsPane'
import ImageGrid from './ImageGrid'
import * as ImagePreviewsPaneActionCreators from '../actions/ImagePreviewsPaneActionCreators'
import * as UserProfileActionCreators from '../actions/UserProfileActionCreators'
import * as ImageGridActionCreators from '../actions/ImageGridActionCreators'

class RootView extends React.Component {



  componentWillMount() {
    // begin downloading the parts. Done in bits so we can get the faster
    // items first.
    this.props.BoundUserProfileActionCreators.LoadUserProfile()
    this.props.BoundImagePreviewsPaneActionCreators.LoadImagePreviews()
    this.props.BoundImageGridActionCreators.LoadGridImages()
  }



  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true}/>
        <UserProfilePane {...this.props.profile}/>
        <ImagePreviewsPane
          {...this.props.imagePreviews}
          {...this.props.BoundImagePreviewsPaneActionCreators} />
        <ImageGrid
          {...this.props.imageGrid} />
      </View>
    )
  }
}



RootView.propTypes = {
  BoundUserProfileActionCreators: PropTypes.shape({
    LoadUserProfile: PropTypes.func.isRequired
  }),
  BoundImagePreviewsPaneActionCreators: PropTypes.shape({
    LoadImagePreviews: PropTypes.func.isRequired
  }),
  BoundImageGridActionCreators: PropTypes.shape({
    LoadGridImages: PropTypes.func.isRequired
  }),
  profile: PropTypes.object.isRequired,
  imagePreviews: PropTypes.object.isRequired,
  imageGrid: PropTypes.object.isRequired
}



const mapStateToProps = (state) => {
  return {
    app: state.app,
    profile: state.profile,
    imagePreviews: state.imagePreviews,
    imageGrid: state.imageGrid
  }
}



const mapDispatchToProps = (dispatch) => {
  // A handy way to send the function props so we can pass them to the
  // components quickly using the spread operator.
  const boundActionCreators = Object.assign({}, {
    BoundImagePreviewsPaneActionCreators: bindActionCreators({
      ...ImagePreviewsPaneActionCreators
    }, dispatch),
    BoundImageGridActionCreators: bindActionCreators({
      ...ImageGridActionCreators
    }, dispatch),
    BoundUserProfileActionCreators: bindActionCreators({
      ...UserProfileActionCreators
    }, dispatch)
  })
  return boundActionCreators
}



export default connect(mapStateToProps, mapDispatchToProps)(RootView)
