<template>
   <div id="posts" style="height:100%;width:100%;">
       <b-jumbotron style="min-height:100%;">
           <b-container fluid>
               
               <div class="title-block" style="background-color:goldenrod; text-align:center;margin-bottom:100px;">
                   <h1 style="color:whitesmoke; padding: 20px 0px;font-family: 'Playball', cursive;">Appetite</h1>
                   
               </div>
               

               <div id="form-group">

                   <h2 style="margin: 40px 0px;">Add a new item..</h2>
                   
                  <label for="item-name">Enter item name: </label>
                  <b-form-input v-model="menu.name" type="text" id="item-name" placeholder="item name"></b-form-input>
                   

                   <div style="margin:20px 0px;">
                     <label for="img-form">Upload product image: </label>
                     <input id="img-form" type="file" @change="imgfileload">
                     <img :src="menu.avatar" style="max-height:60px;max-width:90px;" alt="img">
                   </div>
                   
                  <label for="item-description">About the item: </label>
                  <b-textarea type="text" style="min-height:200px;" v-model="menu.description" id="item-description" placeholder="item description"></b-textarea>
                   

                   <div style="display:flex;margin:20px 0px;">
                    <label for="price" >Price-per unit: </label>
                    <b-form-input type="text"  v-model="menu.price"   id="price" placeholder="Enter price"></b-form-input>
                  
                    <b-dropdown size="sm"  style="height:35px;">
                          <b-dropdown-item>Rs.</b-dropdown-item>
                          <b-dropdown-item>$</b-dropdown-item>
                          <b-dropdown-item>Euro</b-dropdown-item>
                      </b-dropdown>
                  </div>

                  <b-btn type="submit" variant="info" @click="post">Submit</b-btn>
                  

               </div>
           </b-container>
       </b-jumbotron>
   </div> 
</template>


<script>
export default {
    data(){
        return{
            menu:{
                name : "",
                description : "",
                price:"",
                avatar:null,
            },
        }
    },

    methods:{
        imgfileload (event) {
            let image = event.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload=event =>{
                this.menu.avatar = event.target.result;
            }
        },

        post(){
            this.$http.post('https://fir-e4595.firebaseio.com/posts.json',this.menu)
            .then( resp => {
                    return resp.json();
                    })
                .then (data => {
                     console.log(data)
                })
                
                
        }
    }
    
}
</script>


<style scoped>

</style>
