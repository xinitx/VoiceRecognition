<template>
  <div class="contents">
    <!-- 头部 -->
    <div class="top">
      <div class="toop-bar-left" @click="toLogin">
        <i class="iconfont icon-zuojiantou-copy back"></i>
      </div>
    </div>
    <!-- logo -->
    <div class="logo">
      <img src="../../../static/Register/logo.png" alt="" />
    </div>
    <!-- 主体部分 -->
    <div class="main">
      <div class="title">注册</div>
      <div class="inputs">
        <div class="inputs-div">
          <input
            class="user"
            @input="userRight"
            type="text"
            placeholder="请取个名字"
          />
        </div>
        <div class="inputs-div">
          <input
            class="email"
            @input="emailRight"
            type="text"
            placeholder="请输入邮箱"
          />
        </div>
        <div class="inputs-div">
          <input
            class="psw"
            :type="type"
            name=""
            id=""
            @input="pwdRight"
            placeholder="请输入密码"
          />
          <img
            v-if="!look"
            class="look"
            src="../../../static/Register/查看.png"
            alt=""
            @click="looks"
          />
          <img
            v-if="look"
            class="look"
            src="../../../static/Register/闭眼.png"
            alt=""
            @click="looks"
          />
        </div>
      </div>
    </div>
    <div class="submit" @click="toPage">注册</div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip" />
  </div>
</template>

<script>
import AlertTip from "../../components/AlertTip/AlertTip";
export default {
  data() {
    return {
      type: "password",
      look: false, //是否可以查看密码 img
      invalid: false, //邮箱是否符合规定格式
      emailemploy: false, //邮箱是否被占用
      email: "", //邮箱
      isok: false,
      user: "", //用户名
      pwd: "", //密码
      alertText: "", //提示文本
      alertShow: false, //是否显示警告框
    };
  },
  components: {
    AlertTip,
  },
  methods: {
    //密码显示隐藏
    looks() {
      if (this.look) {
        this.type = "text";
        this.look = !this.look;
      } else {
        this.type = "password";
        this.look = !this.look;
      }
    },
    //判断邮箱格式
    emailRight(e) {
      let reg =
        /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      this.email = e.target.value;
      if (this.email.length > 0) {
        //用户输入值之后再进行正则匹配
        //拿用户输入的内容进行正则匹配
        if (reg.test(this.email)) {
          //如果为真就是匹配通过
          this.invalid = false;
          // console.log("正确");
        } else {
          // console.log("不正确");
          this.invalid = true;
        }
      }
      // console.log(e.target.value);//打印出input框的值
    },
    //跳转到的登录页面
    toLogin() {
      this.$router.replace("/login");
    },
    //获取用户名
    userRight(e) {
      this.user = e.target.value;
    },
    //获取密码
    pwdRight(e) {
      this.pwd = e.target.value;
    },
    //注册事件
    toPage() {
      //判断页面是否能够进行注册
      if (!this.user) {
        this.showAlert("请输入用户名");
      } else if (this.invalid) {
        this.showAlert("邮箱格式不正确或该邮箱已注册");
      } else if (this.pwd.length < 5) {
        this.showAlert("密码长度应大于6");
      } else {
        //邮箱是真的、用户名是真的、密码长度>6
        this.$router.push("/login");
        this.$axios({
          data: {
            name: this.user,
            pwd: this.pwd,
            email: this.email,
          },
          url: "api/register",
          method: "post",
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    //关闭警告框
    closeTip() {
      this.alertShow = false;
      this.alertText = "";
    },
    showAlert(alertText) {
      this.alertShow = true;
      this.alertText = alertText;
    },
  },
};
</script>

<style scoped>
.contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0;
}
.toop-bar-left {
  float: left;
  padding-left: 12px;
  width: 44px;
  height: 44px;
}
.back {
  position: absolute;
  top: 10px;
  left: 5px;
}
.text {
  font-size: 18px;
  font-weight: 550;
  font-family: PingFangSC-Medium;
  color: black;
  line-height: 44px;
}
.logo {
  text-align: center;
}
.logo img {
  padding-top: 128px;
  width: 97px;
  height: 46px;
  height: auto;
  margin: 0 auto;
}
.main {
  padding: 27px 0 0 29px;
  width: 90%;
}
.title {
  font-size: 28px;
  font-weight: 550;
  color: black;
  line-height: 40px;
}
.inputs {
  padding-top: 4px;
  padding-bottom: 60px;
}
input {
  height: 44px;
  font-size: 16px;
  font-family: AvenirNext-Medium;
  font-weight: 500;
  color: rgba(39, 40, 50, 1);
  line-height: 44px;
  width: 90%;
  border: none;
  border-bottom: 1px solid #ccc;
}
.inputs-div {
  position: relative;
}
.employ,
.invalid {
  position: absolute;
  right: 30px;
  top: 3px;
  line-height: 44px;
  font-weight: 500;
  color: rgb(255, 93, 91);
}
.ok {
  position: absolute;
  right: 30px;
  top: 15px;
  width: 21px;
  height: 16px;
}
.look {
  position: absolute;
  right: 31px;
  top: 15px;
  width: 21px;
  height: 18px;
}
.submit {
  width: 260px;
  height: 48px;
  background: rgb(164, 147, 255);
  box-shadow: 0px 25px 16px -18px rgba(164, 147, 255, 0.4);
  border-radius: 24px;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #272832;
  font-weight: 550;
  line-height: 48px;
  text-align: center;
  margin: 0 auto;
}
</style>