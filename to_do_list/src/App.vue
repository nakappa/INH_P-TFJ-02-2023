<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { noUser, type User } from './types/Users';
  import HeaderContent from './components/HeaderContent.vue';
  import MainContent from './components/MainContent.vue';
  //@ts-ignore
  const user = reactive<User>(JSON.parse(sessionStorage.getItem('user')) || noUser);
</script>

<template>
  <div class="container">
    <HeaderContent :user="user" />
    <MainContent :user="user" />
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