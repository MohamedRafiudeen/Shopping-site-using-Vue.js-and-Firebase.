import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vueresource from 'vue-resource';
import VueRouter from 'Vue-Router';
import Routes from './components/Routes';



Vue.use(vueresource);
Vue.use(BootstrapVue);
Vue.use(VueRouter);


const router = new VueRouter({
  routes:Routes
})



Vue.filter('snippet', function(value){
  return value.slice(0,60)+"...";
})

Vue.filter('lowercase', function(value){
  return value.toLowerCase();
})

new Vue({
  el: '#app',
  render: h => h(App),
    router: router,
})
