import React, {Component} from 'react';
import {AppHeader} from '../AppHeader/AppHeader';
import {ItemStatusFilter} from '../ItemStatusFilter/ItemStatusFilter';
import {SearchPanel} from '../SearchPanel/SearchPanel';
import {TodoList} from '../TodoList/TodoList';
import {ItemAddForm} from '../ItemAddForm/ItemAddForm';
import './App.scss';

export class App extends Component {
  static counter = 0;

  constructor() {
    super();
    this.state = {
      todoData: [
        this.createTodoItem('Изучить реакт'),
        this.createTodoItem('Создать реакт-приложение'),
        this.createTodoItem('Выпить чай'),
      ]
    };

    this.onDeleted = (id) => {
      this.setState(({todoData}) => {
        return {
          todoData: todoData.filter((item) => item.id != id)
        };
      });
    }

    this.addItem = (text) => {
      this.setState(({todoData}) => {
        return {
          todoData: [...todoData, this.createTodoItem(text)]
        };
      });
    }

    this.onToggleImportant = (id) => {
      this.setState(({todoData}) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'important')
        }
      });
    }

    this.onToggleDone = (id) => {
      this.setState(({todoData}) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'done')
        }
      });
    }
  }

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: App.counter++
    }
  }

  toggleProperty(arr, id, propName) {
    return arr.map((item) => {
      if (item.id == id) {
        item[propName] = !item[propName];
      }
      return item;
    })
  }

  render() {
    const {todoData} = this.state;
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList data={this.state.todoData} onDeleted={this.onDeleted} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone}/>
        <ItemAddForm addItem={this.addItem}/>
      </div>
    );
  }
}
