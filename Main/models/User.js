const User = require('./User');
const Post = require('./Post');

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        }, username: {
            type: String,
            required: true,
            unique: true,
        }, posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
    },
    { toJSON: {
            virtuals: true,
        },  
        id: false
    }
);

const User = model('User', userSchema);

module.exports = {User,Post};
