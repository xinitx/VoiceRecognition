<template>
  <div>
    <div class="block1">
      <span
        class="iconfont icon-zuojiantou-copy"
        @click="$router.back()"
      ></span>
      <span>粉丝</span>
      <div>
        <span class="iconfont icon-luntan"></span>
      </div>
    </div>
    <div>
      <div class="lan">
        <!-- 头像 -->
        <span class="iconfont icon-touxiang"></span>
        <!-- 消息文字 -->
        <div class="lan1">
          <span id="s1"> 粉丝 </span>
          <div class="cl">
            <p id="s2">你好，看了你的帖子感觉你很乐观</p>
          </div>
        </div>
      </div>
      <div class="lan">
        <!-- 头像 -->
        <span class="iconfont icon-touxiang"></span>
        <!-- 消息文字 -->
        <div class="lan1">
          <span id="s1"> 粉丝 </span>
          <div class="cl">
            <p id="s2">很想和你成为朋友</p>
          </div>
        </div>
      </div>
      <div class="lan">
        <!-- 头像 -->
        <div>
          <span class="iconfont icon-touxiang"></span>
        </div>
        <!-- 消息文字 -->
        <div class="lan1">
          <span id="s1"> 粉丝 </span>
          <div class="cl">
            <p id="s2">我们还在同一个城市哈哈！</p>
          </div>
        </div>
      </div>
      <div class="lan">
        <!-- 头像 -->
        <div>
          <span class="iconfont icon-shoucang"></span>
        </div>
        <!-- 消息文字 -->
        <div class="lan2">
          <span id="s3"> 我 </span>
          <div class="c2">
            <p id="s2">你好呀！</p>
          </div>
        </div>
      </div>
      <div class="lan">
        <!-- 头像 -->
        <div>
          <span class="iconfont icon-shoucang"></span>
        </div>
        <!-- 消息文字 -->
        <div class="lan2">
          <span id="s3"> 我 </span>
          <div class="c2">
            <p id="s2">真巧哈哈哈哈</p>
          </div>
        </div>
      </div>
      <div class="lan">
        <!-- 头像 -->
        <div>
          <span class="iconfont icon-touxiang"></span>
        </div>
        <!-- 消息文字 -->
        <div class="lan1">
          <span id="s1"> 粉丝 </span>
          <div class="cl">
            <p id="s2">有机会一起学习呀~</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block3">
      <!-- 文字输入框 -->
      <div>
        <form action="">
          <input
            type="text"
            v-model="cont"
            id="shuru"
            placeholder="请输入文字......"
          />
        </form>
      </div>
      <div>
        <img
          @click="send"
          class="send"
          src="../../../static/detail/发送.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cont: "",
      arr: ["111", "222", "333"],
    };
  },
  methods: {
    send() {
      if (this.cont.length > 0) {
        this.arr.push(this.cont);
        // console.log(this);
        //发送
        let aa = this.cont;
        this.$socket.emit("message", aa);
        console.log(this.arr);
      }
    },
    //接收信息
    getmsg() {
      this.$socket.on("back", (data) => {
        this.arr.push(data);
        console.log(this.arr);
      });
    },
  },
};
</script>

<style scoped>
.send {
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 30px;
}
.block1 {
  width: 100%;
  height: 50px;
}
.block3 {
  width: 100%;
  height: 40px;
  background-color: whitesmoke;
  position: fixed;
  bottom: 0px;
}
.icon-zuojiantou-copy {
  font-size: 25px;
  margin: 15px 10px 0;
}
.block1 {
  margin: 15px 0 0 0;
}
.block1 span {
  font-size: 22px;
}

.icon-luntan {
  font-size: 25px;
  position: absolute;
  top: 15px;
  right: 20px;
}
.lan {
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
}
.icon-touxiang {
  float: left;
  font-size: 35px;
  color: skyblue;
  margin-left: 15px;
}
.lan1 {
  position: absolute;
  left: 60px;
}
#s1 {
  display: flex;
  justify-content: flex-start;
  color: #999999;
}
.cl {
  background-color: #fff0b3;
  border-radius: 0px 20px 20px 20px;
  margin-right: 50px;
}
#s2 {
  font-size: 15px;
  padding: 10px;
}
.icon-shoucang {
  float: right;
  font-size: 35px;
  color: skyblue;
  margin-right: 15px;
}
.lan2 {
  font-size: 15px;
  position: absolute;
  right: 60px;
}
.c2 {
  background-color: #dccdfc;
  border-radius: 20px 0px 20px 20px;
}
#s3 {
  color: #999999;
  display: flex;
  justify-content: flex-end;
}

#shuru {
  margin-top: 5px;
  margin-left: 10px;
  width: 85%;
  height: 30px;
  border: 0px;
  font-size: 15px;
}
.icon-tianjiajiahao {
  color: #777777;
  font-size: 25px;
  position: absolute;
  right: 5px;
  bottom: 5px;
}
</style>