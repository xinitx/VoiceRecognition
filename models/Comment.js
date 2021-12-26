const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../db/db');

const CommentSchema = new Schema({

});

module.exports = db.model('Comment', CommentSchema);