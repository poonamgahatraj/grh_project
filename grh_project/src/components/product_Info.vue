<template>
    <h1 class="text-4xl flex  justify-center">Create a Product</h1>
    <div class="border-solid border-2 border-grey-600 flex  justify-center items-center ">
<div class="w-3/5  mt-24  ">
    <form class="w-full  ">
        <label class="font-semibold">Product name</label><br><br>
        <input class="w-full" type="text" placeholder="Pixel 6 Pro"><br><br>
        <hr>
        <br>
        <label class="font-semibold">Product family name</label><br><br>
        <input class="w-full"  type="text" placeholder="Pixel"><br><br>
        
        <hr><br>
        <label class="font-semibold">Select product from Inventory</label><br><br>
       <button class="bg-sky-500 text-gray-50 w-24 h-10 rounded">Select</button><br><br>
        <hr><br>
        <label class="font-semibold">Year product released</label><br><br>
        <input class="w-full"  type="text" placeholder="Enter the year product released here"><br><br>
        <hr><br>
        <label class="font-semibold">Type of Product</label><br><br>
        <input class="w-full"  type="text" placeholder="Choose the type of product"><br><br>
        <hr><br>
        <label class="font-semibold">Dimensions of the Product (mm)</label><br><br>
        <div class="flex justify-between">
            <p>Height</p>
            <p>Width</p>
            <p>Length</p>
        </div>
        <hr><br>
        <label class="font-semibold">Images of product (Visual)</label><br><br>
        <div class="flex justify-between">
            <p>File_name_of_imgage.png </p>
            <p>3.4 mb</p>
        </div><br>

        <div class="border-dashed border-2 border-grey-600 h-20">
            <p class="text-center mt-10 ">Drag and drop a .png image here or click</p>
        </div><br>
        <hr><br>

        <label class="font-semibold">Top view Images of product (For Planograms) </label><br><br>
        <div class="flex justify-between">
            <p>File name of img of png </p>
            <p>3.4 mb</p>
        </div><br>

        <div class="border-dashed border-2 border-grey-600 h-20">
            <p class="text-center mt-10 ">Drag and drop a .png image here or click</p>
        </div><br>

        <label class="font-semibold">Upload any installation/removal instructional briefs</label><br><br>

        <div class="flex justify-between">
            <p>Removal_brief.pdf </p>
            <p>3.4 mb</p>
        </div><br>

        <div class="flex justify-between">
            <p>Install_brief.pdf </p>
            <p>3.4 mb</p>
        </div><br>

        <div class="border-dashed border-2 border-grey-600 h-20">
            <p class="text-center mt-10 ">Drag and drop a .png image here or click</p>
        </div><br>

        <label class="font-semibold">Input the tools required to activate this fixture (1 item per line)</label><br><br>
        <button class="border solid border-2 border-grey-600 w-20">+ ADD</button><br><br>
        <label class="font-semibold">Upload print dielines for fixture</label><br><br>
        <div class="border-solid border-2 border-grey-600 h-12">
            <p>Input #1 DieLine Name</p>
        </div><br>
        <label class="font-semibold">Size of dieline</label><br><br>
        <div class="flex justify-between">
            <p>_____________Width</p>
            <p>_____________Height</p>
        </div><br>
        <label class="font-semibold">PDF for dieline</label><br><br>
        <div class="flex justify-between">
            <p>Dieline.pdf </p>
            <p>3.4 mb</p>
        </div><br>
        <div class="border-dashed border-2 border-grey-600 h-20">
            <p class="text-center mt-10 ">Drag and drop a .png image here or click</p>
        </div><br>

        <p class="text-stone-500">View Less ^ </p>






    </form>
   
</div>




</div>



<div class="ml-20 mr-20 ">
<div class="flex  ">
<div class="mr-12">
    <ul>
        <li class="font-bold mb-10 ">Retail Hub</li>
        <li>Planograms</li>
        <li>Market view</li>
        <li>Prototyping</li>
        <li>Warehouse inventory</li>
    </ul>
</div>
<div class="mr-12">
    <ul>
        <li class="mt-16">Briefing</li>
        <li>Cost assumptions</li>
        <li>Configurations</li>
        <li>Users</li>
        
    </ul>
</div>
<div class="mr-12">
    <ul>
        <li class="font-bold mb-10">Support</li>
        <li>My account</li>
        <li>Notifications</li>
        <li>Send feedback</li>
        
    </ul>
</div>
<div>
    <ul>
        <li class="font-bold mb-10">Available Regions</li>
        <li>Australia</li>
        
        
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