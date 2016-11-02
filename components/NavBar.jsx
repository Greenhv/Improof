import React from 'react';

import { Toolbar, BackButton, Icon, Ripple } from 'react-onsenui';

const NavApp = ({title, navigator, backButton, volumeButton, helpButton, deleteButton, sortButton}) => (
  <Toolbar class="global-navbar">
    <div className="left">
      {backButton ? <BackButton class="default-font-color" onClick={() => navigator.popPage()} /> : null}
    </div>
    <div className="center default-font-color navbar-tilte">{title}</div>
    <div className="right default-font-color navbar-icons">
      <div className="">
        {volumeButton ? <Icon class="navbar-icon" icon="md-volume-up" /> : null}
        <Ripple />
      </div>
      <div>
        {deleteButton ? <Icon class="navbar-icon" icon="md-delete" /> : null}
        <Ripple />
      </div>
      <div>
        {sortButton ? <Icon class="navbar-icon" icon="md-sort-amount-desc" /> : null}
        <Ripple />
      </div>
      <div>
        {helpButton ? <Icon class="navbar-icon" icon="md-help-outline" /> : null}
        <Ripple />
      </div>
    </div>
  </Toolbar>
);

export default NavApp;