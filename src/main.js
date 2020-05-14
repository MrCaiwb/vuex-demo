import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vant from 'vant'
import { Toast } from 'vant'
import 'vant/lib/index.css'
import 'swiper/css/swiper.css'

Vue.use(Vant)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (store.state.userInfo || to.path === '/home') {
    next()
  } else {
    Toast('未登录')
    next('/home')
  }
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
