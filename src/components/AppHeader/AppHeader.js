import React, { Component } from 'react';
import './AppHeader.scss';

export class AppHeader extends Component {
  render() {
    const {toDo, done} = this.props;
    return (
      <div className="app-header d-flex">
        <h1>Мой список дел</h1>
        <h2>{toDo} активно, {done} сделано</h2>
      </div>
    );
  }
}