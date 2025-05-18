<template>
  <div class="Article">
    <h2 class="Article__Title">{{ item.title }}</h2>
    <div class="Article__Meta">
      <span>{{ formatDate(item.created_at) }}</span>
      <span>いいね: {{ item.likes_count }}</span>
      <span>ストック: {{ item.stocks_count }}</span>
    </div>
    <p class="Article__Summary"></p>
    <div class="Article__Tags">
      <Tag v-for="tag in item.tags" :key="tag.name" :display="tag.name" />
    </div>
    <NuxtLink :to="item.url" class="Article__Link" target="_blank"
      >続きを読む</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
import Tag from "@/components/atoms/Tag/index.vue";
import type { Item } from "./types";
import { formatDate } from "./functions";

/** Props */
const props = defineProps<{
  item: Item;
}>();
</script>

<style lang="scss" scoped>
@use "./style.scss";
</style>
