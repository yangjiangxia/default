// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/base.css';
import './css/style.css';
import store from './store'
import public_m from './public_m'
import VueResource from 'vue-resource';
import axios from 'axios';
import $ from 'jquery'


axios.defaults.headers.common['token'] = "f4c902c9ae5a2a9d8f84868ad064e706"


Vue.prototype.$axios = axios


Vue.config.productionTip = false
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(ElementUI);
Vue.use(public_m);
Vue.use(VueResource);
import * as filters from './filters/filter'  /*路由*/

Object.keys(filters).forEach(Key=>{
  Vue.filter(Key,filters[Key])
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store, //重点
    components: {
        App
    },
    template: '<App/>'
})
