<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">短信登录</h2>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div>
            <section class="login_message">
              <input
                type="tel"
                maxlength="11"
                placeholder="手机号"
                v-model="phone"
              />
              <button
                :class="{ right_phone: rightPhone }"
                :disabled="!rightPhone"
                class="get_verification"
              >
                <!-- 点击事件发生并且阻止表单的默认提交行为 -->
                {{ computeTime > 0 ? `已发送(${computeTime}s)` : "获取验证码" }}
              </button>
            </section>
            <section class="login_verification">
              <input
                type="tel"
                maxlength="8"
                placeholder="验证码"
                v-model="code"
              />
            </section>
            <section class="login_hint">
              温馨提示：未注册的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-zuojiantou-copy"></i>
      </a>
    </div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip" />
  </section>
</template>

<script>
import AlertTip from "../../components/AlertTip/AlertTip";
export default {
  data() {
    return {
      computeTime: 0, //计时的时间
      phone: "", //手机号
      code: "", //短信验证码
      alertText: "", //提示文本
      alertShow: false, //是否显示警告框
    };
  },
  computed: {
    rightPhone() {
      return /^1\d{10}$/.test(this.phone); //返回的是一个布尔值
    },
  },
  components: {
    AlertTip,
  },
};
</script>

<style>
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;
}
.loginInner {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}

.login_header .login_logo {
  font-size: 40px;
  font-weight: bold;
  color: #02a774;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
}

input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
input:focus {
  border: 1px solid #02a774;
}

.login_message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.get_verification {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: 0;
  color: #ccc;
  font-size: 14px;
  background: transparent;
}
.right_phone {
  color: black;
}

.login_verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.login_hint {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
.login_hint a {
  color: #02a774;
  text-decoration: none;
}

.login_submit {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #4cd96f;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  border: 0;
}

.about_us {
  display: block;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  color: #999;
  text-decoration: none;
}

.go_back {
  position: absolute;
  top: 10px;
  left: 5px;
  width: 30px;
  height: 30px;
  text-decoration: none;
}
.go_back .iconfont {
  font-size: 20px;
  color: #999;
}
</style>
