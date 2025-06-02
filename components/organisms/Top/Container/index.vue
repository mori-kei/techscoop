<template>
  <div class="Container">
    <p class="Container__Description">
      TechScoopは最新の技術記事をまとめてチェックできるアプリケーションです。
    </p>
    <ArticleList class="Container__ArticleList"></ArticleList>
  </div>
</template>

<script setup lang="ts">
import ArticleList from "@/components/organisms/ArticleList/index.vue";
</script>
<style lang="scss" scoped>
@use "./style.scss";
</style>
