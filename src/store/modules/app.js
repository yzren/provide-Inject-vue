import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  count:0
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  //加
  SET_ADD_COUNT: (state) => {
    state.count++
  },
  //减
  SET_SUBTRACT_COUNT: (state) => {
    state.count--
  }
}

const actions = {
  // 加
  add({ commit }) {
    console.log('add')
    commit('SET_ADD_COUNT')
  },
  // 减
  subtract({ commit }) {
    commit('SET_SUBTRACT_COUNT')
  },
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  }
}

export default {
  //namespaced 用意，是引用的时候需要写到模块名称，比如引入这个文件就要使用这个文件的'app'
  // namespaced: true,
  state,
  mutations,
  actions
}
