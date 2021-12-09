<template>
  <div class="TOP">
    <div>
      <span class="iconfont icon-xiaoxi"></span>
      <div>
        <span id="t"><b>信息</b></span>
      </div>
      <div>
        <span class="iconfont icon-xingxing"></span>
      </div>
    </div>
    <!-- 白色背景 -->
    <div class="main">
      <div class="t2">
        <router-link to="/message/friends">朋友</router-link>
      </div>
      <span class="nth"></span>
      <!-- 陌生人页面 -->
      <div class="t2">
        <router-link to="/message/strangers">陌生人</router-link>
      </div>
      <span class="nth"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style scoped>
.TOP {
  width: 100%;
  height: 200px;
  background-color: #a493ff;
}
.main {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 30px 30px 0px 0px;
  position: absolute;
  top: 50px;
}
.icon-xiaoxi {
  font-size: 30px;
  color: white;
  float: left;
  margin: 10px;
  font-weight: bold;
}
#t {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  margin: 15px 0;
  position: absolute;
}
#t b {
  font-weight: bold;
}
.icon-xingxing {
  font-size: 20px;
  color: #ffffff;
  position: absolute;
  right: 10px;
  top: 14px;
  font-weight: bold;
}
.t2 {
  float: left;
  width: 50%;
  text-align: center;
  font-size: 14px;
  color: rgb(77, 85, 93);
  padding-top: 15px;
}

a {
  text-decoration: none;
  font-size: 16px;
}
.router-link-active {
  color: #02a774;
  font-weight: bold;
  font-size: 18px;
}
</style>