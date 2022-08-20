const router = require('express').Router();
const {
    getUsers,
    makeUser,
    getUserById,
    updateUser,
    // deleteUser,
    // addFriend,
    // removeFriend,
} = require ('../../controller/userController');
const User = require('../../models/user');
// endpoint : /api/users
// GET all users
//post a new user
router
.route('/')
.get(getUsers)
.post(makeUser);

// GET a single user by its _id and populated thought and friend data
//PUT to update a user by its _id
// DELETE to remove user by its _id
router.
route('/:_id')
.get(getUserById)
.put(updateUser)
// .delete(deleteUser);

// POST to add a new friend to a user's friend list;
// DELETE to remove a friend from a user's friend list;
router
.route('/api/users/:userId/friends/:friendId')
// .post(addFriend)
// .delete(removeFriend);

module.exports = router

