const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../db/db');

const ArticleSchema = new Schema({
  userID: {//用户ID
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  topic: {//标题
    type: String,
  },
  content: {
    type: String,
  },
  cover: {//图片
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = db.model('Article', ArticleSchema);