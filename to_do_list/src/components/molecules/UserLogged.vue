<script setup lang="ts">
	import type { User } from '@/types/Users';
  import BtnLogout from '../atomics/buttons/BtnLogout.vue';

  defineProps<{ user: User }>();
</script>

<template>
	<div class="user">
		<h2 class="user-name">Usuários: <span>{{ user.name }}</span></h2>
		<BtnLogout :user="user" />
	</div>
</template>

<style scoped>
  .user {
    width: 100%;
    display: flex;
    gap: 12px;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
  }

	.user-name {
		width: 100%;
		height: 48px;
		margin: 0;
		display: flex;
		gap: 10px;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: var(--size24);
	}
	
	.user-name span {
		font-weight: 700;
		color: var(--quaternary);
		text-transform: uppercase;
	}

	@media (min-width: 515px) {
		.user {
			width: max-content;
			flex-wrap: nowrap;
		}
	}
</style>