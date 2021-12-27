
###### 文件配置

```

|----------server.js项目主入口文件
|----------routes路由文件夹(里面放要访问的接口地址)
		|----------users.js
		|----------index.js登录和注册功能
|----------db创建数据库模型
	|----------models.js用户信息的数据库模型
|----------util文件夹
	|----------sms_util.js发送短信（规则）

```


```
开启后端服务器：npm run server
开启前端服务器：npm run serve
```

```
新增util文件夹，负责发送短信验证码
```

```
api接口：reqSendCode（发送短信验证码）、reqSmsLogin（手机号验证码登录）、reqUserInfo（获取用户信息）、reqLogout（用户登出）

export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', { phone })
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', { phone, code }, 'POST')
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
export const reqLogout = () => ajax(BASE_URL + '/logout')
```

```
使用云通讯实现发送短信功能，通过匹配验证码实现用户登录功能
	缺点：只能添加测试手机号来接收验证码，如果要所有人都能接收验证码需要上线应用
	
用户登录后可查看并修改个人基本资料
```

```
新增修改用户功能 routes/index/edit
前端调用接口 /edit

后台：需要根据id值查询用户的字段，用一个空对象存储用户信息
前端：不能修改的内容设置为不可编辑，将所有的用户信息传入到后台
```

```
做了编辑个人资料组件/Data
```

######  接口

```
发送短信
登录
查询user
更新资料
修改昵称
修改消息数
关注通知
是否为好友（即关注/被关注）
好友聊天
好友即时消息
发帖
删帖
回复评论
删除评论
```

