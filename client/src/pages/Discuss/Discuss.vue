<template>
  <div>
    <div class="p-5">
      <!-- 顶部分类 -->
      <div class="cls-con">
        <div v-for="(cat, i) in catArr" :key="i" class="cls-flex fd-c">
          <div :style="i == catIdx ? 'font-size: 1.2rem;' : 'font-size: 1rem'">
            {{ cat }}
          </div>
          <div v-if="i == catIdx" class="dot"></div>
        </div>
      </div>
      <!-- 搜索框 -->
      <div class="search">
        <van-icon name="search" />

        <input :value="search" placeholder="请搜索论坛或帖子" />
      </div>
      <!-- 金刚导航 -->
      <div class="cls-con p-t-1">
        <div>
          <!-- icon-xiangsidupipeimoban -->
          <span class="iconfont icon-xiangsidupipeimoban fs-icon"></span>
          <!-- <img src="../assets/img/52.png" class="size-35" /> -->
          <div class="fs-09 f-w">同城助</div>
        </div>
        <div>
          <span class="iconfont icon-xiangsidupipeimoban fs-icon"></span>
          <!-- <img src="../assets/img/53.png" class="size-35" /> -->
          <div class="fs-09 f-w">就业</div>
        </div>
        <div>
          <!-- <img src="../assets/img/54.png" class="size-35" /> -->
          <span class="iconfont icon-xiangsidupipeimoban fs-icon"></span>
          <div class="fs-09 f-w">附近</div>
        </div>
        <div>
          <!-- <img src="../assets/img/55.png" class="size-35" /> -->
          <span class="iconfont icon-xiangsidupipeimoban fs-icon"></span>
          <div class="fs-09 f-w">匹配</div>
        </div>
        <div>
          <span class="iconfont icon-xiangsidupipeimoban fs-icon"></span>
          <!-- <img src="../assets/img/56.png" class="size-35" /> -->
          <div class="fs-09 f-w">发现</div>
        </div>
      </div>
      <!-- 发图文等按钮 -->
      <div class="cls-con">
        <div class="cls-center btn-con">
          <div>
            <span class="iconfont icon-icon-fensi"></span>
            <!-- <img src="../assets/pic.png" class="size-20" /> -->
            <div>发图文</div>
          </div>
          <div class="line-gap"></div>
          <div>
            <span class="iconfont icon-icon-fensi"></span>
            <!-- <img src="../assets/tie.png" class="size-20" /> -->
            <div>发帖子</div>
          </div>
          <div class="line-gap"></div>
          <div>
            <span class="iconfont icon-icon-fensi"></span>
            <!-- <img src="../assets/video.png" class="size-20" /> -->
            <div>小视频</div>
          </div>
        </div>
        <div class="cls-con lll">
          <div class="cls-center">
            <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" /> Color
          </div>
          <div>2.9万浏览</div>
        </div>
      </div>

      <!-- 列表 -->
      <van-grid :column-num="2" :border="false">
        <van-grid-item>
          <div class="item-con">
            <!-- <img src="../assets/img/01.jpg" /> -->
            <van-image
              :src="img1"
              width="100%"
              height="7rem"
              fit="cover"
            ></van-image>
            <div class="one-hide f-w p-5">两年的摸索，我最终成就自我</div>
            <div class="cls-con ll">
              <div class="cls-center">
                <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                Color
              </div>
              <div>2.9万浏览</div>
            </div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="item-con">
            <van-image :src="adimg" width="45vw" height="12rem"></van-image>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="item-con">
            <!-- <img src="../assets/img/01.jpg" /> -->
            <van-image
              :src="img1"
              width="100%"
              height="7rem"
              fit="cover"
            ></van-image>
            <div class="one-hide f-w p-5">两年的摸索，我最终成就自我</div>
            <div class="cls-con ll">
              <div class="cls-center">
                <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                Color
              </div>
              <div>2.9万浏览</div>
            </div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="item-con">
            <!-- <img src="../assets/img/01.jpg" /> -->
            <van-image
              :src="img1"
              width="100%"
              height="7rem"
              fit="cover"
            ></van-image>
            <div class="one-hide f-w p-5">两年的摸索，我最终成就自我</div>
            <div class="cls-con ll">
              <div class="cls-center">
                <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                Color
              </div>
              <div>2.9万浏览</div>
            </div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>

    <van-tabbar>
      <van-tabbar-item icon="icon-shouye">
        <template #icon>
          <span class="iconfont icon-home"></span>
        </template>
        首页
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <span class="iconfont icon-luntan"></span>
        </template>
        论坛
      </van-tabbar-item>
      <van-tabbar-item url="/#/about">
        <template #icon>
          <span class="iconfont icon-zuoyeguanli"></span>
        </template>
        课程
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <span class="iconfont icon-xiaoxi1"></span>
        </template>
        消息
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <span class="iconfont icon-wode"></span>
        </template>
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      catArr: ["推荐", "动漫", "绘画", "工作", "相亲"],
      /* 当前选中的分类索引*/
      catIdx: 0,
      search: "",
      img1: require("../../../static/discuss/01.jpg"),
      adimg: require("../../../static/discuss/ad.png"),
    };
  },
  mounted: function () {
    document.body.style.backgroundColor = "#F3F6FA";
  },
};
</script>
<style scoped>
.van-grid-item__content {
  background-color: #0000 !important;
  padding: 0.3rem;
}
.fs-icon {
  font-size: 2rem;
}

.so {
  height: 1.3rem;
  width: auto;
}

.dot {
  background: #2861c8;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 0.3rem;
}

.line-gap {
  width: 1px;
  height: 2.5rem;
  background: #99999999;
  margin: 0.4rem;
}

.ll {
  padding: 1rem 0.5rem;
  color: #888;
}

.lll {
  color: #888;
  flex: 1;
  padding: 0 0.3rem 0.5rem;
}

.search {
  margin-top: 0.5rem;
  border: 1px solid #2861c8;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  color: #2861c8;
}

.van-cell {
  background-color: #0000;
}

input {
  padding: 0.5rem;
  border: none;
  background-color: #0000;
}

input::-webkit-input-placeholder {
  color: #2861c8;
}

.btn-con {
  margin: 0.5rem 0;
  width: 13rem;
  padding: 0.3rem 0;
  color: #666;
  background-color: white;
  border-radius: 3rem;
  box-shadow: 0 0 10px #999;
  font-size: 0.8rem;
}

.item-con {
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
}
</style>
