const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'low'
  },
  dueDate: {
    type: Date
  }
});

module.exports = mongoose.model('TodoItem', TodoItemSchema);

