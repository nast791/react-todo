import React, {Component} from "react";
import {TodoListItem} from '../TodoListItem/TodoListItem';
import './TodoList.scss';

export class TodoList extends Component {
  render() {
    const {data, onDeleted, onToggleImportant, onToggleDone} = this.props;
    const elements = data.map((item) => {
      const {id, ...itemProps} = item;

      return (
        <li key={id} className="list-group-item">
          <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} onToggleImportant={() => onToggleImportant(id)} onToggleDone={() => onToggleDone(id)}/>
        </li>
      );
    });

    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    );
  }
}