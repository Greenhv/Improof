import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page, Button, Dialog, Input } from 'react-onsenui';
import NavBar from '../components/NavBar.jsx';
import ProjectList from '../components/ProjectList.jsx';
import MaterialSelect from '../components/MaterialSelect.jsx';

import * as Actions from '../actions';

class MyProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogShown: false,
      projectCategory: "",
      projectName: "",
    };
  }

  handleInputOnChange(type,e) {
      this.setState({[type]: e.target.value});
  }
  showDialog() {
    this.setState({dialogShown: true});
  }

  hideDialog() {
    this.setState({dialogShown: false});
  }

  createNewProject() {
    //Algo
    this.hideDialog();
  }

  render() {
    const {
      navigator,
      currentUser,
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
        <ProjectList currentUser={currentUser} />
        <div className="text-center">
          <Button name="create-project" onClick={() => {this.showDialog()}} className="dark-btn pomodoro-button">Start new Project</Button>
        </div>
        <Dialog
         isOpen={this.state.dialogShown}
         isCancelable={true}
         onCancel={() => {this.hideDialog()}}
        >
          <div className="dialog-content">
            <div className="dialog-header text-center">
              Start a new Project
            </div>
            <div className="dialog-body">
              <div className="flex-wrapper flex-absolute-center">
                <div className="dialog-body-icon">
                  <img className="user-projects-img" src="https://dummyimage.com/90x90/9b9b9b/000000" alt="Project Type Icon"/>
                </div>
                <div className="dialog-body-data">
                  <Input
                   className="input-full-width dialog-body-input"
                   placeholder="Name"
                   type="text"
                   onChange={(e) => this.handleInputOnChange('projectName', e)}
                  />
                  <MaterialSelect data={[{id: 1, value: 'Test Option'}, {id: 2, value: 'Test Option 2'}]} onChange={(e) => this.handleInputOnChange('projectCategory', e)}/>
                </div>
              </div>
              <div className="flex-wrapper flex-absolute-center">
                <Button className="light-btn short-btn dialog-content-btn" onClick={() => {this.hideDialog()}}>Cancel</Button>
                <Button className="dark-btn short-btn" onClick={() => {this.createNewProject()}}>Accept</Button>
              </div>
            </div>
          </div>
        </Dialog>
      </Page>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
