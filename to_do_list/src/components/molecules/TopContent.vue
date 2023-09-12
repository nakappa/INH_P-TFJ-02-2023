<script setup lang="ts">
	import BtnAdd from '../atomics/buttons/BtnAdd.vue';
</script>

<template>
	<div class="top">
		<h2 class="title">Minhas Tarefas</h2>
		<div class="content-add">
			<h3 class="title">adicionar</h3>
			<BtnAdd />
		</div>
	</div>
</template>

<style scoped>
	.top {
    width: 100%;
    padding: var(--size24);
    display: flex;
    gap: 24px;
		flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: var(--secondary);
    border-radius: var(--size24) var(--size24) 0 0;
    background-color: var(--quaternary);
  }
  
	.top .title { font-weight: 700; }
	.top h2.title { font-size: var(--size32); }
  
	.top h3.title { font-size: var(--size24); }
  
	.top .content-add {
    width: max-content;
    display: flex;
    gap: 16px;
    align-items: center;
  }

	@media (min-width: 525px) {
		.top { justify-content: space-between; }
	}
</style>