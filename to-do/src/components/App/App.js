import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';

import TaskList from '../modules/TaskList/TaskList';


class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tasks">
                  Tasks
                </Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route exact path="/tasks" render={ (props) => <TaskList {...props } />} />
          </Fragment>
        </BrowserRouter>
        <div className="App-intro">

        </div>
      </div>
    );
  }
}

export default App;
