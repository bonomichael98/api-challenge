const router = require('express').Router();

const { 
    getUsers,
    getUserById,
    newUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

router.route('/').get(getUsers).post(newUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;