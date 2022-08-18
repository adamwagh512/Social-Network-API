const { Timestamp } = require('bson');
const { Schema, model } = require('mongoose');

// Schema to create User model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // look at how to set length between 1 and 280 characters
        },
        createdAt: {
            type: Date,
            //set default to current time stamp
            //use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            //array of nested documents created with the `reactionSchema`
        }
    }
)