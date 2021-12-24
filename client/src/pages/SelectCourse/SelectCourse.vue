<template>
  <div class="con">
    <TopBar />
    <div class="cls-con">
      <div class="title">精选课程</div>
      <div class="look">查看全部</div>
    </div>
    <div @click="jump('/coursedetail')">
      <div class="cls-flex p-t-1">
        <van-image :src="img1" width="4rem" height="6.5rem" fit="cover" />
        <div class="pdc-info-con align-l">
          <div class="cls-flex">
            <van-icon name="hot-o" color="#ee0a24" />
            <div class="red-con">0元购</div>
            <div class="title">用得上的找工作经验</div>
          </div>
          <div class="p-02">听了都说好</div>
          <div class="date">100节课</div>
          <div class="cls-con p-t-05">
            <div class="c-red">免费</div>
            <div class="date">1000人已学习</div>
          </div>
        </div>
      </div>
      <div class="cls-flex p-t-1">
        <van-image :src="img1" width="4rem" height="6.5rem" fit="cover" />
        <div class="pdc-info-con align-l">
          <div class="cls-flex">
            <div class="title">用得上的找工作经验</div>
          </div>
          <div class="p-02">听了都说好</div>
          <div class="date">100节课</div>
          <div class="cls-con p-t-05">
            <div class="title">¥99</div>
            <div class="date">1000人已学习</div>
          </div>
        </div>
      </div>
      <div class="cls-flex p-t-1">
        <van-image :src="img1" width="4rem" height="6.5rem" fit="cover" />
        <div class="pdc-info-con align-l">
          <div class="cls-flex">
            <div class="title">用得上的找工作经验</div>
          </div>
          <div class="p-02">听了都说好</div>
          <div class="date">100节课</div>
          <div class="cls-con p-t-05">
            <div class="title">¥99</div>
            <div class="date">1000人已学习</div>
          </div>
        </div>
      </div>
      <div class="cls-flex p-t-1">
        <van-image :src="img1" width="4rem" height="6.5rem" fit="cover" />
        <div class="pdc-info-con align-l">
          <div class="cls-flex">
            <div class="title">用得上的找工作经验</div>
          </div>
          <div class="p-02">听了都说好</div>
          <div class="date">100节课</div>
          <div class="cls-con p-t-05">
            <div class="title">¥99</div>
            <div class="date">1000人已学习</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "../../components/TopBar/TopBar";
export default {
  components: {
    TopBar,
  },
  data() {
    return {
      img1: require("../../../static/selectcourse/02.jpg"),
    };
  },
  mounted: function () {
    document.body.style.backgroundColor = "#fff";
  },
  methods: {
    jump(url) {
      this.$router.push({ path: url });
    },
  },
};
</script>

<style scoped="">
.con {
  padding: 0.7rem;
}

.look {
  font-size: 0.8rem;
  color: #999999;
  padding: 0.2rem;
  border: 1px solid #999;
  border-radius: 0.5rem;
}
.pdc-img {
  margin-right: 0.5rem;
}
.pdc-info-con {
  flex: 1;
  margin-left: 0.5rem;
  height: 7rem;
  padding-top: 0.8rem;
  font-size: 0.9rem;
}
.red-con {
  color: white;
  font-weight: bold;
  font-size: 0.5rem;
  padding: 0.15rem 0.3rem;
  background: #ee0a24;
  border-radius: 0.2rem;
  margin: 0 0.2rem;
}
</style>
