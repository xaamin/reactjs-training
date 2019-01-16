import React, { Component } from 'react'

export class SearchBar extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.count(this);

    return (
      <input
          type="text"
          name="search"
          autoComplete="off"
          className="input-search"
          placeholder="Search"
          onChange={ this.props.onInputTextChange } />
    )
  }
}

export default SearchBar
