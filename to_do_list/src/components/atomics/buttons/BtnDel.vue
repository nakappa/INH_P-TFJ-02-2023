<script setup lang="ts">
  
</script>

<template>
  <button class="btn del" @click="console.log('del')">
    <span class="material-symbols-outlined">delete</span>
  </button>
</template>

<style scoped>
  .del {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: .75s all;
    color: var(--primary);
    background-color: var(--error);
  }

  .del:hover {
    box-shadow: 0 0 5px var(--error),
                0 0 10px var(--error),
                0 0 15px var(--error);
  }
</style>