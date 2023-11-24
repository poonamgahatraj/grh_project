<template>
    <h1 class="text-4xl flex justify-center">Create a Product</h1>
    <div class="border-solid border-2 border-grey-600 ">
<div class="w-3/5 flex justify-center items-center mt-24 border-solid border-2 border-black-900 content-center ">
    <form class="w-full  ">
        <label class="font-semibold">Product name</label><br><br>
        <input class="w-full" type="text" placeholder="Pixel 6 Pro"><br><br>
        <hr>
        <br>
        <label class="font-semibold">Product family name</label><br><br>
        <input class="w-full"  type="text" placeholder="Pixel"><br><br>
        
        <hr><br>
        <label class="font-semibold">Select product from Inventory</label><br><br>
       <button class="bg-sky-500 text-gray-50 w-24 rounded">Select</button><br><br>
        <hr>
        <label class="font-semibold">Year Product Released</label><br><br>
        <input class="w-full"  type="text" placeholder="Enter the year product released here"><br><br>
        <hr>
        <label class="font-semibold">Type of Product</label><br><br>
        <input class="w-full"  type="text" placeholder="Choose the type of product"><br><br>
        <hr>
        <label class="font-semibold">Dimensions of Product (mm)</label><br><br>
        <div class="flex justify-between">
            <p>Height</p>
            <p>Width</p>
            <p>Length</p>
        </div>
        <hr><br>
        <label class="font-semibold">Images of product (Visual)</label><br><br>
        <div class="flex justify-between">
            <p>File name of img of png </p>
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

        <p>View Less </p>






    </form>
   
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