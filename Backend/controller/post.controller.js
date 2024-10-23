const Post = require('../models/post.model');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const newPost = new Post({ content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { user, text } = req.body;
    const post = await Post.findById(postId);
    post.comments.push({ user, text, timestamp: new Date() });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error adding comment', error });
  }
};

exports.likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    post.likes += 1;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error liking post', error });
  }
};

exports.editPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    post.content = content;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error editing post', error });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findByIdAndDelete(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
};
