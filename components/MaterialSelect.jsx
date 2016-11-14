import React from 'react';
import { Icon } from 'react-onsenui';

export default class MaterialSelect extends React.Component {
  render() {
    const {
      data,
      onChange,
    } = this.props;

    return (
      <div className="material-select-container">
        <select onChange={onChange} className="material-select" name="material-select" >
          <option value=""></option>
          {data.map((val) => {
            return(<option value={val.id} key={val.id}>{val.value}</option>)
          })}
        </select>
      </div>
    );
  }
}
