const express = require('express');
const router = express.Router();
const postController = require('../controller/post.controller');

// Route definitions
router.get('/', postController.getAllPosts);

router.post('/', postController.createPost);
router.put('/:postId', postController.editPost);
router.delete('/:postId', postController.deletePost);
router.post('/:postId/comments', postController.addComment);
router.post('/:postId/like', postController.likePost);

module.exports = router;
