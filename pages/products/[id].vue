<template>
  <div>
    <Head>
      <Title>Nuxt Merch | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { id } = useRoute().params;
const url = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(url, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found.",
    fatal: true,
  });
}
</script>

<style scoped>
h2 {
  margin: 20px 0;
}
p {
  margin: 20px 0;
}
</style>