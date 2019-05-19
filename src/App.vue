<template>
  <div id="app">
    
    <app-nav></app-nav>
    <router-view></router-view>
    
  </div>
    
</template>

<script>

import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import AddMenu from './components/AddMenu.vue'
import cartpage from './components/cartpage.vue'

export default {
  
  data () {
    return {
      cartitems:[],
    }
  },

  components:{
    'app-nav':Nav,
    'app-home':Home,
    'app-menu':Menu,
    'app-addmenu':AddMenu,
    'cartpage':cartpage,
  }

}
</script>

<style>

body{
  height: 100%;
  width: 100%;
  position:absolute;
  background-color: rgb(221, 200, 80);

}

#app{
  height:100%;
}

</style>

