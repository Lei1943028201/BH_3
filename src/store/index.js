import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//用户信息
import user from './modules/user'

// 权限控制
import permission from './modules/permission'

// 申请担保
import applyPreservation from './modules/applyPreservation'

// 申请保全
import applyGuarantee from './modules/applyGuarantee'


export default new Vuex.Store({
    modules: {
        user,
        permission,
        applyPreservation,
        applyGuarantee
    }
});

