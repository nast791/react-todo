import React from 'react';
import {AppHeader} from '../AppHeader/AppHeader';
import {ItemStatusFilter} from '../ItemStatusFilter/ItemStatusFilter';
import {SearchPanel} from '../SearchPanel/SearchPanel';
import {TodoList} from '../TodoList/TodoList';
import './App.scss';

export const App = () => {
  const todoData = [
    { label: 'Изучить реакт', important: true, id: 1 },
    { label: 'Создать реакт-приложение', important: false, id: 2 },
    { label: 'Выпить чай', important: false, id: 3 },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList data={todoData}/>
    </div>
  );
};
