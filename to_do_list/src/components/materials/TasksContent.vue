<script setup lang="ts">
  import type { User } from '@/types/Users';
import TaskItem from '../molecules/TaskItem.vue';

  defineProps<{ user: User }>();
</script>

<template>
  <ul class="tasks">
    <TaskItem
      v-for="task in user.tasks"
      :key="task.id"
      :id="`${task.id}`"
      :name="`task_${task.id}`"
      :task_id="task.id"
      :user="user"
    />
  </ul>
</template>

<style scoped>
  .tasks  {
    width: 100%;
    padding: var(--size24);
    box-sizing: border-box;
    border-radius: 0 0 var(--size24) var(--size24);
    display: flex;
    gap: var(--size24);
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-component);
  }
</style>