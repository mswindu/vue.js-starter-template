# Vue.js starter template
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

Starter-template for a project using [Vue.js](https://github.com/vuejs/vue) library.

Built with:
* [Vue.js](https://github.com/vuejs/vue)
* [Vue Router](https://github.com/vuejs/vue-router)
* [Vuex](https://github.com/vuejs/vuex)
* [Vue-cli](https://github.com/vuejs/vue-cli)
* [Axios](https://github.com/mzabriskie/axios)
* [ESLint](http://eslint.org/)
* [Vuetify](https://github.com/vuetifyjs/vuetify)
* [Yarn](https://yarnpkg.com/en/docs/install)
* ...and many more

## Getting started

1. Be sure you have [Yarn](https://yarnpkg.com/en/docs/install) installed globally.
2. Clone the repo & run `yarn` from the project root.

## Directory structure

See [instructions](docs/directory-structure.md)

## Available commands

```sh
yarn start
```

Command starts a dev server (based on webpack-dev-server) that comes with Hot-Module-Replacement (HMR) working out of the box.

In addition to the command line flags, you can also configure the dev server using the devServer field in `vue.config.js`

```sh
yarn lint
```

Lints and fixes files. If no specific files are given, it lints all files in src and test.

```sh
yarn build
```

Produces a production-ready bundle in the dist/ directory, with minification for JS/CSS/HTML and auto vendor chunk splitting for better caching. The chunk manifest is inlined into the HTML.

```sh
yarn test:unit
```

Run unit tests with Jest.

## License

[MIT](https://github.com/mswindu/vue.js-starter-template/blob/master/LICENSE)
