<template>
  <header class="Header">
    <div class="Header__Container">
      <div class="Header__Logo"></div>
      <h1 class="Header__Title">{{ HEADER_TITLE }}</h1>
      <nav class="Header__Nav">
        <ul class="Header__NavList">
          <li v-for="item in NAV_ITEMS" :key="item.to" class="Header__NavItem">
            <NuxtLink :to="item.to" class="Header__NavLink">{{
              item.text
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { HEADER_TITLE, NAV_ITEMS } from "@/constants/navigation";
</script>

<style lang="scss" scoped>
@use "./style.scss";
</style>
