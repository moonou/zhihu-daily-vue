const BootPage = r => require.ensure([], () => r(require('pages/BootPage.vue')), 'boot')
const Home = r => require.ensure([], () => r(require('pages/Home.vue')), 'home')

export default [
  {
    path: '/home',
    component: Home
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
