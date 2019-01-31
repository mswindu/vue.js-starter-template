import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import 'vuetify/src/stylus/app.styl';

import ru from 'vuetify/es5/locale/ru';
import store from './store';
import router from './router';
import App from './App';

Vue.use(Vuetify, {
  theme: {
    primary: '#343c48',
    secondary: '#448aff',
    accent: '#82B1FF',
    error: '#d62c41',
    info: '#2196F3',
    success: '#61b703',
    warning: '#ff8f00',
  },
  lang: {
    locales: { ru },
    current: 'ru',
  },
});

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  router,
  render: a => a(App),
});
