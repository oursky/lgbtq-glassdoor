// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import App from './App'

// import skygear from 'skygear'
// import AuthPage from './components/AuthPage'
// import MainPage from './components/MainPage'
 import LandingPage from './components/LandingPage'
// import FooterSection from './components/Footer'

import CompanyListPage from './components/CompanyListPage'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const routes = [
  { name: "list", path: '/list', component: CompanyListPage },
  { name: "home", path: '/', component: LandingPage }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

// const app = new Vue({
// }).$mount('#app')

/* eslint-disable no-new */
new Vue({
  router: router,
  el: '#app',
  components: {App},
  template: '<App/>'
})
