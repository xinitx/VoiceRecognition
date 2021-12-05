<template>
  <!-- 底部组件 -->
  <div class="footer_guide">
    <span href="javascript:;" class="guide_item" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </span>
    <span href="javascript:;" class="guide_item" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-luntan"></i>
      </span>
      <span>论坛</span>
    </span>
    <span href="javascript:;" class="guide_item" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-zuoyeguanli"></i>
      </span>
      <span>课程</span>
    </span>
    <span href="javascript:;" class="guide_item" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-xiaoxi"></i>
      </span>
      <span>消息</span>
    </span>
    <span href="javascript:;" class="guide_item" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>我的</span>
    </span>
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

<style>
.footer_guide {
  border-top: 1px soild #e4e4e4;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
}
.guide_item {
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  color: #999999;
}
.guide_item .on {
  color: #02a774;
}

span {
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 2px;
}
.iconfont {
  font-size: 22px;
}
</style>