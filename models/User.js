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
  pwd: {//密码
    type: String
  },
  sex: {//性别
    type: String,
    default: 'asexual'//默认值是中性
  },
  birthday: {//生日
    type: Date
  },
  explain: {//介绍(签名)
    type: String
  },
  email: {//邮箱
    type: String,
    required: true
  },
  imgurl: {//头像
    type: String,
    default: 'user.png'//给一张默认头像
  },
  date: {//日期
    type: Date,
    default: Date.now
  },
})

//这里连接了数据库db，暴露出db的数据库模型User
module.exports = db.model('User', UserSchema)