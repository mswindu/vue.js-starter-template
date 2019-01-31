// Lazy loading
function loadPage(page) {
  return () => import(/* webpackChunkName: "page-[request]" */ `@/pages/${page}.vue`);
}

const paths = [
  {
    path: '/',
    meta: { },
    name: 'Root',
    redirect: {
      name: 'HelloWorld',
    },
  },
  {
    path: '/hello_world',
    meta: { },
    name: 'HelloWorld',
    component: loadPage('HelloWorld'),
  },
  {
    path: '*',
    meta: {
      public: true,
    },
    name: 'NotFound',
    component: loadPage('NotFound'),
  },
];

export default paths;
