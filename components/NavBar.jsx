import React from 'react';

import { Toolbar, BackButton, Icon } from 'react-onsenui';

const NavApp = ({title, navigator, backButton, volumeButton, helpButton, deleteButton, sortButton}) => (
  <Toolbar class="global-navbar">
    <div className="left">
      {backButton ? <BackButton class="default-font-color" onClick={() => navigator.popPage()} /> : null}
    </div>
    <div className="center default-font-color navbar-tilte">{title}</div>
    <div className="right default-font-color navbar-icons">
      {volumeButton ? <Icon class="navbar-icon" icon="md-volume-up" /> : null}
      {helpButton ? <Icon class="navbar-icon" icon="md-help-outline" /> : null}
      {deleteButton ? <Icon class="navbar-icon" icon="md-delete" /> : null}
      {sortButton ? <Icon class="navbar-icon" icon="md-sort-amount-desc" /> : null}
    </div>
  </Toolbar>
);

export default NavApp;