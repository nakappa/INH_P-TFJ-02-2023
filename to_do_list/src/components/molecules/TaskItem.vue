<script setup lang="ts">
import type { User } from "@/types/Users";
import BtnDel from "../atomics/buttons/BtnDel.vue";
import TaskInput from "../atomics/inputs/TaskInput.vue";
import CheckBox from "../atomics/inputs/CheckBox.vue";
import TextArea from "../atomics/inputs/TextArea.vue";

defineProps<{ task_id: number; user: User }>();
</script>

<template>
  <li class="task" name="name">
    <div class="ctrl-input">
      <TaskInput :task_id="task_id" :user="user" />

      <div class="actions">
        <CheckBox :task_id="task_id" :user="user" />
        <BtnDel :task_id="task_id" :user="user"/>
      </div>
    </div>
    
    <TextArea :task_id="task_id" :user="user" />
  </li>
</template>

<style scoped>
  .task {
    width: 350px;
    padding: 12px;
    box-sizing: border-box;
    border-radius: var(--size24);
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .75s all;
    background-color: var(--bg-default);
  }

  .task .ctrl-input {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .task .ctrl-input .actions {
    width: max-content;
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .task textarea {
    width: 100%;
    border: none;
    outline: none;
    background-color: var(--primary);
    border-radius: 0 0 min(12px, 2.75vw) min(12px, 2.75vw);
  }

  .task.act {
    color: var(--secondary);
    background-color: var(--quaternary);
  }
</style>
