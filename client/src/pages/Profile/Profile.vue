<template>
  <div>
    <div class="mes_P">
      <div class="lefttop">
        <i class="iconfont icon-touxiang"></i>
        <span>我</span>
      </div>

      <router-link :to="userInfo._id ? '/profile' : '/login'">
        <div class="right">
          <div class="centerright">
            <img src="../../assets/头像.jpg" alt="" />
            <span>{{ userInfo.name || "点击登录" }}</span>
          </div>
          <div class="rightright">
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </div>
      </router-link>
    </div>
    <div class="mes_Other">
      <section class="profile_info_data">
        <ul class="info_data_list">
          <a href="javascript:" class="icons_data_link">
            <div class="icons">
              <i class="iconfont icon-wenti"></i>
            </div>
            <span class="info_data_bottom">问题咨询</span>
          </a>
          <a href="javascript:" class="icons_data_link">
            <div class="icons1">
              <i class="iconfont icon-kecheng"></i>
            </div>
            <span class="info_data_bottom">我的课程</span>
          </a>
          <a href="javascript:" class="icons_data_link">
            <div class="icons2">
              <i class="iconfont icon-jilu"></i>
            </div>
            <span class="info_data_bottom">购买记录</span>
          </a>
          <a href="javascript:" class="icons_data_link">
            <div class="icons3">
              <i class="iconfont icon-lishijilu"></i>
            </div>
            <span class="info_data_bottom">历史记录</span>
          </a>
        </ul>
      </section>
      <section class="fans_data_list">
        <ul>
          <a href="javascript:" class="info_data_link">
            <div class="info_data_bottom">winks</div>
            <span class="info_data_bottom">{{ userInfo.phone }}</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <div class="info_data_bottom">粉丝</div>
            <span class="info_data_bottom">{{ userInfo.fans }}</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <div class="info_data_bottom">关注</div>
            <span class="info_data_bottom">{{ userInfo.follow }}</span>
          </a>
        </ul>
      </section>
      <div class="div">
        <!-- 第一个 -->
        <div class="icon">社交</div>
        <section class="profile_my_order">
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-yanjing"></i>
            </span>
            <div class="my_order_div">
              <span>访客</span>
              <span class="my_order_icon">
                <i class="iconfont icon-youjiantou"></i>
              </span>
            </div>
          </a>
          <router-link
            href="javascript:"
            class="my_order"
            :to="userInfo._id ? '/data' : '/login'"
          >
            <span>
              <i class="iconfont icon-ziliao"></i>
            </span>
            <div class="my_order_div">
              <span>基本资料</span>
              <span class="my_order_icon">
                <i class="iconfont icon-youjiantou"></i>
              </span>
            </div>
          </router-link>
        </section>
        <div class="icon">隐私</div>
        <!-- 第二个 -->
        <section class="profile_my_order">
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-zhanghuguanli"></i>
            </span>
            <div class="my_order_div">
              <span>账户</span>
              <span class="my_order_icon">
                <i class="iconfont icon-youjiantou"></i>
              </span>
            </div>
          </a>
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-shoucang"></i>
            </span>
            <div class="my_order_div">
              <span>收藏</span>
              <span class="my_order_icon">
                <i class="iconfont icon-youjiantou"></i>
              </span>
            </div>
          </a>
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-heimingdan"></i>
            </span>
            <div class="my_order_div">
              <span>黑名单</span>
              <span class="my_order_icon">
                <i class="iconfont icon-youjiantou"></i>
              </span>
            </div>
          </a>
        </section>

        <!-- 退出登录 -->
        <section class="profile_my_order border-1px">
          <mt-button
            type="danger"
            style="width: 100%"
            v-if="userInfo._id"
            @click="logout"
            >退出登录</mt-button
          >
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { MessageBox, Toast } from "mint-ui";
export default {
  computed: {
    ...mapState(["userInfo"]),
  },
  components: {},

  methods: {
    logout() {
      MessageBox.confirm("确认退出吗？").then(
        (action) => {
          console.log("点击了确定");
          //请求退出
          this.$store.dispatch("logout");
          Toast("退出成功");
        },
        (action) => {
          console.log("点击了取消");
        }
      );
    },
  },
};
</script>

<style scoped>
.profile_my_order {
  background: #fff;
  position: relative;
}

.profile_my_order::before content {
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
}

.mes_P {
  width: 100%;
  height: 200px;
  background-color: #f8f2ff;
  background: -webkit-linear-gradient(#f8f2ff, #ede6ff);
  background: -o-linear-gradient(#f8f2ff, #ede6ff);
  background: -moz-linear-gradient(#f8f2ff, #ede6ff);
  background: linear-gradient(#f8f2ff, #ede6ff);
  position: relative;
}
.lefttop {
  padding: 10px;
}
.lefttop span {
  font-size: 17px;
  font-weight: bold;
}
.icon-touxiang {
  padding-right: 10px;
  font-size: 16px;
  color: #02a774;
  font-weight: bold;
}
img {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  display: block;
}
.centerright {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.centerright span {
  font-size: 20px;
  font-weight: bold;
  margin: 15px 20px;
  display: block;
}
.rightright i {
  color: #35ba8f;
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  right: 5px;
  top: 45%;
}
.mes_Other {
  width: 100%;
  height: 550px;
  background-color: white;
  border-radius: 40px 40px 0px 0px;
  overflow: hidden;
  position: absolute;
  top: 160px;
}
.icons_data_link {
  margin-top: 20px;
  float: left;
  width: 25%;
  text-align: center;
  text-decoration: none;
  margin-bottom: 10px;
  border-radius: 15px;
}
.icon-wenti {
  color: white;
  font-size: 30px;
  font-weight: 550;
}
.icon-kecheng {
  color: white;
  font-size: 30px;
  font-weight: 550;
}
.icon-jilu {
  color: white;
  font-size: 30px;
  font-weight: 550;
}
.icon-lishijilu {
  color: white;
  font-size: 30px;
  font-weight: 550;
}
.icons {
  background-color: #8599fd;
  padding: 5px;
  margin: 5px 20px;
  width: 30px;
  border-radius: 15px;
}
.icons1 {
  background-color: #76a1ff;
  padding: 5px;
  margin: 5px 20px;
  width: 30px;
  border-radius: 15px;
}
.icons2 {
  background-color: #ff6f47;
  padding: 5px;
  margin: 5px 20px;
  width: 30px;
  border-radius: 15px;
}
.icons3 {
  background-color: #4bd5b1;
  padding: 5px;
  margin: 5px 20px;
  width: 30px;
  border-radius: 15px;
}
.icon {
  font-weight: bold;
  font-size: 20px;
  padding: 10px 0 0 15px;
}
.profile {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 2px;
  width: 100%;
}
.header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
.header_search {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;
}
.icon-sousuo {
  font-size: 25px;
  color: #fff;
}
.header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
}
.header_title_text {
  font-size: 20px;
  color: #fff;
  display: block;
}
.header_login {
  font-size: 14px;
  color: #fff;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}
.header_login_text {
  color: #fff;
}
.profile-number {
  margin-top: 45.5px;
}
.profile-link {
  padding: 20px 10px 100px;
  position: relative;
  display: block;
  background: #02a774;
  padding: 20px 10px 100px;
}

.profile_image {
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: top;
  color: #fff;
}
.icon-geren1 {
  font-size: 60px;
}
.icon-person {
  background: #e4e4e4;
  font-size: 62px;
}
.user-info {
  float: left;
  margin-left: 15px;
  padding: 0;
}
.user-info p {
  font-weight: 700;
  font-size: 18px;
  color: #fff;
}
.user-info p .user-info-top {
  padding-bottom: 8px;
}

.user-icon {
  display: inline-block;
  margin-left: -15px;
  margin-right: 5px;
  width: 20px;
  height: 20px;
}
.arrow {
  width: 12px;
  height: 12px;
  position: absolute;
  right: 15px;
  top: 40%;
}
.icon-youjiantou {
  color: #fff;
  font-size: 10px;
  padding-right: 20px;
}
.profile_info_data {
  width: 100%;
  background: #fff;
  overflow: hidden;
  position: relative;
}
.profile_info_data::after {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  transform: scaleY(0.5);
}

.info_data_list ::after {
  content: "";
  display: block;
  clear: both;
}
.fans_data_list {
  padding: 10px 0 20px 0;
  margin-bottom: 30px;
}

.info_data_link {
  float: left;
  width: 33%;
  text-align: center;
  text-decoration: none;
}
.info_data_top {
  display: block;
  width: 100%;
  font-size: 14px;
  color: #333;
  padding: 15px 5px 10px;
}
.info_data_top span {
  display: inline-block;
  font-size: 30px;
  color: #f90;
  font-weight: 700;
  line-height: 30px;
}
.info_data_bottom {
  font-size: 15px;
  color: black;
  font-weight: 400;
  padding-bottom: 10px;
  font-weight: bold;
}

.info_data_top span {
  color: #6ac20b;
}

.my_order {
  display: flex;
  align-items: center;
  padding-left: 15px;
  text-decoration: none;
}
.my_order span {
  display: flex;
  align-items: center;
  height: 20px;
  padding-left: 5px;
}

.my_order span .iconfont {
  margin-left: -10px;
  font-size: 25px;
  padding-right: 10px;
}

.icon-yanjing {
  color: #9fdbad;
}

.icon-ziliao {
  color: #dd514e;
}

.icon-zhanghuguanli {
  color: #f90;
}

.icon-shoucang {
  color: #29abe2;
}

.icon-heimingdan {
  color: #1296db;
}
.my_order_div {
  width: 100%;
  padding: 10px 10px 10px 0;
  font-size: 20px;
  color: #333;
  display: flex;
  justify-content: space-between;
}
.my_order_div span {
  display: block;
  font-size: 15px;
  padding: 5px 0 0 5px;
}
.my_order_div .my_order_icon {
  width: 10px;
  height: 10px;
}
.my_order_div .my_order_icon .icon-youjiantou {
  color: #bbb;
  font-size: 20px;
}
</style>
