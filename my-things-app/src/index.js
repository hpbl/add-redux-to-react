import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import App from './App';
//import '.styles/styles.css';
import Provider from 'react-redux';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
