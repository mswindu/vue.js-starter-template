import Vue from 'vue';
import Vuex from 'vuex';
import account from './modules/account';
import app from './modules/app';

Vue.use(Vuex);

// https://vuex.vuejs.org/ru/guide/strict.html
const isStrict = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    account,
    app,
  },
  strict: isStrict,
});

export default store;
