import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <span className="input-group-addon">SearchBar:</span>
          <input
            type="text"
            className="form-control"
            placeholder="Search ..."
            onChange={(event) => this.handleChange}
          />
        </div>
        <hr />
        <div>Text: {this.state.value}</div>
      </div>
    );
  }


  handleChange(event) {
    console.log('event: ', event);
    console.log('event.target.value: ', event.target.value);

    const value = event.target.value;

    this.setState({
      value: value
    });
  }


}

/*
const SearchBar = () => {
  return (
    <div className="input-group">
      <span className="input-group-addon">SearchBar:</span>
      <input type="text" className="form-control" placeholder="search ..." />
    </div>
  );
}
*/

export default SearchBar;
