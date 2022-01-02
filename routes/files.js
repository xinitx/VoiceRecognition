//存取文件路由
const multer = require('multer');//引入文件上传插件
var express = require('express');
var router = express.Router();
//控制文件的存储
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log('1', req.body)
//     cb(null, '../uploads/test')//文件上传后存放的路径
//   },
//   filename: function (req, file, cb) {
//     console.log('2', file)
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })

let upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../uploads/test');
    },
    filename: function (req, file, cb) {
      var changedName = (new Date().getTime()) + '-' + file.originalname;
      console.log('2', changedName)
      cb(null, changedName);
    }
  })
});


//前端文件上传
router.post('/upload', upload.single('file'), function (req, res, next) {
  // req.file 是 `avatar` 文件的信息
  // req.body 将具有文本域数据，如果存在的话
  //获取文件信息
  let data = req.file
  let text = req.body
  console.log(data)
  console.log(text)
  res.send(text)
})

module.exports = router;