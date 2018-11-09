import Vue from 'vue'
import router from './router'

new Vue({
  router,
  render: h => h({ template: '<router-view></router-view>' })
}).$mount('#app')
