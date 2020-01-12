import React, {Component} from 'react';
import './ItemAddForm.scss';

export class ItemAddForm extends Component {
  constructor() {
    super();

    this.state = {
      label: ''
    };

    this.onLabelChange = (e) => {
      this.setState({
        label: e.target.value
      });
    }

    this.onSubmit = (e) => {
      e.preventDefault();
      if (this.state.label) {
        this.props.addItem(this.state.label);
        this.setState({label: ''});
      }
    }
  }

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input type="text" className="form-control" onChange={this.onLabelChange} placeholder="Что еще нужно сделать" value={this.state.label}/>
        <button className="btn btn-outline-secondary float-right" type="submit">Добавить</button>
      </form>
    );
  }
}