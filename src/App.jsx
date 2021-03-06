import React from 'react';
import logo from './logo.svg';

import './assets/app.css';
import './assets/tailwind.css';
import './assets/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-red-500 text">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link text-gray-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
