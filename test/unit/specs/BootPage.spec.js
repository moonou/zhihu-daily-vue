import Vue from 'vue'
import BootPage from 'pages/BootPage'
import store from 'src/store'

describe('BootPage', function () {
  this.timeout(4000)
  const vm = new Vue({
    el: document.createElement('div'),
    store,
    render: (h) => h(BootPage)
  })
  it('should have value when fetch data', function (done) {
    setTimeout(() => {
      expect(store.state.bootimage).to.be.ok
      describe('Element value', () => {
        it('should have image', () => {
          expect(vm.$el.querySelector('.start_image img')).to.be.ok
        })
        it('should have another', () => {
          expect(vm.$el.querySelector('.start_image .text')).to.be.ok
        })
        it('should have a true another', () => {
          expect(vm.$el.querySelector('.start_image .text').textContent).to.equal('图片来源：' + store.state.bootimage.text)
        })
      })
      done()
    }, 3000)
  })
})
