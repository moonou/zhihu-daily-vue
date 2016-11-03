import Vue from 'vue'
import store from 'src/store'
import NewsList from 'components/NewsList'

describe('NewsList Component', function () {
  this.timeout(4000)
  const vm = new Vue({
    el: document.createElement('div'),
    store,
    render: h => h(NewsList)
  })
  it('fetch some data', function (done) {
    setTimeout(() => {
      expect(store.state.news.news[0].stories.length > 0).to.be.ok
      describe('NewsList Data', function () {
        it('should have list', () => {
          expect(vm.$el.querySelectorAll('.newslist li')).have.length(store.state.news.news[0].stories.length + 1)// have a date
        })
      })
      done()
    }, 3000)
  })
})
