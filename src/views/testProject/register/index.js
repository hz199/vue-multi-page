import Vue from 'vue'
import App from './Index.vue'
import '../../common'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
