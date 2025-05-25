<template>
  <span
    class="Tag"
    :class="{ 'Tag--Clickable': clickable }"
    @click="handleClick"
  >
    {{ props.display }}
  </span>
</template>

<script setup lang="ts">
/** Props */
const props = defineProps<{
  /** 表示するテキスト */
  display: string;
  /** クリック可能かどうか */
  clickable?: boolean;
}>();

/** Emits */
const emit = defineEmits<{
  (e: "click"): void;
}>();

const handleClick = () => {
  if (props.clickable) {
    emit("click");
  }
};
</script>

<style lang="scss" scoped>
@use "./style.scss";
</style>
