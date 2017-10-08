import React, {
  Component
} from 'react';
import {
  AppState,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  applyMiddleware,
  createStore
} from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import appReducer from './reducers/AppReducer'

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(appReducer);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./reducers/AppReducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoadingStore: false
    }
  }
  componentWillMount() {
    var self = this;
    this.setState({isStoreLoading: true});
    AppState.addEventListener('change', this._handleAppStateChange.bind(this));
    AsyncStorage.getItem('SmartComponentsApp').then((value)=>{
      if(value && value.length){
        let initialStore = JSON.parse(value);
        self.setState({store: createStore(rootReducer, initialStore, applyMiddleware(thunk, logger))});
      }else{
        self.setState({store: store});
      }
      self.setState({isStoreLoading: false});
    }).catch((error)=>{
      self.setState({store: store});
      self.setState({isStoreLoading: false});
    })
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
  }
  _handleAppStateChange(currentAppState) {
    let storingValue = JSON.stringify(this.state.store.getState())
    AsyncStorage.setItem('SmartComponentsApp', storingValue);
  }
  render() {
    if (this.state.isStoreLoading) {
      return (
        <View style={styles.container}>
          <StatusBar hidden={true}/>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      );
    }
    return (
      <Provider store={this.state.store}>
        <View>
          <StatusBar hidden={true}/>
          <Text>Loaded</Text>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
