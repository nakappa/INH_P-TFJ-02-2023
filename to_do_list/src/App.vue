<script setup lang="ts">
  import BtnAdd from './components/atomics/buttons/BtnAdd.vue';
  import BtnLogin from './components/atomics/buttons/BtnLogin.vue';
  import FormInput from './components/atomics/inputs/FormInput.vue';
  import TaskItem from './components/molecules/TaskItem.vue';
</script>

<template>
  <div class="container">
    <header class="header">
      <h1 class="title">Lista de Tarefas</h1>

      <form action="" class="form-login">
        <FormInput name="cpf" label="CPF" value="" />
        <FormInput name="password" label="Password" value="" />
        <BtnLogin />
      </form>
    </header>

    <main class="content">
      <div class="top">
        <h2 class="title">Minhas Tarefas</h2>
        <div class="content-add">
          <h3 class="title">adicionar</h3>
          <BtnAdd />
        </div>
      </div>

      <div class="tasks">
        <TaskItem task_id="0" />
      </div>
    </main>
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

  
  

  .content {
    width: var(--width);
    display: flex;
    border-radius: var(--size24);
    flex-direction: column;
  }

  .content .top {
    width: 100%;
    padding: var(--size24);
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: space-between;
    color: var(--secondary);
    border-radius: var(--size24) var(--size24) 0 0;
    background-color: var(--quaternary);
  }

  .content .top .title {
    font-size: var(--size24);
    font-weight: 700;
  }
  
  .content .top h2.title { font-size: 32px; }
  .content .top h3.title { font-size: 24px; }

  .content .top .content-add {
    width: max-content;
    display: flex;
    gap: 16px;
    align-items: center;
  }


  .content .tasks  {
    width: 100%;
    padding: var(--size24);
    box-sizing: border-box;
    border-radius: 0 0 var(--size24) var(--size24);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-component);
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