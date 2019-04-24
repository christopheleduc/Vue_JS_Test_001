
// Vue.config.devtools = true

new Vue({
    el: '#app',
    data: {
      message: 'My first code in Vue.js!'
    }
  })

  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
  })

  new Vue({
    el: '#app-3',
    data: {
      value_test: ''
    }
  })

  new Vue({
    el: '#app-4',
    data: {
      active: false
    }
  })

  new Vue({
    el: '#app-5',
    data: {
      show: false,
    }
  })