import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Task from '../Task/Task';

import { fetchData } from '../../utils/network';

import './TaskList.css';
// To-Do: Add a loader & a logger

class TaskList extends Component {
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
    const { loading, tasks } = this.state;
    const {match : { url }} = this.props;
    if (loading)
      return <div>loading... </div>
    else
      return (

         <BrowserRouter>
          <Fragment>
            <ul className="tasks-links">
            { tasks.map(task => <Link to={`${url}/${task._id}`} key={task._id} replace><li>{task.title}</li></Link>) }
            </ul>

            <Route exact path={`${url}`} render={() => <p> Please select a task </p>}/>
            <Route path={`${url}/:_id`} render={(props) => <Task {...tasks.find(task => task._id === props.match.params._id )} />}/>
            </Fragment>
          </BrowserRouter>


      );

  }
}

export default TaskList;
