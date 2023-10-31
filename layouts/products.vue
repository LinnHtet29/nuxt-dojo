<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/" class="text-2xl font-extrabold">Nuxt Dojo Merch</NuxtLink>
      </nav>
    </header>
    <div class="contaier mx-auto px-4 border-b-2 border-gray-500">
      <slot />
    </div>
    <footer>
      <ul class="flex gap-4 p-3">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.router-link-exact-active {
  color: green;
}
</style>