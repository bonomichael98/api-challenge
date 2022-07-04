const router = require('express').Router();

const {
    getAllPosts,
    getOnePost,
    createPost,
    updatePost,
    deletePost
} = require('../../controllers/post')

router.route('/').get(getAllPosts);

router.route('/:userId').post(createPost);

router.route('/:id').get(getOnePost).put(updatePost);

router.delete('/:userId/:postId').delete(deletePost);

module.exports = router;