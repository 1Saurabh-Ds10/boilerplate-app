const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const timestamps  = require('mongoose-timestamp');
const mongooseStringQuery  = require('mongoose-string-query');

const TaskSchema = new Schema(
  {
   
          title: {
            type: String,
            trim: true,
            default: '',
            required: true
          },
          text: {
            type: String,
            trim: true,
            default: '',
            required: true
          }
  },
  { collection: 'tasks' },
);

TaskSchema.plugin(timestamps); 
TaskSchema.plugin(mongooseStringQuery); 




module.exports = mongoose.model('Task', TaskSchema); ;