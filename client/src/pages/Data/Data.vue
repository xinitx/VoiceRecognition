<template>
  <div>
    <div class="datatop">
      <i class="iconfont icon-zuojiantou-copy"></i>
      <span>个人资料</span>
      <i class="iconfont icon-zuojiantou-copy" style="color: white"></i>
    </div>
    <div>
      <van-cell-group>
        <van-cell title="头像" is-link value="内容" />
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
import { Cell, CellGroup, Field } from "vant";
import { MessageBox, Toast } from "mint-ui";

export default {
  computed: {
    ...mapState(["userInfo"]),
  },
  data() {
    return {
      name: 100,
    };
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
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
  },
};
</script>

<style scoped>
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