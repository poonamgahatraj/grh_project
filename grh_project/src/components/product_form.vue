<template>
    <h1 class=" flex  justify-center mt-10 mb-10 font">Create a Product</h1>
    <div class="border-solid border-2 border-grey-600 flex  justify-center items-center ">
<div class="w-3/5  mt-24  ">
    <form class="w-full  ">
        <label class="font-semibold font-size">Product name</label><br><br>
        <input class="w-full font-size1" type="text" placeholder="Pixel 6 Pro"><br><br>
        <hr>
        <br>
        <label class="font-semibold font-size">Product family name</label><br><br>
        <input class="w-full  font-size1"  type="text" placeholder="Pixel"><br><br>
        
        <hr><br>
        <label class="font-semibold font-size">Select product from Inventory</label><br><br>
       <button class="bg-sky-500 text-gray-50 w-24 h-10 rounded">Select</button><br><br>
        <hr><br>
        <label class="font-semibold font-size">Year product released</label><br><br>
        <input class="w-full  font-size1"  type="text" placeholder="Enter the year product released here"><br><br>
        <hr><br>
        <label class="font-semibold font-size">Type of Product</label><br><br>
        <input class="w-full  font-size1"  type="text" placeholder="Choose the type of product"><br><br>
        <hr><br>
        <label class="font-semibold font-size">Dimensions of the Product (mm)</label><br><br>
        <div class="flex justify-between  font-size1">
            <p>Height</p>
            <p>Width</p>
            <p>Length</p>
        </div>
        <hr><br>
        <label class="font-semibold font-size">Images of product (Visual)</label><br><br>
        <div class="flex justify-between font-size2">
            <p>File_name_of_imgage.png </p>
            <p>3.4 mb</p>
        </div><br>

        <div class="border-dashed border-2 border-grey-600 h-20">
            <p class="text-center mt-10 font-size2">Drag and drop a .png image here or click</p>
        </div><br>
        <hr><br>

        <label class="font-semibold font-size">Top view Images of product (For Planograms) </label><br><br>
        <div class="flex justify-between font-size2">
            <p>File name of img of png </p>
            <p>3.4 mb</p>
        </div><br>

        <div class="border-dashed border-2 border-grey-600 h-20">
            <p class="text-center mt-10 font-size2">Drag and drop a .png image here or click</p>
        </div><br>

        <label class="font-semibold font-size">Upload any installation/removal instructional briefs</label><br><br>

        <div class="flex justify-between font-size2">
            <p>Removal_brief.pdf </p>
            <p>3.4 mb</p>
        </div><br>

        <div class="flex justify-between font-size2">
            <p>Install_brief.pdf </p>
            <p>3.4 mb</p>
        </div><br>

        <div class="border-dashed border-2 border-grey-600 h-20 font-size2">
            <p class="text-center mt-10 ">Drag and drop a .png image here or click</p>
        </div><br>

        <label class="font-semibold font-size">Input the tools required to activate this fixture (1 item per line)</label><br><br>
        <button class="border solid border-2 border-grey-600 w-20">+ ADD</button><br><br>
        <label class="font-semibold font-size">Upload print dielines for fixture</label><br><br>
        <div class="border-solid border-2 border-grey-600 h-12">
            <p>Input #1 DieLine Name</p>
        </div><br>
        <label class="font-semibold font-size">Size of dieline</label><br><br>
        <div class="flex justify-between  font-size1">
            <p>_____________Width</p>
            <p>_____________Height</p>
        </div><br>
        <label class="font-semibold font-size">PDF for dieline</label><br><br>
        <div class="flex justify-between font-size2">
            <p>Dieline.pdf </p>
            <p>3.4 mb</p>
        </div><br>
        <div class="border-dashed border-2 border-grey-600 h-20">
            <p class="text-center mt-10 font-size2 ">Drag and drop a .png image here or click</p>
        </div><br>

        <p class="text-stone-500">View Less ^ </p>






    </form>
   
</div>




</div>



<div class="ml-20 mr-20 ">
<div class="flex  ">
<div class="mr-14">
    <ul>
        <li class=" mb-10 font ">Retail Hub</li>
        <li class="font-size1">Planograms</li>
        <li class="font-size1">Market view</li>
        <li class="font-size1">Prototyping</li>
        <li class="font-size1">Warehouse inventory</li>
    </ul>
</div>
<div class="mr-14">
    <ul>
        <li class="mt-16 font-size1">Briefing</li>
        <li class="font-size1">Cost assumptions</li>
        <li class="font-size1">Configurations</li>
        <li class="font-size1">Users</li>
        
    </ul>
</div>
<div class="mr-14">
    <ul>
        <li class="font-bold mb-10 font">Support</li>
        <li class="font-size1">My account</li>
        <li class="font-size1">Notifications</li>
        <li class="font-size1">Send feedback</li>
        
    </ul>
</div>
<div>
    <ul>
        <li class="font-bold mb-10 font">Available Regions</li>
        <li class="font-size1">Australia</li>
        
        
    </ul>
</div>

</div>
<br>
<hr><br>
<div class="flex justify-between">
    <div class="flex justify-center items-center">
        <p class="mr-10 text-2xl font-bold">Google</p>
        <p class="mr-10">About Google</p>
        <p class="mr-10">Privacy policy</p>
        <p class="mr-10">Terms of service</p>
        <p>Cookies</p>
    </div>
    <div class="flex">
        <p class="mr-10">Developed by</p>
        <p> BOOSOFT</p>
    </div>
</div>
</div>


<!-- {{ store.productdata }} -->
</template>

<script>
import {useProductStore} from '../store/product';

export default{
    data(){
        return{
            store:""
        }
    },
    mounted(){
        this.store=useProductStore();
        this.loadProducts();
    },

    methods:{
        async loadProducts(){
            await this.store.loadProductData()
        }
       
    }
}
</script>

<style>
.font{
    font-size: 25px;
    font-weight: 500;
}

.font-size{
    font-size: 18px;
    color:#5F6368;
}

.font-size1{
    font-size:20px;
    color:#5F6368
}

.font-size2{
    font-size:12px;
}
</style>