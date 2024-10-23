const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: String,
  text: String,
  timestamp: Date,
});

const postSchema = new mongoose.Schema({
  content: String,
  comments: [commentSchema],
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Post', postSchema);
