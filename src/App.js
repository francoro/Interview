import React, { Component } from 'react';
import Home from './home'
import configureStore from './configureStore';
import { Provider } from 'react-redux';
let store = configureStore();
console.log(store)
export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
  
}

