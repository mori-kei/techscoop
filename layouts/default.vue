<template>
  <div class="Layout">
    <Header />
    <main class="Layout__Content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/organisms/Header/index.vue";
import Footer from "@/components/organisms/Footer/index.vue";
</script>

<style lang="scss" scoped>
@use "./style.scss";
</style>
