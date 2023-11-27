<template>
    <h1 class="text-2xl font-bold ">Product families</h1>
  <div class="flex  mt-14">
   <div v-for="item in product_family">
    <div class="mr-10 border-2 border-solid w-24 text-center text-sky-400 font-semibold">
      {{ item.name }}
    </div>
     
   </div>
  </div>


<div class="flex justify-between items-center">
  <h1 class="text-2xl font-bold mt-14 ">Product </h1>
  <button class="border-2 border-solid"  @click="redirectToshipment" >Add Product</button>
  
</div>
  

  



  
    <div class="flex justify-between ">
      <div v-for="item in product" class="box">
        <div class="flex">
          <div class="mr-4 border-2 border-solid w-16 text-center text-sky-400 font-semibold">{{ item.year }}</div>
          <div class=" border-2 border-solid w-16 text-center text-green-500 font-semibold"> {{ item.name }}</div>
        </div>
        
      </div>
      

     
    </div>
    <div class="flex">
    <img  v-for="(item, index) in images" :src="item" :key="index" style="width:15%; height:20%">
  </div>
  
  <router-link to="/product_Info">product_Info</router-link>
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

          product:[{year:"2021",name:"Nest"},
          {year:"2021",name:"Nest"},
          {year:"2021",name:"Pixel"},
          {year:"2021",name:"Fitbit"},
          {year:"2021",name:"Pixel"},
          {year:"2021",name:"Lenovo"},
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
      redirectToshipment(){
            this.$router.push({ path: '/product_Info' });
        }
    }
}
</script>

<style>
.box{


  width:15%;
  height:15%;
  border:1px solid black;
 
 
  
}
.content{
  border:2px solid black;
  width:20%;
  height:200px;
  display:flex;
  justify-content: space-between;
}


</style>