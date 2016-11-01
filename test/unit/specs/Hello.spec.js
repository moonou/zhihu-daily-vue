import Vue from 'vue'
import Test from 'src/components/Test'
import Hello from 'src/components/Hello'
import store from 'src/store'

describe('Test.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Test)
    })
    expect(vm.$el.querySelector('h2').textContent)
      .to.equal('H2')
  })
})

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      store,
      render: (h) => h(Hello)
    })
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal(store.state.hello.text)
  })
})
