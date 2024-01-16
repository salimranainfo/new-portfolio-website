<template>
  <div
    class="bg-image"
    :style="{
      backgroundImage: 'url(' + bgImage + ')',
    }"
  >
    <slot></slot>

    <SharedFooter />
  </div>
</template>

<script setup lang="ts">
import bgImage from '@/assets/images/bg.svg'
</script>

<style scoped>
.bg-image {
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
}
</style>
