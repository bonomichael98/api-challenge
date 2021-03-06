const {Schema,model} = require('mongoose');
const replySchema = require('./Reply');
const dateFormat = require('../utils/dateFormat');
const postSchema = new Schema(
  {
    PostText: {
      type: String,
      minlength: 1, maxlength: 280
    },createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },username: {
      type: String,
      required: true
    },replys: [replySchema]
  },
  {
    toJSON: {
      getters: true
    },id: false
  }
);
postSchema.virtual('replyCount').get(function() {
  return this.reply.length;
});
const Post = model('Post',postSchema);
module.exports = Post;