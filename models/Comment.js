const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../db/db');

const CommentSchema = new Schema({
  userID: {//用户ID
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  articleID: {//文章ID
    type: Schema.Types.ObjectId,
    ref: 'Acticle'
  },
  content: {//评论内容
    type: String
  },
  time: {//发表评论时间
    type: Date,
    default: Date.now
  }
});

module.exports = db.model('Comment', CommentSchema);