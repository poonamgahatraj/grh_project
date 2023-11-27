<template>
    <h1 class="text-2xl font-bold ">Product families</h1>
  <div class="flex  mt-14">
   <div v-for="item in product_family">
    <div class="mr-10 border-2 border-solid w-24 text-center text-sky-400 font-semibold">
      {{ item.name }}
    </div>
     
   </div>
  </div>


<div class="flex justify-between items-center  mb-12">
  <h1 class="text-2xl font-bold mt-14 ">Product </h1>
  <button class="border-2 border-solid bg-sky-500 text-white h-10 w-28"  @click="redirectToproduct_form" >Add Product</button>
  
</div>
  

  



  
    <div class="flex justify-between ">
      <div v-for="item in product" class="box">
        <div class="flex mt-2 ml-2">
          <div class="mr-4 border-2 border-solid w-16 text-center text-sky-400 font-semibold">{{ item.year }}</div>
          <div class=" border-2 border-solid w-16 text-center text-green-500 font-semibold"> {{ item.name }}</div>
          
        </div>
        <div class="mt-4">
          <img  :src="item.image" style="width:100%;height:200px">
        </div>
      </div>
      

     
    </div>
    
  
  <router-link to="/product_form">product_form</router-link>
</template>

<script>
export default{
    data(){
        return{
           product_family:[{name:"Nest"},
                            {name:"Pixel"},
                            {name:"Fitbit"},
                            {name:"Add Family"}
          ],

          product:[{year:"2021",name:"Nest",image:"public/assets/buds.jpg"},
          {year:"2021",name:"Nest",image:"public/assets/Google-Pixel-6.jpg"},
          {year:"2021",name:"Pixel",image:"public/assets/lenovosmartclock4.jpg"},
          {year:"2021",name:"Fitbit",image:"public/assets/OIP (1).jpg"},
          {year:"2021",name:"Pixel",image:"public/assets/Pixel-6-Pro.webp"},
          {year:"2021",name:"Lenovo",image:"public/assets/R.jpg"},
        ],
        
        images:["public/assets/buds.jpg",
        "public/assets/Google-Pixel-6.jpg",
        "public/assets/lenovosmartclock4.jpg",
        "public/assets/OIP (1).jpg",
        "public/assets/Pixel-6-Pro.webp",
        "public/assets/R.jpg",
        
        

      ]
        }
    },

    methods:{
      redirectToproduct_form(){
            this.$router.push({ path: '/product_form' });
        }
    }
}
</script>

<style>
.box{


  width:15%;
  height:15%;
  border:2px solid#00000029;
  margin-top:5px;
 
 
  
}
.content{
  border:2px solid grey;
  width:20%;
  height:400px;
  display:flex;
  justify-content: space-between;
}


</style>