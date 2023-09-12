<script setup lang="ts">
  import TaskItem from '../molecules/TaskItem.vue';
</script>

<template>
  <div class="tasks">
    <TaskItem task_id="0" />
  </div>
</template>

<style scoped>
  .tasks  {
    width: 100%;
    padding: var(--size24);
    box-sizing: border-box;
    border-radius: 0 0 var(--size24) var(--size24);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-component);
  }
</style>