<script setup lang="ts">
  import { onMounted, watch } from 'vue';
  import type { User } from '@/types/Users';
  import { add } from '@/utils/actions';

  const props = defineProps<{ user: User }>();

  function disabled() {
    const btn = document.querySelector('.add') as HTMLElement;
    props.user.id < 0
      ? btn.setAttribute('disabled', '')
      : btn.removeAttribute('disabled');
  }

  watch(props, disabled);
  onMounted(disabled)

  console.log(props.user.id)
</script>

<template>
  <button class="btn add" @click="add(user)">
    <span class="material-symbols-outlined">add</span>
  </button>
</template>

<style scoped>
  .add {
    width: var(--size48);
    height: var(--size48);
    border-radius: 50%;
    transition: .75s all;
    color: var(--quaternary);
    background-color: var(--secondary);
  }

  .add:hover {
    box-shadow: 0 0 5px var(--secondary),
                0 0 10px var(--secondary),
                0 0 15px var(--secondary);
  }

  .add span {
    font-size: var(--size32);
    font-weight: 500;
    transition: .75s all;
  }

  .add:disabled {
    pointer-events: none;
    background-color: var(--bg-component);
  }
</style>