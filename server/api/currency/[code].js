export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();

  const uri = `https://api.freecurrencyapi.com/v1/latest?currencies=${code}&apikey=${currencyKey}`;
  const data = await $fetch(uri);
  return data;
});
