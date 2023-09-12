<script setup lang="ts">
	import TopContent from './molecules/TopContent.vue';
	import TasksContent from './materials/TasksContent.vue';
</script>

<template>
	<main class="content">
		<TopContent />
		<TasksContent />
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