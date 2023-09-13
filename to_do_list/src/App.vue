<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import type { User } from './types/Users';
  import HeaderContent from './components/HeaderContent.vue';
  import MainContent from './components/MainContent.vue';
  
  //@ts-ignore
  const logged = ref(JSON.parse(sessionStorage.getItem(logged)) || false),
  //@ts-ignore
        user = reactive<User>(JSON?.parse(sessionStorage.getItem('user')) || {
    id: -1,
    name: '',
    cpf: 0,
    password: 'string',
    tasks: [
      {
        id: -1,
        act: false,
        description: 'teste',
        title: 'Teste'
      }
    ]
  });
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