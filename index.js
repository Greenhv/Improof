import 'react-hot-loader/patch';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import ons from 'onsenui'

import { Provider } from 'react-redux';
import Home from './components/Home.jsx';

import configureStrore from './store/configStore.js';

const store =  configureStrore();

const appElement = document.getElementById('app');

renderWithHotReload(Home);

if (module.hot) {
  module.hot.accept('./components/Home.jsx', () => {
    const Home = require('./components/Home.jsx').default;
    renderWithHotReload(Home);
  });
}

function renderWithHotReload(Home) {
  ons.ready(() => ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Home />
      </Provider>
    </AppContainer>,
    appElement
  ));
}
