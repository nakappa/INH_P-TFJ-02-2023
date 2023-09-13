<!-- eslint-disable vue/no-mutating-props -->
<script setup lang="ts">
import { ref, watch } from 'vue';

  const props = defineProps<{ name: string, label: string, values: any }>(),
        value = ref<string>('');
  
  watch(value, ()=> props.values[props.name] = value.value);
</script>

<template>
  <div class="field">
    <input
      type="text" :name="name"
      v-model="value"
      required
    >

    <label>{{ label }}</label>
  </div>
</template>

<style scoped>
  .field {
    position: relative;
    width: 100%;
  }

  .field input {
    width: 100%;
    height: 48px;
    padding: 12px;
    border: none;
    outline: none;
    border-radius: 180px;
    color: var(--secondary);
    font-size: 14px;
    background-color: var(--primary);
  }

  .field label {
    position: absolute;
    top: 11px;
    left: 12px;
    color: var(--secondary);
    transition: .75s all;
  }

  .field input:focus~label,
  .field input:valid~label {
    top: 1px;
    left: 12px;
    color: var(--error);
    font-size: 12px;
  }

  @media (min-width: 800px) {
    .field {
      min-width: 210px;
      flex-direction: row;
      align-items: center;
    }
  }
</style>