<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink class="text-2xl font-extrabold" to="/">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink class="text-lg font-bold" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-lg font-bold" to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn" to="/products">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.router-link-exact-active {
  color: green;
}
</style>