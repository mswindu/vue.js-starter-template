// See these docs for details on Jest's matcher utils:
// https://facebook.github.io/jest/docs/en/expect.html#thisutils

const _ = require('lodash');

const customMatchers = {};

customMatchers.toBeAComponent = (options) => {
  function isAComponent() {
    return _.isPlainObject(options) && typeof options.render === 'function';
  }

  if (isAComponent()) {
    return {
      message: () => `expected ${this.utils.printReceived(
        options,
      )} not to be a Vue component`,
      pass: true,
    };
  }
  return {
    message: () => `expected ${this.utils.printReceived(
      options,
    )} to be a valid Vue component, exported from a .vue file`,
    pass: false,
  };
};

customMatchers.toBeAVuexModule = (options) => {
  function isAVuexModule() {
    return (
      _.isPlainObject(options)
      && _.isPlainObject(options.state)
      && _.isPlainObject(options.getters)
      && _.isPlainObject(options.mutations)
      && _.isPlainObject(options.actions)
    );
  }

  if (isAVuexModule()) {
    return {
      message: () => `expected ${this.utils.printReceived(options)} not to be a Vuex module`,
      pass: true,
    };
  }
  return {
    message: () => `expected ${this.utils.printReceived(
      options,
    )} to be a valid Vuex module, include state, getters, mutations, and actions`,
    pass: false,
  };
};

// https://facebook.github.io/jest/docs/en/expect.html#expectextendmatchers
global.expect.extend(customMatchers);
