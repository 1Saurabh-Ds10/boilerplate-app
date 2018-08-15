const Task = require('../controllers/task');

module.exports = (app, db) => {
	
	app.route('/tasks/:id').get(Task.get);
	app.route('/tasks/:id').put(Task.put);
	app.route('/tasks').post(Task.post);
	app.route('/tasks').get(Task.list);
	app.route('/tasks/:id').delete(Task.delete);

};