import React from 'react';
import { Icon } from 'react-onsenui';

export default class MaterialSelect extends React.Component {
  render() {
    const {
      data
    } = this.props;

    return (
      <div className="material-select-container">
        <select className="material-select" name="material-select" >
          <option value="" disabled></option>
          {data.map((val) => {
            return(<option value={val.id} key={val.id}>{val.value}</option>)
          })}
        </select>
      </div>
    );
  }
}
