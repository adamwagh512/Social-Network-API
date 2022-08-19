const router = require('express').Router();
// Import functions from controller file
const {
    getThoughts,
    createThought,
    getSingleThought,
    updateAThought,
    deleteAThought,
    createReaction,
    deleteReaction,
} = require('../../controller/thoughtController')

// GET to get all thoughts
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router
.route('/')
.get(getThoughts)
.post(createThought);
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id
// GET to get a single thought by its _id,
router
.route('/:_id')
.get(getSingleThought)
.put(updateAThought)
.delete(deleteAThought);
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value
router
.route('/_id/reactions')
.post(createReaction)
.delete(deleteReaction);

