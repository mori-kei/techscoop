<template>
  <Container />
</template>
<script setup lang="ts">
import Container from "@/components/organisms/Top/Container/index.vue";
import { pageApiStore } from "@/store/page/apiStore";
const apiStore = pageApiStore();
await useAsyncData(async () => {
  await apiStore.fetchQiitaItems({});
  return {};
});
</script>
<style lang="scss" scoped>
@use "./style.scss";
</style>
