const Hello = r => require.ensure([], () => r(require('components/Hello.vue')), 'hello')

export default [
  {
    path: '/',
    component: Hello
  }
]
