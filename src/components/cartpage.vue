<template>
    <div id="posts" style="height:100%;width:100%;">
       
           <b-container fluid>
               
               <div class="title-block" style="background-color:grey; text-align:center;margin-bottom:100px;">
                   
                   <h1 style="text-decoration:underline;font-size:30px;color:goldenrod; padding: 00px 30px;font-family: 'Playball', cursive;font-size:40px;">Cart</h1>

               </div>
           </b-container>
      

           <div v-for="( cartitems, index ) in cartitems" :key="index" style="min-height:300px;width:100%;">
               <article style="background-color:lightgrey;min-height:200px">
                   <h1>{{cartitems.cartname}}</h1>
                   <img src="">
                   <p>{{cartitems.cartprice}}</p>
               </article>
           </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            cartitems:[],
        }
    },

    created(){
        this.$http.get(`https://carts-65060.firebaseio.com/carts.json`, this.carts)
        .then(resp => resp.json())
        .then( data => {
             Object.keys(data).forEach(key => {
                this.cartitems.push(data[key])
            })
    })

}
}
</script>


<style scoped>
body,html{
    background-color: rgb(138, 138, 71)
}
 
</style>
