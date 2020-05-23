import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import index from './views/index.vue'
Vue.config.productionTip = false
axios.defaults.baseURL='http://123.56.129.178:8090';

axios.defaults.withCredentials= true;
Vue.prototype.$axios=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
