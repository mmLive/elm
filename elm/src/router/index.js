import Vue from 'vue'
import Router from 'vue-router'
import Vhome from '@/components/Vhome'
import Vdiscover from '@/components/Vdiscover'
import Vorder from '@/components/Vorder'
import Vprofile from '@/components/Vprofile'
import Ventry from '@/components/Vcommon/Ventry'
import Vapp from '@/components/Vapp'

import Vlogin from '@/components/Vcommon/Vlogin'
import Vregister from '@/components/Vcommon/Vregister'

import VshopInfo from '@/components/Vcommon/VshopInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Vapp',
      component: Vapp,
      children: [
                {
                  path: '',
                  name: 'Vhome',
                  component: Vhome
                },
                {
                  path: 'msite',
                  name: 'Vhome',
                  component: Vhome
                },
                {
                  path: 'discover',
                  name: 'Vdiscover',
                  component: Vdiscover
                },
                {
                  path: 'order',
                  name: 'Vorder',
                  component: Vorder
                },
                {
                  path: 'profile',
                  name: 'Vprofile',
                  component: Vprofile
                }
      ]
    },
  
    // 登录注册
    {
      path: '/login',
      name: 'Ventry',
      component: Ventry,
      children:[
        {
          path: '',
          name: 'Vlogin',
          component: Vlogin
        },
          {
            path: '/register',
            name: 'Vregister',
            component: Vregister
          }
      ]
    },
    // 商家详情
    {
      path:'/shopInfo/:id',
      name:'VshopInfo',
      component:VshopInfo
    }
  ]
})
 