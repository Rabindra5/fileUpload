import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import FirstVue from "@/components/FirstVue"
// import BasicTable from "@/components/BasicTable"
// import BasicInfo  from "../components/BasicInfo";
import NewBasicInfo from "../components/NewBasicInfo";
import PhotoTaken from "@/components/PhotoTaken"
import PhotoTakenSecondExample from "@/components/PhotoTakenSecondExample";
import PhotoTakenThirdExample from "@/components/PhotoTakenThirdExample";
import ElintegroMultipleImage from "@/components/ElintegroMultipleImage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PhotoTaken',
      component: PhotoTaken
    },

    {
      path: '/NewBasicInfo',
      name: 'NewBasicInfo',
      component: NewBasicInfo
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

    },
    {
      path:'/PhotoTakenSecondExample',
      name:'PhotoTakenSecondExample',
      component:PhotoTakenSecondExample

    },
    {
      path:'/PhotoTakenThirdExample',
      name:'PhotoTakenThirdExample',
      component:PhotoTakenThirdExample

    },
    {
      path:'/ElintegroMultipleImage',
      name:'ElintegroMultipleImage',
      component:ElintegroMultipleImage

    }
  ]
})
