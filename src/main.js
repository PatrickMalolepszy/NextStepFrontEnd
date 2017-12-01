import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
