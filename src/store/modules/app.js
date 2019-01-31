const state = {
  sidebar: {
    opened: false,
  },
};

const getters = {
  sidebar: state => state.sidebar,
};

const actions = {
  drawerSidebar({ commit }, playload) {
    commit('drawerSidebar', playload);
  },
  toggleSidebar({ commit }) {
    commit('toggleSidebar');
  },
};

const mutations = {
  drawerSidebar(state, playload) {
    state.sidebar.opened = playload;
  },
  toggleSidebar(state) {
    state.sidebar.opened = !state.sidebar.opened;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
