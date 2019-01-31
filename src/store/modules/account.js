const accountStore = JSON.parse(localStorage.getItem('accountStore'));

const state = accountStore
  || {
    status: null,
    user: {
      sessionId: null,
    },
  };

const getters = {
  status: state => state.status,
  sessionId: state => state.user.sessionId,
};

const actions = {
  login({ commit }, user) {
    commit('loginSuccess', user);
  },
  logout({ commit }) {
    commit('logout');
  },
};

const mutations = {
  loginRequest(state) {
    state.status = 'loggingIn';
  },
  loginSuccess(state, user) {
    state.status = 'loggedIn';
    state.user = user;
    localStorage.setItem('accountStore', JSON.stringify(state));
  },
  logout(state) {
    state.status = null;
    state.user.sessionId = null;
    localStorage.removeItem('accountStore');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
