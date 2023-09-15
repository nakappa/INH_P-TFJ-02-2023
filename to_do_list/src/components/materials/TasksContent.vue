<script setup lang="ts">
  import { ref, watch } from 'vue';
  import type { User } from '@/types/Users';
  import TaskItem from '../molecules/TaskItem.vue';

  const props = defineProps<{ user: User }>(),
        { tasks } = props.user,
        aux = ref<number>(tasks.length);

  watch(tasks, () => {
    const container = document.querySelector('.tasks') as HTMLElement;
    if (tasks.length > aux.value) {
      container?.classList.add('create');
      setTimeout(() => container?.classList.remove('create'), 450);
    }

    aux.value = tasks.length;
  });
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
    transition: max-height .75s ease;
    background-color: var(--bg-component);
  }

  .tasks.create .task:last-child  { animation: create .4s ease-in; }
  .tasks.removed .task:last-child { animation: removed .4s ease-out forwards; }

  @keyframes create {
    0% { transform: scale(0); }
    75% { transform: scale(1.25); }
    100% { transform: scale(1); }
  }

  @keyframes removed {
    0% { transform: scale(1); }
    25% { transform: scale(1.25); }
    100% { transform: scale(0); }
  }
</style>