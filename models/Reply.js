const{Schema,Types} = require('mongoose');

const replySchema = new Schema(
  {
    replyId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },replyBody: {
      type: String,
      maxlength: 140,
      required: true
    },username: {
      type: String,
      required: true
    },},
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

module.exports = replySchema;