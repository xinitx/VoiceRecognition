var express = require('express');
var router = express.Router();

const login = require('../server/login');//引入登录页面服务
const register = require('../server/register');//引入注册页面服务

//注册
router.post('/register', (req, res) => {
  register.register(req, res);
})
//登录
router.post('/login', (req, res) => {
  login.logIn(req, res);
})
//返回token
router.post('/login/token', (req, res) => {
  login.test(req, res);
})

module.exports = router;