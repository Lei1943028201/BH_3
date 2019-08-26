// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'

import ElementUI from 'element-ui'
import './style/theme/index.css'

Vue.use(ElementUI, {size: 'big'});

Vue.config.productionTip = false

//import './mockjs'  //引用mock
import '@/permission' // permission control

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})

// 测试git
// 测试git
// 新冲突 --master
