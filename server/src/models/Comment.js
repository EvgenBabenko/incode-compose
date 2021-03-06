const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: true, default: new Date() },
  // createdByID: { type: String, required: true },
  // taskID: { type: String, required: true },
});

module.exports = mongoose.model('Comment', CommentSchema);
