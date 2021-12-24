<template>
  <div class="align-l">
    <TopBar />
    <div class="top">
      <div>最近学到：01 日常手语————我爱你</div>
      <div class="btn-con">
        <van-button plain type="primary" class="bg-none">进入学习</van-button>
      </div>
    </div>
    <van-tabs v-model="tabIdx" color="#37C17C">
      <van-tab title="课程">
        <div class="p-5">
          <div class="日常手语100讲">日常手语100讲</div>
          <div class="p-t-05">
            <van-icon name="star" color="#37C17C" />
            <van-icon name="star" color="#37C17C" />
            <van-icon name="star" color="#37C17C" />
            <van-icon name="star" color="#37C17C" />
            <van-icon name="star" color="#37C17C" />
            <span class="m-l date"> 5.0</span>
            <span class="tip"> 12779人在学</span>
            <div class="p-t-05 fs-09">
              <div class="title p-t-1">课程介绍</div>
              <div class="p-t-05">
                欢迎收听报名【日常手语100讲】微专业系列 直播公开课
                帮助学员构建自己核心竞争力，同时解决学员基础不好、
                渴望提升、追求大厂、缺少作品集等问题。
              </div>
              <van-image
                width="100%"
                fit="contain"
                class="m-t"
                src="../../../static/coursedetail/kc.png"
              ></van-image>
              <div class="title p-t-1">适用人群</div>
              <div class="p-t-05">
                技法单一：聋哑人及聋哑密切交流者<br />
                渴望提升：日常手语
              </div>
              <div class="title p-t-1">提供方</div>
              <div class="p-t-05 cls-flex">
                <img src="../../../static/coursedetail/kc1.png" />
                <div class="p-5 f1">
                  <div>网易云课堂设计学院</div>
                  <div class="p-t-05">2.7万学员</div>
                </div>
                <div class="date">进入网校 ></div>
              </div>
              <div class="title p-t-1">讲师</div>
              <div class="p-t-05 cls-flex">
                <img src="../../../static/coursedetail/kc1.png" class="img" />
                <div class="h-60 p-l-05">木松子旭</div>
              </div>
              <div class="p-t-05 cls-flex">
                <img src="../../../static/coursedetail/kc1.png" class="img" />
                <div class="h-60 p-l-05">木松子旭</div>
              </div>
              <div class="p-t-05 cls-flex">
                <img src="../../../static/coursedetail/kc1.png" class="img" />
                <div class="h-60 p-l-05">木松子旭</div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="目录">
        <van-collapse v-model="mlIdx">
          <van-collapse-item title="【7月】第五周" name="1">
            <div class="flex-con">
              <div class="green-con">回放</div>
              <div class="c-green">
                <div class="f-w">
                  1.聋哑人面试心理学——如何更多机会争 取到唯一的HC
                </div>
                <div>[回放] 7月29日 20:00 - 21:30</div>
              </div>
            </div>
            <div class="flex-con p-t-1">
              <div class="grey-con">回放</div>
              <div class="c-grey">
                <div class="f-w">
                  1.聋哑人面试心理学——如何更多机会争 取到唯一的HC
                </div>
                <div>[回放] 7月29日 20:00 - 21:30</div>
              </div>
            </div>
          </van-collapse-item>
          <van-collapse-item title="【7月】第四周" name="2">
            <div class="flex-con p-t-05">
              <div class="grey-con">回放</div>
              <div class="c-grey">
                <div class="f-w">
                  1.聋哑人面试心理学——如何更多机会争 取到唯一的HC
                </div>
                <div>[回放] 7月29日 20:00 - 21:30</div>
              </div>
            </div>
            <div class="flex-con p-t-1">
              <div class="grey-con">回放</div>
              <div class="c-grey">
                <div class="f-w">
                  1.聋哑人面试心理学——如何更多机会争 取到唯一的HC
                </div>
                <div>[回放] 7月29日 20:00 - 21:30</div>
              </div>
            </div>
          </van-collapse-item>
          <van-collapse-item title="【7月】第三周" name="3">
            <div class="flex-con p-t-1">
              <div class="grey-con">回放</div>
              <div class="c-grey">
                <div class="f-w">
                  1.聋哑人面试心理学——如何更多机会争 取到唯一的HC
                </div>
                <div>[回放] 7月29日 20:00 - 21:30</div>
              </div>
            </div>
            <div class="flex-con p-t-1">
              <div class="grey-con">回放</div>
              <div class="c-grey">
                <div class="f-w">
                  1.聋哑人面试心理学——如何更多机会争 取到唯一的HC
                </div>
                <div>[回放] 7月29日 20:00 - 21:30</div>
              </div>
            </div>
            <div class="flex-con p-t-1">
              <div class="grey-con">回放</div>
              <div class="c-grey">
                <div class="f-w">
                  1.聋哑人面试心理学——如何更多机会争 取到唯一的HC
                </div>
                <div>[回放] 7月29日 20:00 - 21:30</div>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </van-tab>
      <van-tab title="评价">
        <div class="p-5">
          <div class="title p-t-1">我的评价</div>
          <div class="cls-center p-t-1">
            <div>
              <van-icon name="star" color="#E0E0E6" size="1.2rem" />
              <van-icon name="star" color="#E0E0E6" size="1.2rem" />
              <van-icon name="star" color="#E0E0E6" size="1.2rem" />
              <van-icon name="star" color="#E0E0E6" size="1.2rem" />
              <van-icon name="star" color="#E0E0E6" size="1.2rem" />
            </div>
          </div>
          <div class="cls-center p-t-05 c-a6">
            您的宝贵评价，对我们非常重要哦~
          </div>
          <div class="title p-t-1">全部评价</div>
          <div class="p-t-05">
            <div class="cls-con">
              <div class="title">
                <span class="fs-40">4.5</span>
                <span>星</span>
              </div>
              <div class="f1">
                <div class="cls-center m-t m-l">
                  <van-icon
                    name="star"
                    color="#8f8e94"
                    size="0.9rem"
                  ></van-icon>
                  <van-icon name="star" color="#8f8e94" size="0.9rem" />
                  <van-icon name="star" color="#8f8e94" size="0.9rem" />
                  <van-icon name="star" color="#8f8e94" size="0.9rem" />
                  <van-icon name="star" color="#8f8e94" size="0.9rem" />
                  <div class="flex-con line">
                    <div class="line1"></div>
                  </div>
                </div>
                <div class="cls-center m-t m-l">
                  <div class="star-con">
                    <van-icon
                      name="star"
                      color="#8f8e94"
                      size="0.9rem"
                    ></van-icon>
                    <van-icon name="star" color="#8f8e94" size="0.9rem" />
                    <van-icon name="star" color="#8f8e94" size="0.9rem" />
                    <van-icon name="star" color="#8f8e94" size="0.9rem" />
                  </div>

                  <div class="flex-con line">
                    <div class="line2"></div>
                  </div>
                </div>
                <div class="cls-center m-t m-l">
                  <div class="star-con">
                    <van-icon
                      name="star"
                      color="#8f8e94"
                      size="0.9rem"
                    ></van-icon>
                    <van-icon name="star" color="#8f8e94" size="0.9rem" />
                    <van-icon name="star" color="#8f8e94" size="0.9rem" />
                  </div>

                  <div class="flex-con line">
                    <div class="line2"></div>
                  </div>
                </div>
                <div class="cls-center m-t m-l">
                  <div class="star-con">
                    <van-icon
                      name="star"
                      color="#8f8e94"
                      size="0.9rem"
                    ></van-icon>
                    <van-icon name="star" color="#8f8e94" size="0.9rem" />
                  </div>
                  <div class="flex-con line">
                    <div class="line2"></div>
                  </div>
                </div>
                <div class="cls-center m-t m-l">
                  <div class="star-con">
                    <van-icon
                      name="star"
                      color="#8f8e94"
                      size="0.9rem"
                    ></van-icon>
                  </div>
                  <div class="flex-con line">
                    <div class="line2"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex-con p-t-1">
              <van-icon
                name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
                size="3.5rem"
              />
              <div class="f1 fs-09">
                <div class="cls-con">
                  <div>万山wanshan</div>
                  <div>
                    <van-icon name="star" color="#37C17C" size="0.9rem" />
                    <van-icon name="star" color="#E0E0E6" size="0.9rem" />
                    <van-icon name="star" color="#E0E0E6" size="0.9rem" />
                    <van-icon name="star" color="#E0E0E6" size="0.9rem" />
                    <van-icon name="star" color="#E0E0E6" size="0.9rem" />
                  </div>
                </div>
                <div class="cls-con c-a6 p-t-05">
                  <div>学习5个课时评价</div>
                  <div>2019-10-03</div>
                </div>
                <div class="p-t-05">
                  太多停顿和无关紧要的话，需要快进，浪费时间
                </div>
              </div>
            </div>
            <div class="flex-con p-t-1">
              <van-icon
                name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
                size="3.5rem"
              />
              <div class="f1 fs-09">
                <div class="cls-con">
                  <div>万山wanshan</div>
                  <div>
                    <van-icon name="star" color="#37C17C" size="0.9rem" />
                    <van-icon name="star" color="#E0E0E6" size="0.9rem" />
                    <van-icon name="star" color="#E0E0E6" size="0.9rem" />
                    <van-icon name="star" color="#E0E0E6" size="0.9rem" />
                    <van-icon name="star" color="#E0E0E6" size="0.9rem" />
                  </div>
                </div>
                <div class="cls-con c-a6 p-t-05">
                  <div>学习5个课时评价</div>
                  <div>2019-10-03</div>
                </div>
                <div class="p-t-05">
                  太多停顿和无关紧要的话，需要快进，浪费时间
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
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
      img1: require("../../../static/coursedetail/02.jpg"),
      tabIdx: 0,
      kcImg: require("../../../static/coursedetail/kc.png"),
      mlIdx: ["1"],
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
      this.$router.push({
        path: url,
      });
    },
  },
};
</script>

<style scoped>
.top {
  margin-top: 44px;
  height: 9rem;
  color: rgba(255, 255, 255, 100);
  font-size: 0.9rem;
  background-color: #3d2259;
  padding: 4rem 3rem 1rem;
}

.img {
  border-radius: 30px;
  overflow: hidden;
}

.h-60 {
  height: 60px;
}

.c-a6 {
  color: #5b5b5b66;
  font-size: 0.8rem;
}

.line {
  margin: 0 0.5rem;
  flex: 1;
  height: 0.2rem;
  background: #e0e0e6;
  border-radius: 0.2rem;
  overflow: hidden;
}

.line1 {
  border-radius: 0.2rem;
  width: 90%;
  height: 0.2rem;
  background: #8e8e94;
}

.line2 {
  border-radius: 0.2rem;
  width: 10%;
  height: 0.2rem;
  background: #8e8e94;
}

.star-con {
  display: flex;
  width: 4.5rem;
  justify-content: flex-end;
}

.btn-con {
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.tip {
  color: #5b5b5b;
  font-size: 0.9rem;
  margin-left: 1rem;
}

.bg-none {
  background: #0000;
}

.green-con {
  border: 1px solid #afdecc;
  background: #e1fcef;
  color: #37c17c;
  padding: 0.1rem;
  font-size: 0.5rem;
  flex-shrink: 0;
  height: 1rem;
}

.grey-con {
  border: 1px solid #5b5b5b;
  background: #0000;
  color: #5b5b5b;
  padding: 0.1rem;
  font-size: 0.5rem;
  flex-shrink: 0;
  height: 1rem;
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
