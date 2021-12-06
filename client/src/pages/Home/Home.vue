<template>
  <div>
    <div class="text">
      <div class="top">
        <p class="toptext">您好</p>
        <p class="topuser">用户名！</p>
      </div>
      <div class="title">BTF保障您的出行安全</div>
    </div>
    <div class="content">
      <div class="number">
        {{ showPwd ? "进入" : "1" }}
      </div>
      <div class="main">
        <span>环境感知模式</span>
        <div
          class="switch_button"
          :class="showPwd ? 'on' : 'off'"
          @click="showPwd = !showPwd"
        >
          <div class="switch_circle" :class="{ right: showPwd }"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="number">
        {{ showPwd2 ? "进入" : "2" }}
      </div>
      <div class="main">
        <span>快速建立交流</span>
        <div
          class="switch_button"
          :class="showPwd2 ? 'on' : 'off'"
          @click="showPwd2 = !showPwd2"
        >
          <div class="switch_circle" :class="{ right: showPwd2 }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPwd: false, //显示进入界面
      showPwd2: false, //显示进入界面
    };
  },
};
</script>

<style scoped>
.text {
  margin: 25px 10px;
}
.top {
  padding-bottom: 10px;
}
.toptext {
  font-size: 22px;
  font-weight: bold;
  margin: 10px 5px;
}
.topuser {
  color: green;
  font-size: 28px;
  font-weight: bold;
}
.title {
  position: fixed;
  right: 30px;
  top: 57px;
  border: 1px solid rgb(155, 154, 154);
  padding: 5px 18px;
  font-size: 12px;
  background: rgb(219, 255, 231);
}
.content {
  margin: 10px;
  display: flex;
}
.number {
  height: 80px;
  width: 15%;
  background: rgb(178, 226, 187);
  border: 1px solid rgb(155, 154, 154);
  border-radius: 15px;
  line-height: 80px;
  text-align: center;
  color: rgb(109, 109, 109);
  font-weight: bold;
}
.main {
  height: 80px;
  border-radius: 25px;
  line-height: 80px;
  text-align: center;
  width: 84%;
  border: 1px solid rgb(83, 83, 83);
  background: rgb(109, 109, 109);
}
.main span {
  font-size: 12px;
  color: rgb(241, 235, 235);
}
.main .switch_button {
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 15px;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0 6px;
  width: 20px;
  height: 18px;
  line-height: 18px;
  color: #fff;
  position: absolute;
  right: 20px;
  transform: translateY(-250%);
}
.off {
  background: #fff;
}
.switch_text {
  float: right;
  color: #ddd;
}

.on {
  background: rgb(24, 144, 255);
}

.switch_circle {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.right {
  transform: translateX(16px);
}
</style>