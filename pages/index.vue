<template>
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eligendi
      voluptates error quisquam accusamus delectus labore omnis iure, nam
      necessitatibus?
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eligendi
      voluptates error quisquam accusamus delectus labore omnis iure, nam
      necessitatibus?
    </p>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped>
h2 {
  margin: 20px 0;
}
p {
  margin: 20px 0;
}
</style>