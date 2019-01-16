import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
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
