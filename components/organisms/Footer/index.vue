<template>
  <footer class="Footer">
    <div class="Footer__Container">
      <p class="Footer__Copyright">
        &copy; {{ currentYear }} {{ COPYRIGHT_TEXT }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { COPYRIGHT_TEXT } from "@/constants/app";

/** 現在の年を取得するための算出プロパティ */
const currentYear = computed(() => new Date().getFullYear());
</script>

<style lang="scss" scoped>
@use "./style.scss";
</style>
