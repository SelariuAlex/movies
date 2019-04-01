import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    value: ''
  };

  timeout = null;

  doSearch = event => {
    const { callback } = this.props;

    this.setState({ value: event.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      callback(this.state.value);
    }, 500);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="searchbar">
        <div className="searchbar-content">
          <input
            type="text"
            className="searchbar-input"
            placeholder="Search"
            onChange={this.doSearch}
            value={value}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
