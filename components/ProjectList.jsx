import React from 'react';
import ProjectItem from './ProjectItem.jsx'

export default class ProjectList extends React.Component {
  fetchProjects(currentUser) {
    // Fetch All the Projects from the DB of the currentUser
    return [
      {
        id: 0,
        project: 'Mobiles Application Development',
        milestones: {0: {id: 0, milestone: 'Improof'}, 1: {id: 1, milestone: 'Android'}},
        sessionWorked: 2,
        totalSessions: 6,
        timeWorked: 4350000,
      },
      {
        id: 1,
        project: 'Learn Japanese',
        milestones: {0: {id: 0, milestone: 'Learn hiragana'}, 1: {id: 1, milestone: 'Learn Kanjis'}},
        sessionWorked: 2,
        totalSessions: 6,
        timeWorked: 0,
      },
    ]
  }

  createMyProjectElements(currentUser) {
    let projects = this.fetchProjects(currentUser);
    let projectList = projects.map((obj) => {
      return(<ProjectItem name={obj.project} timeWorked={obj.timeWorked} key={obj.id} />);
    });
    return projectList;
  }

  render() {
    const {
      currentUser
    } = this.props;

    return (
      <div className="my-projects">
        {this.createMyProjectElements(currentUser)}
      </div>
    );
  }
}
