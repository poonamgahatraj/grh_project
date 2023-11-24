// store.js
import { defineStore } from 'pinia'
export  const useProductStore = defineStore('product', {

    state: () => ({
        Product_Location: [
            {
                Product_ID: 1,
                location: ["A 66-c"],
            },
            {
                Product_ID: 2,
                location: ["A 6-c", "D 6-c"],
            },
        ],
        header: [
            {
              value: 'client_name',
              display: 'Client Name',
              sortable: true,
            },
            {
              value: 'product_name',
              display: 'Product Name',
              sortable: true,
            //   is_custom: true,
            },
            {
              value: 'product_id',
              display: 'Product ID',
              sortable: true,
            //   is_custom: true,
            },
            {
              value: 'stock_level',
              display: 'Stock level',
              sortable: true,
            //   is_custom: true
            },
            {
              value: 'product_category',
              display: 'Product Category',
              sortable: true,
              is_custom: true,
            },
            {
              value: 'product_location',
              display: 'Product location',
              sortable: true,
            },
            {
              value: 'BOOHub_SKU',
              display: 'BOOHub SKU',
              sortable: true,
            },
            {
              value: 'client_SKU',
              display: 'Client SKU',
              sortable: true,
            },
            {
              value: 'client_visibility',
              display: 'Client Visibility',
              sortable: false,
              is_custom: true,
            },
          ],
          
        productdata: [
            {
                Clients_name: "Chromebook",
                Product_Name: "apple",
                Product_ID: 1,
                Stock_Level: 15,
                Product_Category: "Mobile",
                BOOHUB_SKU: "Ch-000-8899",
                Client_SKU: "Ch-000-8899",
                Client_visibility: "Client visibility",
            },
            {
                Clients_name: "Chromebook",
                Product_Name: "crome test Product Name",
                Product_ID: 2,
                Stock_Level: 15,
                Product_Category: "Mobile",

                BOOHUB_SKU: "Ch-000-8899",
                Client_SKU: "Ch-000-8899",
                Client_visibility: "Client visibility",
            },
        ],
    }),
    getters: {
        // doubleCount: (state) => state.count * 2,
        getProductLocation: (state) => state.Product_Location,
        getproductDataRows: (state) => state.productdata,
        getproductdata(state){
          return state.productdata; 
        },
        getheader(state){
        return state.header;
        },
    },
    actions: {
        loadProductData(){
            this.productdata = [
                {
                    client_name:'Chromebook',
                    product_name:'JBL Flip Essential Portable Bluetooth Speaker',
                    product_id:1,
                    stock_level:15,
                    product_category:'Speaker',
                    product_location:["A 66-c"],
                    BOOHub_SKU:'CHR-CLU-JBL-10001',
                    client_SKU:'CHR-CLU-JBL-10001',
                    client_visibility:false,
                },
                {
                    client_name:'Chromebook',
                    product_name:'Google Chromecast',
                    product_id:2,
                    stock_level:15,
                    product_category:'Mobile',
                    product_location:["A 6-c", "D 6-c"],
                    BOOHub_SKU:'CHR-CLU-JBL-10001',
                    client_SKU:'CHR-CLU-JBL-10001',
                    client_visibility:false,
                },
            ]
        }
    },
})