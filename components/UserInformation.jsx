import React from 'react';
import { ProgressBar, Icon }  from 'react-onsenui';

export default class UserInformation extends React.Component {
  render() {
    const {
      currentUser,
    } = this.props;

    return (
      <section className="user-info">
        <div className="user-info-header flex-wrapper">
          <div className="user-name">{currentUser.username}</div>
          <div className="user-preferences"><Icon icon="md-settings" /></div>
        </div>
        <div className="user-info-body flex-wrapper">
          <div className="user-avatar-wrapper">
            <img className="user-avatar" src="https://dummyimage.com/84x84/000000/fff" alt="User Avatar"/>
          </div>

          <div className="user-progress-information">

            <div className="user-life">
              <div className="flex-wrapper user-life-progress">
                <div className="user-life-icon">
                  <Icon icon="md-favorite" />
                </div>
                <div className="user-life-bar-wrapper">
                  <ProgressBar className="user-life-bar" value={20} />
                </div>
              </div>
              <div className="progress-bar-text">
                <div className="progress-bar-text-percentage">39/100</div>
                <div className="progress-bar-text-name">Health</div>
              </div>
            </div>
            
            <div className="user-xp">
              <div className="flex-wrapper user-xp-progress">
                <div className="user-xp-bar-icon">
                  <Icon icon="md-flare" />
                </div>
                <div className="user-xp-bar-wrapper">
                  <ProgressBar className="user-xp-bar" value={40} />
                </div>
              </div>
              <div className="progress-bar-text">
                <div className="progress-bar-text-percentage">79/100</div>
                <div className="progress-bar-text-name">Experience</div>
              </div>
            </div>

            <div className="user-data">
              <div className="user-data-lvl">
                LVL 1
              </div>
              <div className="user-data-coins">
                <div className="user-data-coin is-gold">
                  <div className="user-data-coin-img-wrapper">
                    <img className="user-data-coin-img" src={require('file!../images/coin-gold.png')} alt="Gold Coin"/>
                  </div>
                  <div>3</div>
                </div>
                <div className="user-data-coin is-silver">
                  <div className="user-data-coin-img-wrapper">
                    <img className="user-data-coin-img" src={require('file!../images/coin-silver.png')} alt="Silver Coin"/>
                  </div>
                  <div>3</div>
                </div>
                <div className="user-data-coin is-copper">
                  <div className="user-data-coin-img-wrapper">
                    <img className="user-data-coin-img" src={require('file!../images/coin-bronze.png')} alt="Silver Coin"/>
                  </div>
                  <div>3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}
