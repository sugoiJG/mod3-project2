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

// Define a virtual property to format the dueDate as "Month/Day/Year"
TodoItemSchema.virtual('formattedDueDate').get(function () {
  // Check if the dueDate exists
  if (this.dueDate) {
    // Format the date as "Month/Day/Year"
    return this.dueDate.toLocaleDateString('en-US');
  }
  
  // Return null or any default value if the dueDate is not set
  return null;
});

// Ensure that the virtual property is included when converting the document to JSON
TodoItemSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('TodoItem', TodoItemSchema);
