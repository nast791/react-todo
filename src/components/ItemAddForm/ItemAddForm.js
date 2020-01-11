import React, {Component} from 'react';
import './ItemAddForm.scss';

export class ItemAddForm extends Component {
  constructor() {
    super();
  }

  render() {
    const {addItem} = this.props;
    return (
      <div className="item-add-form">
        <button className="btn btn-outline-secondary float-right" type="button" onClick={() => addItem('Выпить кофе')}>Добавить</button>
      </div>
    );
  }
}