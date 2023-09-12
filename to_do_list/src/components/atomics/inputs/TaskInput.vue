<script setup lang="ts">
  const props = defineProps<{ name: string, title: string }>();
  let { title } = props;
</script>

<template>
  <div class="task-input">
		<input type="text" :name="name" v-model="title" @keyup="console.log(title)">
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
</style>