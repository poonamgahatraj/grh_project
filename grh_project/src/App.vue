<script setup>
import { RouterLink, RouterView } from 'vue-router'

import product_Info from './components/product_Info.vue';
import product_detail from './components/product_detail.vue';
</script>

<template>
  

<product_detail/>
  <RouterView />
</template>

<style scoped>

</style>
