/*
包含n个能操作mongodb数据库集合的model的模块
1. 连接数据库
  1.1. 引入mongoose
  1.2. 连接指定数据库(URL只有数据库是变化的)
  1.3. 获取连接对象
  1.4. 绑定连接完成的监听(用来提示连接成功)
2. 定义对应特定集合的Model
  2.1. 字义Schema(描述文档结构)
  2.2. 定义Model(与集合对应, 可以操作集合)
3. 向外暴露获取Model的方法
 */
// 1. 连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/voice')
const conn = mongoose.connection
conn.on('connected', function () {
  console.log('数据库连接成功!')
})

// 2. 得到对应特定集合的Model: UserModel
const userSchema = mongoose.Schema({
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
    type: String,
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
UserModel = mongoose.model('user', userSchema)

// 3. 向外暴露
module.exports = {
  getModel(name) {
    return mongoose.model(name)
  }
}

