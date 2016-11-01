const Hello = r => require.ensure([], () => r(require('components/Hello.vue')), 'hello')
const BootPage = r => require.ensure([], () => r(require('src/pages/BootPage.vue')), 'boot')

export default [
  {
    path: '/hello',
    component: Hello
  },
  {
    path: '/boot',
    component: BootPage
  },
  {
    path: '/',
    redirect: '/boot'
  }
]
