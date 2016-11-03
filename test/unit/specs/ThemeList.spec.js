import Vue from 'vue'
import store from 'src/store'
import ThemeList from 'components/ThemeList'

describe('ThemeList Component', function () {
  this.timeout(4000)
  const vm = new Vue({
    el: document.createElement('div'),
    store,
    render: h => h(ThemeList)
  })
  it('should have data', function (done) {
    setTimeout(() => {
      expect(store.state.theme.data.others).to.be.ok
      describe('Element for ThemeList', () => {
        it('should have li tag', () => {
          expect(vm.$el.querySelectorAll('ul li')).have.length(store.state.theme.data.others.length)
        })
      })
      done()
    }, 3000)
  })
})
