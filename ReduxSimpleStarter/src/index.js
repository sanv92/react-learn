import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = '-';

// components
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <h1>App:</h1>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
