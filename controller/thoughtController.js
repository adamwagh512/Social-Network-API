const Thought = require ('../models/thought')
const User = require ('../models/user')

module.exports = {
// get all thoughts
    getThoughts (req,res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))
    },
//create a new thought 
    createThought (req,res) {
        Thought.create(req.body)
        .then ((thought) => {
          return User.findOneAndUpdate(
            {username: req.body.username},
            { $addToSet: {thoughts: thought._id}},
            {new: true}
          )
        })
        .then((newThought) => res.json(newThought))
        .catch((err) => res.status(500).json(err))
    },
// get a thought by ID
    getSingleThought (req,res) {
        Thought.findOne({_id: req.params._id})
        .select('-__v')
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
// update a thought by ID
    updateAThought(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params._id },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(thought)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
// delete a thought by ID
deleteAThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params._id })
      .then(() => res.json({ message: 'Thought was deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  createReaction(req,res) {
    Thought.findOneAndUpdate(
        {_id: req.params._id},
        { $addToSet: req.body},
        { runValidators: true, new: true }
        )   
        .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(reaction)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
}

