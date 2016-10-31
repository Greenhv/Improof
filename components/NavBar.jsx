import React from 'react';

import { Toolbar, BackButton, Icon } from 'react-onsenui';

const NavApp = ({title, navigator, backButton, volumeButton, helpButton, deleteButton, sortButton}) => (
  <Toolbar>
    <div className="left">
      {backButton ? <BackButton onClick={() => navigator.popPage()} /> : null}
    </div>
    <div className="center">{title}</div>
    <div className="right">
      {volumeButton ? <Icon icon="md-volume-up" /> : null}
      {helpButton ? <Icon icon="md-help-outline" /> : null}
      {deleteButton ? <Icon icon="md-delete" /> : null}
      {sortButton ? <Icon icon="md-sort-amount-desc" /> : null}
    </div>
  </Toolbar>
);

export default NavApp;