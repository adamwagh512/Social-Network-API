const Thought = require ('../models/thought')

module.exports = {
    getThoughts (req,res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))
    },
    createThought (req,res) {
        Thought.create(req.body)
        .then((newThought) => res.json(newThought))
        .catch((err) => res.status(500).json(err))
    }
    
}

