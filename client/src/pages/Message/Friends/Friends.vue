<template>
  <div class="rating-wrapper">
    <ul>
      <li class="rating-item">
        <div class="avatar">
          <img width="40" height="40" src="../../../assets/头像.jpg" />
        </div>
        <div class="content">
          <h1 class="name">昵称</h1>
          <div class="star-wrapper">
            <span class="delivery">嘻嘻</span>
          </div>
          <div class="time">时间</div>
        </div>
      </li>
    </ul>
    <ul>
      <router-link to="/detail">
        <li class="rating-item">
          <div class="avatar">
            <img width="40" height="40" src="../../../assets/头像.jpg" />
          </div>
          <div class="content">
            <h1 class="name">昵称</h1>
            <div class="star-wrapper">
              <span class="delivery">嘻嘻</span>
            </div>
            <div class="time">时间</div>
          </div>
        </li>
      </router-link>
    </ul>
    <ul>
      <li class="rating-item">
        <div class="avatar">
          <img width="40" height="40" src="../../../assets/头像.jpg" />
        </div>
        <div class="content">
          <h1 class="name">昵称</h1>
          <div class="star-wrapper">
            <span class="delivery">嘻嘻</span>
          </div>
          <div class="time">时间</div>
        </div>
      </li>
    </ul>
    <ul>
      <li class="rating-item">
        <div class="avatar">
          <img width="40" height="40" src="../../../assets/头像.jpg" />
        </div>
        <div class="content">
          <h1 class="name">昵称</h1>
          <div class="star-wrapper">
            <span class="delivery">嘻嘻</span>
          </div>
          <div class="time">时间</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.rating-wrapper {
  position: absolute;
  top: 80px;
  width: 100%;
}
.rating-item {
  display: flex;
  padding: 18px 0 0 0;
}
.content {
  position: relative;
  flex: 1;
}
.avatar {
  width: 40px;
  margin: 0 15px;
}
img {
  border-radius: 50%;
}
ul {
  margin: 0;
  padding: 0;
}

.name {
  margin-bottom: 4px;
  line-height: 15px;
  font-size: 15px;
  color: rgb(7, 17, 27);
}
.star-wrapper {
  margin-bottom: 6px;
  font-size: 0;
}
.star {
  display: inline-block;
  margin-right: 6px;
  vertical-align: top;
}
.delivery {
  display: inline-block;
  vertical-align: top;
  line-height: 20px;
  font-size: 20px;
  color: black;
}

.time {
  position: absolute;
  top: 5px;
  right: 20px;
  line-height: 12px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
</style>