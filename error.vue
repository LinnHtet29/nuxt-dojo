<template>
  <div
    class="bg-gray-950 w-screen h-screen flex flex-col justify-center items-center"
  >
    <p class="text-7xl font-extrabold text-emerald-500 mt-7">
      {{ error.statusCode }}
    </p>
    <p class="text-4xl text-white font-bold mt-7">Oops!</p>
    <p class="font-bold text-emerald-500 mt-7">{{ error.message }}</p>
    <button class="btn my-7" @click="handlerClearError">Go Home</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handlerClearError = () => clearError({ redirect: "/" });
</script>

<style scoped>
</style>