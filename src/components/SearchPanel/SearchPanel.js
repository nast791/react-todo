import React from "react";
import './SearchPanel.scss'

export const SearchPanel = () => {
  const searchText = 'Поиск';
  return <input className="form-control search-input" type="text" placeholder={searchText}/>;
}