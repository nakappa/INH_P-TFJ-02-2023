<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import type { User } from '@/types/Users';
  import { change } from '@/utils/actions'

  const props = defineProps<{ task_id: number, user: User }>(),
        { task_id , user } = props;

  let checked = ref<boolean>(user.tasks.filter(item => item.id == task_id)[0].act);

  function handleCheck() {
    const task = document.querySelector(`[name="task_${task_id}"]`) as HTMLElement,
          label = task.children[0].children[0].children[1];

    if (checked.value) {
      task.classList.add('act');
      label.innerHTML = 'Concluído';

    } else {
      task.classList.remove('act');
      label.innerHTML = 'Pendente';
    }
  }
    
  watch(checked, () => {
    handleCheck();
    change('change-task', task_id, user, checked.value);
  });

  onMounted(handleCheck)
</script>

<template>
  <div class="check-box">
    <input type="checkbox" v-model="checked">
    <span class="material-symbols-outlined">done</span>
  </div>
</template>

<style scoped>
  .check-box {
    position: relative;
    width: 24px;
    height: 24px;
    transition: .75s all;
    border-radius: 4px;
    color: var(--secondary);
    background-color: var(--primary);
  }

  .check-box:hover {
    box-shadow: 0 0 5px var(--primary),
                0 0 10px var(--primary);
  }

  .check-box input {
    position: absolute;
    opacity: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    box-sizing: border-box;
  }

  .check-box input:checked~span { animation: checked-enabled .4s ease-in-out; }

  .check-box span {
    font-size: 24px;
    animation: checked-disabled .4s ease-in-out forwards;
  }

  @keyframes checked-enabled {
    0% { transform: scale(0); }
    75% { transform: scale(1.5); }
    100% { transform: scale(1); }
  }

  @keyframes checked-disabled {
    0% { transform: scale(1); }
    25% { transform: scale(1.5); }
    100% { transform: scale(0); }
  }
</style>