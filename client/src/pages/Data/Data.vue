<template>
  <div>
    <div class="datatop">
      <router-link class="iconfont icon-zuojiantou-copy" to="/profile">
      </router-link>
      <span>个人资料</span>
      <i class="iconfont icon-zuojiantou-copy" style="color: white"></i>
    </div>
    <div>
      <van-cell-group>
        <van-cell title="头像" is-link @click="showPopup" />
        <van-popup
          v-model="show"
          round
          position="bottom"
          :style="{ height: '30%' }"
        >
          <van-button class="cell" type="default" size="large" hairline
            >拍照</van-button
          >
          <van-button class="cell" type="default" size="large" hairline
            >从相册中选择</van-button
          >
        </van-popup>
        <van-field v-model="name" label="昵称" />
      </van-cell-group>
    </div>
    <section class="profile_my_order">
      <mt-button type="primary" size="large" @click="comfirm"
        >确认修改</mt-button
      >
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { MessageBox, Toast } from "mint-ui";

export default {
  created() {
    this.$store.commit("init_user");
  },

  computed: {
    ...mapState({
      loginStatus: (state) => state.user.loginStatus,
      userInfo: (state) => state.user.userInfo,
    }),
  },

  data() {
    return {
      name: 100,
      show: false,
      avatat: 1,
    };
  },
  mounted() {
    //把用户名赋值给data中的name
    this.name = this.userInfo.name;
    //这里好像有点bug，因为cell标签不属于input类型，用不了v-model进行双向绑定
    // this.avatar = this.userInfo.avatar;
  },

  methods: {
    comfirm() {
      MessageBox.confirm("确认修改吗？").then(
        (action) => {
          console.log("点击了确定");
          //请求退出
          // this.$store.dispatch("logout");
          this.$router.push("/profile");
          Toast("修改成功");
        },
        (action) => {
          console.log("点击了取消");
        }
      );
    },
    showPopup() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.cell {
  margin-top: 20px;
  font-size: 20px;
}
.datatop {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
.datatop span {
  font-size: 18px;
  padding-top: 5px;
}
.profile_my_order {
  margin-top: 10px;
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
</style>