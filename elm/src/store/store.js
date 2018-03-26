import Vue from 'vue';
import Vuex from 'vuex';

import index from './modules/index'
import login from './modules/login'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

export default new Vuex.Store({
    modules:{
        index,
        login
    },
    strict:debug
})