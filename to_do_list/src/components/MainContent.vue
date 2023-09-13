<script setup lang="ts">
  import type { User } from '@/types/Users';
	import TopContent from './molecules/TopContent.vue';
	import TasksContent from './materials/TasksContent.vue';

  defineProps<{ logged: boolean, user: User }>();
</script>

<template>
	<main class="content">
		<TopContent :logged="logged" :user="user" />
		<TasksContent :user="user" />
	</main>
</template>

<style scoped>
  .content {
    width: var(--width);
    display: flex;
    border-radius: var(--size24);
    flex-direction: column;
  }
</style>