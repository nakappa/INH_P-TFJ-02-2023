<script setup lang="ts">
  import FormLogin from './components/molecules/FormLogin.vue';
  import MainContent from './components/MainContent.vue';
</script>

<template>
  <div class="container">
    <header class="header">
      <h1 class="title">Lista de Tarefas</h1>

      <FormLogin />
    </header>

    <MainContent />
  </div>
</template>

<style scoped>
  .container {
    width: var(--width);
    max-height: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    gap: var(--size48);
    flex-direction: column;
    align-items: center;
  }

  h1.title {
    font-size: var(--size48);
    color: var(--quaternary);
  }

  header {
    width: 100%;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }

  header .title { font-weight: 700; }

  header .form-login {
    width: 210px;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: center;
  }
  
  @media (min-width: 800px) {
    header {
      gap: 80px;
      flex-direction: row;
      justify-content: space-between;
    }

    header .form-login {
      width: min(600px, 100%);
      flex-direction: row;
      align-items: center;
    }

    header .form-login .field {
      min-width: 210px;
      flex-direction: row;
      align-items: center;
    }

    header .form-login .btn { height: 48px; }
  }

  @media (min-width: 800px) and (max-width: 1085px) {
    header { justify-content: center; }
  }
</style>