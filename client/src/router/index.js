import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import FirstVue from "@/components/FirstVue"
import BasicTable from "@/components/BasicTable"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BasicTable',
      component: BasicTable
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path:'/FirstVue',
      name:'FirstVue',
      component:FirstVue

    }
  ]
})
