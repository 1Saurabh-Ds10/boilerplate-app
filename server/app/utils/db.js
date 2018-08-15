const mongoose = require('mongoose');

const config = require('../config');


mongoose.Promise = global.Promise;

const connection = mongoose.connect(config.database.url, { useNewUrlParser: true });

connection
	.then(db => {
    console.log(`Successfully Connected`);
		return db;
	})
	.catch(err => {
		if (err.message.code === 'ETIMEDOUT') {
			console.log(`connection timeout, re-establish..`);
			mongoose.connect(config.database.url, { useNewUrlParser: true });
		} else {
      console.log(`Error - Something went wrong`);
		}
	});

  module.exports =  connection;