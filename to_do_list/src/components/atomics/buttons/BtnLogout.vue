<script setup lang="ts">
  import type { User } from '@/types/Users';

  defineProps<{ user:User }>();
</script>

<template>
  <button type="button" class="btn logout" @click="console.log('sair')">
    sair
    <span class="material-symbols-outlined">logout</span>
  </button>
</template>

<style scoped>
  .logout {
    width: 140px !important;
    gap: 10px;
    width: 100%;
    height: var(--size48);
    border-radius: 180px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    transition: .75s all;
    background-color: var(--quaternary);
  }

  .logout:hover {
    box-shadow: 0 0 5px var(--quaternary),
                0 0 10px var(--quaternary),
                0 0 15px var(--quaternary),
                0 0 20px var(--quaternary);
  }
</style>