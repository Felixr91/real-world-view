import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'

// Global Components get registered here
Vue.component('BaseIcon', BaseIcon)
Vue.component('BaseButton', BaseButton)
Vue.component('BaseInput', BaseInput)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
