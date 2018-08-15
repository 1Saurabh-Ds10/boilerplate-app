const async  = require('async');
const ObjectID = require('mongodb').ObjectID;

const TaskModel = require('../models/task');

const TaskController = {};

TaskController.list = (req, res) => {
	const query = req.query || {};
	TaskModel.apiQuery(query)
		.then(tasks => {
			res.json(tasks);
		})
		.catch(err => {
      res.status(404).json({ error: 'Oh uh, something went wrong' });
		});

};

TaskController.get = (req, res) => {
  const taskId = { _id: new ObjectID(req.params.id) };
  
  TaskModel.findById(taskId)
      .then(task => {
        
        res.json(task);
      })
      .catch(err => {
        res.status(404).json({ error: 'Oh uh, something went wrong' });
      });
  };


  TaskController.put = (req, res) => {
    const taskId = { _id: new ObjectID(req.params.id) };
    const taskContent = { title: req.body.title, text: req.body.text };
  
    if (!taskContent.title) {
      return res.status(422).send('Invalid title');
    }
    if (!taskContent.text) {
      return res.status(422).send('Invalid text');
    }
  
  
    TaskModel.findByIdAndUpdate(taskId, taskContent, { new: true })
      .then(task => {
        if (!task) {
          return  res.status(404).json({ error: 'Oh uh, something went wrong' });
        }
         res.json(task);
      })
      .catch(err => {
        res.status(404).json({ error: 'Oh uh, something went wrong' });
      });
  };


  TaskController.delete = (req, res) => {
    const taskId = { _id: new ObjectID(req.params.id) };

    TaskModel.findByIdAndRemove(
      taskId,
    )
      .then(task => {
        if (!task) {
          return  res.status(404).json({ error: 'Oh uh, something went wrong' });
        }
         res.json(task);
      })
      .catch(err => {
        res.status(404).json({ error: 'Oh uh, something went wrong' });
      });
  };
  

  TaskController.post = (req, res) => {
   
    const taskContent = { title: req.body.title, text: req.body.text };
  
    if (!taskContent.title) {
      return res.status(422).send('Invalid title');
    }
    if (!taskContent.text) {
      return res.status(422).send('Invalid text');
    }
  
    TaskModel.create(taskContent)
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        res.status(404).json({ error: 'Oh uh, something went wrong' });
      });
  };



module.exports = TaskController;