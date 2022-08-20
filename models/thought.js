const { Timestamp } = require('bson');
const { Schema, model } = require('mongoose');

// Schema to create User model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280
        },
        createdAt: {
            type: Date, 
            default: Date.now
            //use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            //array of nested documents created with the `reactionSchema`
        },
       
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
)

thoughtSchema
.virtual('timeCreated')
.get(function () {
    return `${this.createdAt}`
})


const Thought = model('thought', thoughtSchema)
module.exports = Thought; 