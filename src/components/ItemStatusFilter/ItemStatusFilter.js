import React, { Component } from "react";

export class ItemStatusFilter extends Component {
  constructor() {
    super();
    this.buttons = [
      {name: 'all', label: 'Все'},
      {name: 'active', label: 'Актив'},
      {name: 'done', label: 'Готово'},
    ]
  }

  render() {
    const {filter, onFilterChange} = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter == name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button" className={`btn ${clazz}`} key={name} onClick={() => onFilterChange(name)}>{label}</button>
      );
    });
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}