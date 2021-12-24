<template>
  <!-- 头部 -->
  <div>
    <div class="top">
      <div class="top-bar-left" @click="back">
        <i class="iconfont icon-zuojiantou-copy"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
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
.top-bar-left {
  float: left;
  padding-left: 12px;
  padding-top: 12px;
  width: 44px;
  height: 44px;
}
.icon-zuojiantou-copy {
  margin-top: 16px;
}
</style>