const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../db/db');

const FollowSchema = new Schema({
  firstID: {//被关注者id
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  secondID: {//关注者id
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  time: {
    type: Date,
    default: Date.now
  }
});

module.exports = db.model('Follow', FollowSchema);