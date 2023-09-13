<script setup lang="ts">
	import type { User } from '@/types/Users';
  import BtnLogin from '../atomics/buttons/BtnLogin.vue';
	import FormInput from '../atomics/inputs/FormInput.vue';
import { reactive } from 'vue';

  defineProps<{ user: User }>();
  const values = reactive({ cpf: 0, password: ''});
</script>

<template>
	<form class="form-login">
		<FormInput name="cpf" label="CPF" :values="values" />
		<FormInput name="password" label="Password" :values="values" />
		<BtnLogin :user="user" :values="values"/>
	</form>
</template>

<style scoped>
  .form-login {
    width: 210px;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: center;
  }
  .form-login .btn { margin-top: 12px; }

  @media (min-width: 800px) {
    .form-login {
      width: min(600px, 100%);
      flex-direction: row;
      align-items: center;
    }

    .form-login .field {
      min-width: 210px;
      flex-direction: row;
      align-items: center;
    }

    .form-login .btn {
      margin-top: 0;
      height: 48px;
    }
  }
</style>