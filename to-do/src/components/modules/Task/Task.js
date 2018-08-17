import React, { Fragment } from 'react';

const Task = ({ title, text}) => {

  return (
    <Fragment>
      <p><strong> {title} </strong></p>
      <div> {text } </div>
    </Fragment>
  );

}

export default Task;
