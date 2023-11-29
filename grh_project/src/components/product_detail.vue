<template>
  <div  class="p-10">

  
    <p class="text-4xl font-semibold colors ">Product families</p>
  <div class="flex  mt-14">
   <div v-for="item in product_family">
    <div class="mr-10 border-2 border-slate-50 w-40 h-14 text-center  text-lg font-semibold flex justify-center items-center color ">
      {{ item.name }}
    </div>
     
   </div>
  </div>


<div class="flex justify-between items-center   mb-12 mt-14">
  <h1 class="text-4xl font-semibold colors ">Product </h1>
  <button class="border-2 border-solid bg-sky-500 text-white h-10 w-28"  @click="redirectToproduct_form" >Add Product</button>
  
</div>
  

  



  
    <div class="flex justify-between ">
      <div v-for="item in product" class="box">
        <div class="flex mt-2 ml-2">
          <div class="mr-4 border-2 border-slate-50 w-16 text-center text-sky-400 font-semibold bg-slate-50 color">{{ item.year }}</div>
          <div class=" border-2 border-slate-50 w-16 text-center text-green-500 font-semibold bg-slate-50 color1"> {{ item.name }}</div>
          
        </div>
        <div class="mt-4">
          <img  :src="item.image" style="width:100%;height:160px">
        </div>
      </div>
      

     
    </div>

    <div class="flex justify-between ">
      <div  v-for="item in product_detail" class="box1" >
       <p class="font-medium google-grey">{{ item.product }}</p> 
        <p class="text-sky-400 font-semibold text-sm mt-2">{{ item.view }}</p>
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

          product:[{year:"2021",name:"Nest",image:"public/assets/41l2uNYoNHL._SL500_.jpg"},
          {year:"2021",name:"Nest",image:"public/assets/nest cam.jpg"},
          {year:"2021",name:"Pixel",image:"public/assets/budspro.jpg"},
          {year:"2021",name:"Fitbit",image:"public/assets/OIP (1).jpg"},
          {year:"2021",name:"Pixel",image:"public/assets/promax.jpg"},
          {year:"2021",name:"Lenovo",image:"public/assets/lenovoclock.webp"},
        ],
        
        product_detail:[{product:"Nest Hub Max",view:"view more >"},
        {product:"Nest Cam",view:"view more >"},
        {product:"Pixel Buds Pro",view:"view more >"},
        {product:"Fitbit Charge 5",view:"view more >"},
        {product:"Pixel 6 Pro",view:"view more >"},
        {product:"Lenovo Clock",view:"view more >"},
      
      
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


  width:16%;
  height:15%;
  border:1px solid#5F63681A;
  margin-top:5px;
  border-radius:3px;
 
 
  
}
.content{
  border:2px solid grey;
  width:20%;
  height:400px;
  display:flex;
  justify-content: space-between;

}

.google-grey{
  color:#5F6368
}

.box1{
width:15%;
margin-top:5px;
}

.color{
  background:#4285F40D;
  color:#4285F4;
  
}
.colors{
  color:#5F6368
}
.color1{
  color:#0F9D58
}

</style>