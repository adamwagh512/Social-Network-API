const User = require ('../models/user')

module.exports = {
    getUsers(req,res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    makeUser(req,res) {
        User.create(req.body)
        //not sure what to do here yet
        .then()
        .catch((err) => res.status(500).json(err))
    },
    getUserById (req,res) {
        User.findOne({_id: req.params.getUserById})
        .select('-__v')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    }

};