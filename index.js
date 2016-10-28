import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui'

import { Provider } from 'react-redux';
import Home from './www/containers/Home.jsx';

import configureStrore from './www/store/configStore.js';

const store =  configureStrore();

const appElement = document.getElementById('app');

ons.ready(() => ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  appElement
));
