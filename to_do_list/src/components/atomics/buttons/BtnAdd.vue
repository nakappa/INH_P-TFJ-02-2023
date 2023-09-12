<script setup lang="ts">
</script>

<template>
  <button class="btn add" @click="console.log('add')">
    <span class="material-symbols-outlined">add</span>
  </button>
</template>

<style scoped>
  .add {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    transition: .75s all;
    color: var(--quaternary);
  background-color: var(--secondary);
  }

  .add:hover {
    box-shadow: 0 0 5px var(--secondary),
                0 0 10px var(--secondary),
                0 0 15px var(--secondary);
  }

  .add span {
    font-size: 32px;
    font-weight: 500;
    transition: .75s all;
  }
</style>