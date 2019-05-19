import AddMenu from './AddMenu.vue';
import Menu from './Menu.vue';
import Home from './Home.vue';
import cartpage from './cartpage.vue';


export default[
    {path:'/', component: Home},
    {path:'/add', component: AddMenu},
    {path:'/Menu', component: Menu},
    {path:'/cart', component: cartpage},
]