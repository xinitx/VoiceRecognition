const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    default:0
  },
  follow:{//关注
    type:Number,
    default:0
  }
})

module.exports = User = mongoose.model('users', UserSchema)