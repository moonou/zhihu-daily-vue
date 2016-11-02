// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer+'/#/boot')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.start_image')
      .waitForElementVisible('.start_image img', 5000)
      .assert.elementCount('img', 1)
      .end()
  }
}
