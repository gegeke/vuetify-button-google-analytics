import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'UA-1234567-1' }
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
