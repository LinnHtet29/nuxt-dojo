
import type { ProductCard } from '#build/components';
<template>
  <div class="card text-center">
    <img :src="product.image" alt="Product Thumb" class="thumb"/>
    <h3 class="font-bold text-center text-gray-500 truncate">{{ product.title }}</h3>
    <NuxtLink :to="`/products/${product.id}`">
      <button class="btn my-5">View detail</button>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
    display: block;
    max-height: 120px;
    max-width: 70%;
    margin: auto;
}
</style>