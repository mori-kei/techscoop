<template>
  <div class="ArticleList">
    <ul v-if="qiitaItems && qiitaItems.length > 0" class="ArticleList__Items">
      <li v-for="item in qiitaItems" :key="item.id" class="ArticleList__Item">
        <ArticleCard :item="item" />
      </li>
    </ul>
    <div v-else class="ArticleList__Empty">記事が見つかりませんでした</div>
  </div>
</template>

<script setup lang="ts">
import { pageApiStore } from "@/store/page/apiStore";
import ArticleCard from "@/components/molecules/ArticleCard/index.vue";

/** API Store */
const apiStore = pageApiStore();

/** Qiita記事取得結果 */
const qiitaItems = apiStore.qiitaItemsOrThrow;
</script>
<style lang="scss" scoped>
@use "./style.scss";
</style>
