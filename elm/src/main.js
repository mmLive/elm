// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import $ from 'jquery'

// 引入vuex文件配置
import store from './store/store'

// 引入Element-ui 插件 字体图标
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入ydui 插件  参见 http://vue.ydui.org/
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'


Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(YDUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  components: { App },
  template: '<App/>'
})
