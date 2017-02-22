const BootPage = r => {
  NProgress.start()
  require.ensure([], () => {
    NProgress.done()
    r(require('pages/BootPage.vue'))
  }, 'boot')
}
const Home = r => {
  NProgress.start()
  require.ensure([], () => {
    NProgress.done()
    r(require('pages/Home.vue'))
  }, 'home')
}
const Theme = r => {
  NProgress.start()
  require.ensure([], () => {
    NProgress.done()
    r(require('pages/Theme.vue'))
  }, 'theme')
}
const Content = r => {
  NProgress.start()
  require.ensure([], () => {
    NProgress.done()
    r(require('pages/Content.vue'))
  }, 'content')
}
const Play = r => require.ensure([], () => r(require('pages/Play.vue')), 'play')

export default [
  {
    path: '/home',
    component: Home,
    name: 'home'
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
    path: '/theme/:id',
    component: Theme,
    name: 'theme'
  },
  {
    path: '/content/:id',
    component: Content,
    name: 'content'
  },
  {
    path: '/',
    redirect: '/home'
  }
]
