import React, { Fragment } from 'react';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom';

import Task from '../Task/Task';



import './TaskList.css';
// To-Do: Add a loader & a logger

const TaskList = ({match : { url }, loading, tasks}) => {


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
            <Route path={`${url}/:_id`} render={(props) => {
              const task = tasks.find(task => task._id === props.match.params._id );
              if (task)
                return <Task {...task} />
              else
                return <Redirect to="/404" />

            } }/>
            </Fragment>
          </BrowserRouter>


      );


}

export default TaskList;
