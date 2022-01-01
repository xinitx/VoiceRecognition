export default {
  state: {
    list: 123,
    //登录状态
    loginStatus: false,
    //token
    token: null,
    //从后端返回的用户信息：用户头像|用户昵称等
    userInfo: {

    }
  },
  getters: {

  },
  mutations: {
    //登录成功后 将用户信息存储到vuex 之后就可以去别的组件读取了
    user_login(state, user) {
      state.loginStatus = true;
      state.token = user.token;
      state.userInfo = user
      //持久化存储 ==》 本地存储 把user对象存进去
      localStorage.setItem('teaUserInfo', JSON.stringify(user))
    },
    //本地持久化读取 =》app.vue
    init_user(state) {
      let userInfo = JSON.parse(localStorage.getItem('teaUserInfo'))
      if (userInfo) {
        state.loginStatus = true;
        state.token = userInfo.token;
        state.userInfo = userInfo
      }
    },
    //退出登录
    log_out(state) {
      state.loginStatus = false;
      state.token = null;
      state.userInfo = {};
      localStorage.removeItem('teaUserInfo')
    }
  },
  actions: {
    // login({ commit }, userInfo) {
    //   commit(user_login, { userInfo })
    // },
    // init({ commit }) {
    //   commit(init_user)
    // },
    // logout({ commit }) {
    //   commit(log_out)
    // }
  }
}
