import React, {Component} from "react";
import './SearchPanel.scss'

export class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      term: ''
    };
    this.onSearch = (e) => {
      const term = e.target.value;
      this.setState({term});
      this.props.onSearch(term);
    }
  }

  render() {
    const searchText = 'Поиск';
    return <input className="form-control search-input" type="text" placeholder={searchText} onChange={this.onSearch} value={this.state.term}/>;
  }
}