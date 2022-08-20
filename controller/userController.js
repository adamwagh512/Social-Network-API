const User = require ('../models/user')

module.exports = {
//get all users
    getUsers(req,res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
//make a user
    makeUser(req,res) {
        User.create(req.body)
        //not sure what to do here yet, pattern matching for now but it seems wrong!
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err))
    },
//get user by id
    getUserById (req,res) {
        User.findOne({_id: req.params._id})
        .select('-__v')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
//update user by id
    updateUser(req, res) {
        User.findOneAndUpdate(
          { _id: req.params._id },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with this id!' })
              : res.json(user)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
//delete a user by id
      deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params._id })
          .then(() => res.json({ message: 'User deleted!' }))
          .catch((err) => res.status(500).json(err));
      },
};