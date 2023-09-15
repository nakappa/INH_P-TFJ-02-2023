<script setup lang="ts">
  import { ref } from 'vue';
  import type { User } from '@/types/Users';
  import { change } from '@/utils/actions';

  const props = defineProps<{ task_id: number, user: User }>(),
        { task_id, user } = props,
        title = ref<string>(user.tasks.filter(item => item.id == task_id)[0].title);
</script>

<template>
  <div class="task-input">
		<input
      type="text"
      :name="`input_task_${task_id}`"
      v-model="title"
      v-on:blur="change('change-title', task_id, user, title)"
    >
		<label>Pendente</label>
  </div>
</template>

<style scoped>
	.task-input {
		position: relative;
		width: 100%;
	}

  input[type="text"] {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 180px;
    font-weight: 700;
    text-transform: uppercase;
    transition: .75s all;
    color: var(--quaternary);
    background-color: var(--bg-default);
  }

  input[type="text"]:focus {
    color: var(--secondary);
    background-color: var(--primary);
  }

  input[type="text"]:focus~label { transform: scale(0); }

  label {
    position: absolute;
    left: 12px;
    bottom: -8px;
    font-size: 12px;
    transform: scale(1);
    transition: .75s ease;
  }

  .task.act .ctrl-input .task-input input[type="text"] {
    color: var(--secondary);
    background-color: var(--quaternary);
  }

  .task.act .ctrl-input .task-input input[type="text"]:focus { background-color: var(--primary); }
</style>