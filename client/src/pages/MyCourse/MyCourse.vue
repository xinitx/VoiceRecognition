<template>
  <div class="con align-l">
    <div class="cls-con title-con">
      <div class="title">我加入的课程</div>
      <div class="c-yellow">分类</div>
    </div>

    <van-grid :column-num="2" :border="false" class="fs-09">
      <van-grid-item>
        <div class="align-l">
          <div>
            <img src="../../../static/mycourse/people.png" class="img" />
          </div>
          <div class="title one-hide">维艰·计算机维修50节</div>
          <div class="desc">学好计算机，真的走遍天...</div>
          <div class="date">维艰·计算机科学家</div>
          <div class="date">14885人加入学习</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="align-l">
          <div>
            <img src="../../../static/mycourse/people.png" class="img" />
          </div>
          <div class="title one-hide">维艰·计算机维修50节</div>
          <div class="desc">学好计算机，真的走遍天...</div>
          <div class="date">维艰·计算机科学家</div>
          <div class="date">14885人加入学习</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="align-l">
          <div>
            <img src="../../../static/mycourse/people.png" class="img" />
          </div>
          <div class="title one-hide">维艰·计算机维修50节</div>
          <div class="desc">学好计算机，真的走遍天...</div>
          <div class="date">维艰·计算机科学家</div>
          <div class="date">14885人加入学习</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="align-l">
          <div>
            <img src="../../../static/mycourse/people.png" class="img" />
          </div>
          <div class="title one-hide">维艰·计算机维修50节</div>
          <div class="desc">学好计算机，真的走遍天...</div>
          <div class="date">维艰·计算机科学家</div>
          <div class="date">14885人加入学习</div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: require("../../../static/mycourse/02.jpg"),
    };
  },
  mounted: function () {
    document.body.style.backgroundColor = "#fff";
  },
  methods: {
    jump(url) {
      this.$router.push({
        path: url,
      });
    },
  },
};
</script>

<style scoped>
.con {
  padding: 1rem;
}

.title-con {
  padding-bottom: 0.7rem;
  margin-bottom: 0.7rem;
  border-bottom: 1px solid #ededed;
}

.img {
  width: 100%;
  height: auto;
}

.desc {
  font-size: 0.8rem;
  color: #6c6c6c;
}
</style>
