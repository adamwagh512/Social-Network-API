const { Schema, model } = require('mongoose');
const Thought = require('./thought');

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            // validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
            
        },
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought'}],
        friends: [{ type: Schema.Types.ObjectId, ref: 'user'}],
    },
        
    {
        toJSON: {
            virtuals: true,
        }
    }
);
// Creating a virtual property 'friendCount' that gets the amount of friends a user has
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema)

module.exports = User; 