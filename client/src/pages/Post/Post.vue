<template>
  <div>
    <div class="top">
      <router-link to="/discuss" class="toop-bar-left">
        <i class="iconfont icon-zuojiantou-copy back"></i>
      </router-link>
      <div class="top-bar-center">发帖</div>
    </div>
    <div class="contents">
      <div class="ccc"></div>
      <div class="content">
        <textarea
          placeholder="请输入内容"
          class="text"
          name=""
          id=""
          v-model="textarea"
        ></textarea>
        <van-uploader
          v-model="fileList"
          multiple
          :after-read="afterRead"
          :max-count="1"
          deletable
        />
      </div>
      <div class="other">
        <button @click="go">点击上传</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      textarea: "",
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      console.log(this.textarea);
      const formData = new FormData(); // 声明一个FormData对象
      formData.append("file", file.file);
      formData.append("textarea", this.textarea);
      console.log(formData.get("file"));
      this.$axios({
        data: {
          formData,
        },
        url: "api/files/upload",
        method: "post",
        // headers: {
        //   "content-type": "multer/form-data",
        // },
      }).then((res) => {
        this.file = res;
        console.log("3", this.file);
      });
    },
    go() {},
  },
};
</script>

<style scoped>
.top {
  height: 44px;
  background: white;
  display: flex;
  align-items: center;
}
.icon-zuojiantou-copy {
  font-size: 32px;
}
.top-bar-center {
  margin: auto;
  font-size: 22px;
}
.ccc {
  height: 15px;
  background-color: rgb(244, 244, 244);
}
.content {
  height: 200px;
  padding: 10px;
}

.text {
  width: 100%;
  border: none;
  height: 100px;
  padding: 7px 10px;
  box-sizing: border-box;
}

.other {
  background-color: rgb(244, 244, 244);
  height: 200px;
}
</style>