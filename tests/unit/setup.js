import Vue from 'vue';

// https://vue-test-utils.vuejs.org/
import vueTestUtils from '@vue/test-utils';

// ===
// Конфигурация Vue
// ===

Vue.config.productionTip = false;

// ===
// Global helpers
// ===

// https://vue-test-utils.vuejs.org/api/#mount
global.mount = vueTestUtils.mount;

// https://vue-test-utils.vuejs.org/api/#shallowmount
global.shallowMount = vueTestUtils.shallowMount;
