// 入口文件
import Vue from 'vue'
import App from './App'
import store from './store'
// import 'swiper/dist/css/swiper.css'
//引入路由器
import router from './router'
//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios//存到vm的原型链中
//引入组件库（在main.js里引入时为了做成全局标签）
import { Button, } from 'mint-ui'
import 'mint-ui/lib/style.min.css'

//websocket
// import io from 'vue-socket.io'
// Vue.prototype.socket = io('http://localhost:8082')
import SocketIO from "socket.io-client"
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO.connect('http://localhost:8082'),
  transports: ['websocket']
}))



import {
  Swipe,
  SwipeItem,
  Icon,
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Collapse,
  CollapseItem,
  Image as VanImage,
  Cell,
  CellGroup,
  Field,
  Popup,
  Uploader,
  Button as button
} from "vant";
Vue.use(CellGroup);
Vue.use(Cell);
Vue.use(Field);
Vue.use(Popup);
Vue.use(button);
Vue.use(Uploader);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(Grid);
Vue.use(Tabbar);
Vue.use(GridItem);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(VanImage);
//注册全局组件标签
Vue.component(Button.name, Button,)//<mt-button></mt-button>

Vue.config.productionTip = false;//阻止vue在启动时生成生产提示

new Vue({
  el: '#app',
  render: h => h(App),
  router,//使用上vue-router
  store,//使用上vuex
})