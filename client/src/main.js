import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/bootstrap.css'
import './assets/css/grails.css'
import './assets/css/main.css'
import vuetify from './plugins/vuetify';
import wrap from '@vue/web-component-wrapper';
import ElintegroMultipleImage from './components/ElintegroMultipleImage';
const CustomElement = wrap(Vue, ElintegroMultipleImage);

window.customElements.define('v-camera', CustomElement);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>'
})
