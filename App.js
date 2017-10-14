/**
 App.js
 Smart Components

 React Native app created by Lyndsey on 10/7/17.
 Copyright © 2017 Lyndsey Ferguson Apps. All rights reserved.
*/

import React from 'react'
import {
  AppState,
  AsyncStorage,
  Image,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import {
  applyMiddleware,
  createStore
} from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import RootView from './components/RootView'
import appReducer from './reducers/AppReducer'



const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
const store = createStoreWithMiddleware(appReducer)
if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./reducers/AppReducer').default
    store.replaceReducer(nextRootReducer)
  })
}



export default class App extends React.Component {



  constructor() {
    super()
    this.state = {
      isLoadingStore: false
    }
  }



  componentWillMount() {
    let self = this
    this.setState({isStoreLoading: true})
    AppState.addEventListener('change', this.handleAppStateChange.bind(this))
    AsyncStorage.getItem('SmartComponentsApp').then((value)=>{
      if(value && value.length){
        let initialStore = JSON.parse(value)
        self.setState({store: createStore(appReducer, initialStore, applyMiddleware(thunk, logger))})
      }else{
        self.setState({store: store})
      }
      self.setState({isStoreLoading: false})
    }).catch((error)=>{
      self.setState({store: store})
      self.setState({isStoreLoading: false})
    })
  }



  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange.bind(this))
  }



  handleAppStateChange(currentAppState) {
    let storingValue = JSON.stringify(this.state.store.getState())
    AsyncStorage.setItem('SmartComponentsApp', storingValue)
  }



  render() {
    if (this.state.isStoreLoading) {
      return (
        <View style={styles.loadingContainer}>
          <StatusBar hidden={true}/>
          <Image style={styles.loading}
            source={require('./res/loading.gif')}
          />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Provider store={this.state.store}>
          <RootView />
        </Provider>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    width: 200,
    height: 200,
    justifyContent: 'center'
  }
})
