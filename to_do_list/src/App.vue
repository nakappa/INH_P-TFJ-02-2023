<script setup lang="ts">
  import HeaderContent from './components/HeaderContent.vue';
  import MainContent from './components/MainContent.vue';
</script>

<template>
  <div class="container">
    <HeaderContent />
    <MainContent />
  </div>
</template>

<style scoped>
  .container {
    width: var(--width);
    max-height: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    gap: var(--size48);
    flex-direction: column;
    align-items: center;
  }
</style>