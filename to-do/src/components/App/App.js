import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import { ResponsiveDrawer } from '../common/Layout/Drawer';
import TaskList from '../modules/TaskList/TaskList';
import Task from '../modules/Task/Task';
import {PageNotAvailable} from '../common/Error';

import { fetchData } from '../../utils/network';

class App extends Component {
  state = {
    tasks: [],
    loading: false
  };

  componentDidMount() {

    this.setState({ loading: true });
    fetchData({ url: '/tasks' })
      .then(({ data, status, statusText }) => {
        if (status === 200) {
          this.setState({
            tasks: data,
            loading: false
          });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        });
      });
  }


  render() {
    const {tasks} = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <ResponsiveDrawer tasks={tasks}>

            <Switch>
              <Route exact path="/" render={() => <div>Home</div>} />
              <Route exact path="/tasks" render={props => <TaskList {...props} {...this.state} />} />
              <Route path="/tasks/:id" render={props => <Task {...tasks.find(task => task._id === props.match.params.id)} />} />
              <Route component={PageNotAvailable} />
            </Switch>
          </ResponsiveDrawer>
        </BrowserRouter>
        <div className="App-intro" />
      </div>
    );
  }
}

export default App;
