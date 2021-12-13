/**
 * 直接更新state的多个方法的对象
 */
import { RECEIVE_USER_INFO, RESET_USER_INFO, } from './mutation-types'

export default {
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}//清空userInfo
  },

}