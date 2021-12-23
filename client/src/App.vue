<template>
  <div id="app">
    <router-view></router-view>
    <!-- 当前路由下的meta里的showFooter属性是否为true，为true就展示FooterGuide -->
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  mounted() {
    this.getUserInfo();
  },
  methods: {
    ...mapActions(["getUserInfo"]),
  },
  components: {
    FooterGuide,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  color: read;
}

.fs-icon {
  font-size: 2rem;
}

.align-l {
  text-align: left;
}

.p-5 {
  padding: 0.5rem;
}

.p-02 {
  padding: 0.2rem;
}

.p-t-1 {
  padding-top: 1rem;
}
.p-t-05 {
  padding-top: 0.5rem;
}
.p-l-05 {
  padding-left: 0.5rem;
}
.m-r {
  margin-right: 0.5rem;
}

.m-l {
  margin-left: 0.5rem;
}
.m-t {
  margin-top: 0.5rem;
}
.f1 {
  flex: 1;
}

.fd-c {
  flex-direction: column;
}

.fs-12 {
  font-size: 1.2rem;
}
.fs-40 {
  font-size: 4rem;
}
.fs-09 {
  font-size: 0.9rem;
}

.f-w {
  font-weight: bold;
}
.c-green {
  color: #37c17c;
}
.c-grey {
  color: #5b5b5b;
}
.c-yellow {
  color: #ff4300;
}
.c-red {
  color: #f9805c;
}

.w-fix {
  width: 100%;
  height: auto;
}

.size-35 {
  width: 3.5rem;
  height: 3.5rem;
}

.size-20 {
  width: 2rem;
  height: 2rem;
}

.cls-con {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cls-flex {
  display: flex;
  align-items: center;
}
.flex-con {
  display: flex;
}
.cls-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 单行省略号*/
.one-hide {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.title {
  font-weight: bold;
}

.date {
  font-size: 0.8rem;
  color: #999999;
  padding: 0.2rem 0;
}
</style>