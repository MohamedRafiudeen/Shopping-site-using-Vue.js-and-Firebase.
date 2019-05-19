<template>
<!--Menu cards-->
    <section id="cards-section" style="height:100%;width:100%;" >  

<!--search bar-->
        <div id="home" style="width:100% auto;">
            <h2 style="font-family: 'Playball', cursive; color:gold;font-size:60px;">Appetite</h2>
                    <span style="font-family: 'Playball', cursive;font-size:40px;color:gold;">select from our menu</span>

                      <b-container id="menu-select-bar" style="display:flex; margin:0px auto;" class="my-4">
                

                          <b-form-input type="text" v-model="search" v-on:keyup="searchedPost" class="sm" placeholder="search menu"></b-form-input>
                          
                          <b-dropdown text="Menu Categories" class="ml-auto">
                            <b-dropdown-header>Category 1</b-dropdown-header>
                            <b-dropdown-item href="#">item 1</b-dropdown-item>
                            <b-dropdown-item>item 2</b-dropdown-item>
                            <b-dropdown-item>item 3</b-dropdown-item>
                            <b-dropdown-item>item 4</b-dropdown-item>

                          <b-dropdown-divider></b-dropdown-divider>

                            <b-dropdown-header>Category 2</b-dropdown-header>
                            <b-dropdown-item>item 1</b-dropdown-item>
                            <b-dropdown-item>item 2</b-dropdown-item>
                            <b-dropdown-item>item 3</b-dropdown-item>
                            <b-dropdown-item>item 4</b-dropdown-item>
                       

                          </b-dropdown>
                    </b-container>
        </div>









<!--CARDS-->
        <div id="cards">
           <b-container fluid style=" height:auto;">
            
             
        <b-row responsive style="max-height:600px auto;display:flex;justify-content:center;">
     <!--col-1-->
        


          <div v-for="( posts, index ) in filteredPost" :key="index" class="card" style="max-width: 20rem;margin:26px 10px;">

              <h1 class="itemtitle" style="font-family: 'Playball', cursive;margin-top:15px;color:black;text-align:center; font-size:32px;">{{posts.name}}</h1>

           <img  style="min-height:220px;max-height:220px; max-width:90%; margin:10px 20px;" :src="posts.avatar">

           <div class="itemdesc" id="card-body" style="max-width:90%;min-height:20px;max-height:50px;background-color:snow;margin:10px 10px;overflow:hidden;">
               <p >{{posts.description | snippet}}</p>

    
           </div>
           
           <div id="card-btn-group" >

               <b-card-text class="price" style="font-weight:600;margin:0px 10px;">Price:{{posts.price}}</b-card-text>

               <b-btn type="submit" variant="info" style="margin:10px 10px;" class="addtocartbtn" @click="addtocart()">Add to Cart..</b-btn>
               <b-btn type="submit" variant="info" style="margin:10px 0px;">Order now</b-btn>

               <b-dropdown text="qty:" size="sm">
                   <b-dropdown-item>1</b-dropdown-item>
               </b-dropdown>
            
            </div>

          </div>
        



<!--col-2-->


            
<!--col-3-->
        

    </b-row>

           

   </b-container>
   </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            posts:[],
            search:"",
            filteredPost: [],
            carts:[],
        }
    },

    created() {
            this.$http.get(`https://fir-e4595.firebaseio.com/posts.json`)
            .then( resp => resp.json() )
            .then( data => {
                Object.keys(data).forEach(key => {
                    this.posts.push(data[key]);

                }); 
                this.filteredPost = this.posts;
            })

            this.$http.post('https://carts-65060.firebaseio.com/carts.json', this.carts)
            .then(resp => resp.json())
            .then(data => console.log(data))
            },
        


    methods:{
        searchedPost(){
           this.filteredPost = this.posts.filter(posts => posts.name.indexOf(this.search) != -1)
    },


          
    addtocart(){


        function getback(allbuttons,button,i,cart){
            return allbuttons;
            return button;
            return i;
            return cart;
        }


        var allbuttons = document.getElementsByClassName('addtocartbtn');

        for(let i=0; i<allbuttons.length; i++){
            var button = allbuttons[i];

            button.addEventListener('click', function(event){
                var clickedbutton = event.target;
                

            //..Get the name of the item added to cart..    
               var carttitle = document.getElementsByTagName("H1")[i].textContent;
                console.log(carttitle);
                
            
            //..Get the image of the item added to cart.. 


            //..Get the price of the item added to cart.. 
               var itemprice = document.getElementsByClassName('price')[i].textContent;
                console.log(itemprice);


            //..cart object population..    
            var cart = function(cartname,cartprice){

                var cartss={};
                    cartss.cartname = cartname;
                    cartss.cartprice = cartprice;

                    cartss.printt = function(){
                        console.log(cartss.cartname + " " + cartss.cartprice);
                    }
                   
                }

                var cartobject = new cart(carttitle,itemprice);
                cartobject.printt();

                console.log(cart);
            })

        }
    },

    //cart(){
      //  this.cartitems.itemname = carttitle;
     ////   this.cartitems.itemrate = itemprice;
       // console.log(this.cartitems);
    //}

}
}
    

</script>


<style scoped>
#cards{
    background-image: url('https://images.all-free-download.com/images/graphicthumb/ethnic_pattern_styles_art_background_vector_581004.jpg') blur(18px);
    background-size: cover;
    background-repeat: no-repeat;
    margin-top:-30px;
}


.card{
    min-height:200px;
    background-color: rgb(255, 253, 240);
}

#card-body{
    text-align: left;
    height: 150px;
    width: 100%;
}


#home{
    background:rgb(148, 90, 14);
    min-height: 260px;
    height: 100% auto;
    text-align: center;
    

}

</style>