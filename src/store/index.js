import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import user from './modules/user'
import money from './modules/money'

export default new Vuex.Store({
    modules: {
        user,
        money
    }
});

