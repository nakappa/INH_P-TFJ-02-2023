<script setup lang="ts">
	import type { User } from '@/types/Users';
  import FormLogin from './molecules/FormLogin.vue';
  import UserLogged from './molecules/UserLogged.vue';

  defineProps<{ user: User }>();
</script>

<template>
	<header class="header">
		<h1 class="title">Lista de Tarefas</h1>
		<FormLogin v-if="user.id < 0" :user="user" />
		<UserLogged v-else :user="user" />
	</header>
</template>

<style scoped>
  h1.title {
    font-size: var(--size48);
    color: var(--quaternary);
  }

  header {
    width: 100%;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 800px) {
    header {
      gap: 80px;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media (min-width: 800px) and (max-width: 1085px) {
    header { justify-content: center; }
  }
</style>