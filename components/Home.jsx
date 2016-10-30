import React from 'react';

import { Navigator } from 'react-onsenui';
import AuthOptions from './AuthOptions.jsx';

// Material Styles from Onsen UI 
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/js/onsenui.js';
import '../styles/app.scss';

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);

export default class Home extends React.Component {
  render() {
    return (
      <Navigator 
        renderPage={renderPage}
        initialRoute={{component: AuthOptions, key: 'LOGIN_PAGE'}}
      />
    )
  }
}
