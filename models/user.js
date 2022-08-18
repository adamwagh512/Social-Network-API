const { Schema, model } = require('mongoose');

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
            //add email validation
        },
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'thoughts'}],
        friends: [{ type: Schema.Types.ObjectId, ref: 'user'}]
    }
);
// Creating a virtual property 'friendCount' that gets the amount of friends a user has
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

module.exports = Users; 