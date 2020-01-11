import React, {Component} from "react";
import './SearchPanel.scss'

export class SearchPanel extends Component {
  render() {
    const searchText = 'Поиск';
    return <input className="form-control search-input" type="text" placeholder={searchText}/>;
  }
}