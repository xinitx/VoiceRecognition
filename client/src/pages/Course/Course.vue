<template>
  <div>
    <div class="cls-con p-5">
      <div class="tlza">
        <div>听力障碍</div>
        <van-icon name="arrow-down" />
      </div>

      <div class="xk-t-con">
        <div class="xk">选课</div>
        <div class="p-02 f1" @click="jump('/mycourse')">我的课程</div>
      </div>
      <div class="cls-center">
        <van-icon name="search" size="1.5rem" />
        <van-icon name="cart-o" size="1.5rem" />
      </div>
    </div>
    <!-- 精选...分类 -->
    <div class="cls-con cat-con">
      <div class="cls-center fd-c">
        <div class="f-w fs-12">精选</div>
        <div class="line"></div>
      </div>
      <div class="cls-con t-con">
        <div>手语</div>
        <div>艺术</div>
        <div>计算机</div>
      </div>
    </div>
    <!-- 轮播 -->
    <van-swipe @change="onChange" :autoplay="3000">
      <van-swipe-item>
        <img src="../../../static/course//ggt1.png" class="w-fix" />
      </van-swipe-item>
      <van-swipe-item
        ><img src="../../../static/course//ggt2.png" class="w-fix"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../../static/course//ggt3.png" class="w-fix"
      /></van-swipe-item>

      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/3</div>
      </template>
    </van-swipe>
    <!-- 金刚导航 -->
    <div class="cls-con p-5" @click="jump('/selectcourse')">
      <div>
        <span class="iconfont icon-xiangsidupipeimoban fs-icon"></span>
        <!-- <img src="../assets/img/a1.png" class="size-35" /> -->
        <div class="fs-09 f-w">选择咨询</div>
      </div>
      <div>
        <span class="iconfont icon-xiangsidupipeimoban fs-icon"></span>
        <!-- <img src="../assets/img/a2.png" class="size-35" /> -->
        <div class="fs-09 f-w">长期班</div>
      </div>
      <div>
        <span class="iconfont icon-xiangsidupipeimoban fs-icon"></span>
        <!-- <img src="../assets/img/a3.png" class="size-35" /> -->
        <div class="fs-09 f-w">短期班</div>
      </div>
      <div>
        <span class="iconfont icon-xiangsidupipeimoban fs-icon"></span>
        <!-- <img src="../assets/img/a4.png" class="size-35" /> -->
        <div class="fs-09 f-w">免费课程</div>
      </div>
      <div>
        <span class="iconfont icon-xiangsidupipeimoban fs-icon"></span>
        <!-- <img src="../assets/img/a5.png" class="size-35" /> -->
        <div class="fs-09 f-w">技能学习</div>
      </div>
    </div>
    <!-- 广告轮播 -->
    <div style="padding: 0.5rem">
      <van-swipe @change="onChange" :autoplay="3000">
        <van-swipe-item>
          <img src="../../../static/course/ggct1.png" class="w-fix" />
        </van-swipe-item>
        <van-swipe-item
          ><img src="../../../static/course/ggct2.png" class="w-fix"
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="p-5 align-l">
      <div class="f-w fs-12">秋季长期班</div>
      <div class="cls-flex">
        <div class="tag">手语</div>
        <div class="cls-flex">日常手语</div>
      </div>
      <div class="date">09月06日-12月29日</div>
      <div class="cls-con">
        <div class="cls-flex">
          <span class="iconfont icon-kecheng"></span>
          <span class="iconfont icon-kecheng"></span>
          <span class="iconfont icon-kecheng"></span>
          <span class="iconfont icon-kecheng"></span>
        </div>
        <div class="c-red">免费</div>
      </div>
    </div>
    <div class="gap"></div>
    <div class="p-5 align-l">
      <div class="f-w fs-12">秋季长期班</div>
      <div class="cls-flex">
        <div class="tag">手语</div>
        <div class="cls-flex">日常手语</div>
      </div>
      <div class="date">09月06日-12月29日</div>
      <div class="cls-con">
        <div class="cls-flex">
          <span class="iconfont icon-kecheng"></span>
          <span class="iconfont icon-kecheng"></span>
          <span class="iconfont icon-kecheng"></span>
          <span class="iconfont icon-kecheng"></span>
        </div>
        <div class="c-red">免费</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  mounted: function () {
    document.body.style.backgroundColor = "#fff";
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    jump(url) {
      this.$router.push({ path: url });
    },
  },
};
</script>
<style scoped>
.tlza {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.gap {
  height: 0.8rem;
  background-color: #99999933;
}

.xk-t-con {
  flex: 1;
  margin: 0 1rem;
  display: flex;
  border: 1px solid #0cb1ff;
  border-radius: 0.3rem;
}

.xk {
  flex: 1;
  background-color: #0cb1ff;
  padding: 0.2rem;
}

.cat-con {
  padding: 0.5rem 1rem;
}

.t-con {
  width: 50vw;
  color: #868686;
  font-size: 0.9rem;
}

.line {
  background: #2861c8;
  width: 1rem;
  height: 0.2rem;
  border-radius: 0.3rem;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.3);
}

.tag {
  background: #f9805c;
  padding: 0.2rem 0.5rem;
  border-radius: 0.8rem 0;
  color: white;
  font-size: 0.9rem;
  margin-right: 0.5rem;
}
</style>
