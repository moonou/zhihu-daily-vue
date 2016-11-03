const BootPage = r => require.ensure([], () => r(require('pages/BootPage.vue')), 'boot')
const Home = r => require.ensure([], () => r(require('pages/Home.vue')), 'home')
const Play = r => require.ensure([], () => r(require('pages/Play.vue')), 'play')

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
    path: '/play',
    component: Play
  },
  {
    path: '/',
    redirect: '/boot'
  }
]
