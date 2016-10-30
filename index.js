import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui'

import { Provider } from 'react-redux';
import Home from './components/Home.jsx';

import configureStrore from './store/configStore.js';

const store =  configureStrore();

const appElement = document.getElementById('app');

ons.ready(() => ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  appElement
));
