<script setup lang="ts">
</script>

<template>
  <button type="submit" class="btn login">
    login
    <span class="material-symbols-outlined">login</span>
  </button>
</template>

<style scoped>
  .login {
    gap: 10px;
    width: 100%;
    height: 36px;
    border-radius: 180px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    transition: .75s all;
    background-color: var(--quaternary);
  }

  .login:hover {
    box-shadow: 0 0 5px var(--quaternary),
                0 0 10px var(--quaternary),
                0 0 15px var(--quaternary),
                0 0 20px var(--quaternary);
  }
</style>