import React from 'react';
import './AppHeader.scss';

export const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Мой список дел</h1>
      <h2>{toDo} запланировано, {done} сделано</h2>
    </div>
  );
};