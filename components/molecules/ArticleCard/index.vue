<template>
  <div class="Article">
    <h2 class="Article__Title">{{ item.title }}</h2>
    <div class="Article__Meta">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        {{ formatDate(item.created_at) }}
      </span>
      <span class="likes">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ></path>
        </svg>
        {{ item.likes_count }}
      </span>
      <span class="stocks">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        {{ item.stocks_count }}
      </span>
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
