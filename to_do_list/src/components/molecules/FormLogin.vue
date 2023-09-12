<script setup lang="ts">
	import BtnLogin from '../atomics/buttons/BtnLogin.vue';
	import FormInput from '../atomics/inputs/FormInput.vue';
</script>

<template>
	<form action="" class="form-login">
		<FormInput name="cpf" label="CPF" value="" />
		<FormInput name="password" label="Password" value="" />
		<BtnLogin />
	</form>
</template>

<style scoped>
  .field {
    position: relative;
    width: 100%;
  }
</style>