const router = require('express').Router();
//setup routes
const {
    getAllPosts,
    getOnePost,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/post')

//get all
router.route('/').get(getAllPosts);

//create one
router.route('/:userId').post(createPost);

//get one
router.route('/:id').get(getOnePost).put(updatePost);

//delete one
router.delete('/:userId/:postId').delete(deletePost);

module.exports = router;