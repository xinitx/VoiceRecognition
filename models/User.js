const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../db/db')
//创建Schema
const UserSchema = new Schema({
  //创建规则
  name: {//名字
    type: String,
    // required: true
    default: '默认昵称'
  },
  phone: {//邮箱
    type: String,
    required: true
  },
  avatar: {//头像
    type: String
  },
  date: {//日期
    type: Date,
    default: Date.now
  },
  fans: {//粉丝
    type: Number,
    default: 0
  },
  follow: {//关注
    type: Number,
    default: 0
  }
})

//这里连接了数据库db，暴露出db的数据库模型User
module.exports = db.model('User', UserSchema)