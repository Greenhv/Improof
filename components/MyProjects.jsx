import React from 'react';

import { Page } from 'react-onsenui';
import NavBar from './NavBar.jsx';

export default class MyProjects extends React.Component {
  render() {
    const {
      navigator,
    } = this.props;

    return (
      <Page 
       renderToolbar={() =>
        <NavBar 
         title='Projects'
         navigator={navigator}
         backButton={true}
         sortButton={true}
         helpButton={true}
        />
       }
      >
        Test Page
      </Page>
    );
  }
}
