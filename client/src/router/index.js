import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import FirstVue from "@/components/FirstVue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstVue',
      component: FirstVue
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome
    }
  ]
})
