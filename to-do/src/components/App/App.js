import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TaskList from '../TaskList/TaskList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome </h1>
        </header>
        <p className="App-intro">
          <TaskList />
        </p>
      </div>
    );
  }
}

export default App;