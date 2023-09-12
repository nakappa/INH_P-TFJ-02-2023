<script setup lang="ts">
</script>

<template>
  <div class="container">
    <header class="header">
      <h1 class="title">Lista de Tarefas</h1>

      <form action="" class="form-login">
        <div class="field">
          <input type="text" name="cpf" required>
          <label>CPF</label>
        </div>
        
        <div class="field">
          <input type="text" name="password" required>
          <label>Senha</label>
        </div>
        <button class="btn submit">
          Login
          <span class="material-symbols-outlined">login</span>
        </button>
      </form>
    </header>

    <main class="content">
      <div class="top">
        <h2 class="title">Minhas Tarefas</h2>
        <div class="content-add">
          <h3 class="title">adicionar</h3>
          <button class="btn add">
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>

      <div class="tasks">
        <div class="task">
          <div class="ctrl-input">
            <input type="text" name="task_1" placeholder="TÍTULO">
            <label>Pendente</label>

            <div class="actions">
              <div class="checked">
                <input type="checkbox">
                <span class="material-symbols-outlined">done</span>
              </div>

              <button class="btn del">
                <span class="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
          
          <textarea name="decription" id="" rows="10" placeholder="Decrição da tarefa"></textarea>
        </div>
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

  header .form-login .field {
    position: relative;
    width: 100%;
  }

  header .form-login .field input {
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

  header .form-login .field label {
    position: absolute;
    top: 11px;
    left: 12px;
    color: var(--secondary);
    transition: .75s all;
  }

  header .form-login .field input:focus~label,
  header .form-login .field input:valid~label {
    top: 1px;
    left: 12px;
    color: var(--error);
    font-size: 12px;
  }
  
  header .form-login .submit {
    gap: 10px;
    width: 100%;
    height: 36px;
    border-radius: 180px;
    font-size: 16px;
    font-weight: 500;
    transition: .75s all;
    background-color: var(--quaternary);
  }
  
  header .form-login .submit:hover {
    box-shadow: 0 0 5px var(--quaternary),
                0 0 10px var(--quaternary),
                0 0 15px var(--quaternary),
                0 0 20px var(--quaternary);
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

  .content .top .content-add .add {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    transition: .75s all;
    color: var(--quaternary);
    background-color: var(--secondary);
  }

  .content .top .content-add .add:hover {
    box-shadow: 0 0 5px var(--secondary),
                0 0 10px var(--secondary),
                0 0 15px var(--secondary);
  }

  .content .top .content-add .add span {
    font-size: 32px;
    font-weight: 500;
    transition: .75s all;
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

  .content .tasks .task  {
    width: 350px;
    padding: 12px;
    box-sizing: border-box;
    border-radius: var(--size24);
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-default);
  }

  .content .tasks .task .ctrl-input {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .content .tasks .task .ctrl-input input[type="text"] {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 180px;
    color: var(--quaternary);
    background-color: var(--bg-default);
  }

  .content .tasks .task .ctrl-input input[type="text"]:focus {
    color: var(--secondary);
    background-color: var(--primary);
  }

  .content .tasks .task .ctrl-input input[type="text"]:focus~label { transform: scale(0); }

  .content .tasks .task .ctrl-input label {
    position: absolute;
    left: 12px;
    bottom: -8px;
    font-size: 14px;
    transform: scale(1);
    transition: .75s ease;
  }

  .content .tasks .task .ctrl-input .actions {
    width: max-content;
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .content .tasks .task .ctrl-input .actions .checked {
    position: relative;
    width: 30px;
    height: 30px;
    transition: .75s all;
    border-radius: 8px;
    background-color: var(--ternary);
  }

.content .tasks .task .ctrl-input .actions .checked:hover {
  background-color: #015C25;
}

  .content .tasks .task .ctrl-input .actions .checked input {
    position: absolute;
    opacity: 0;
    z-index: 1;
    width: 30px;
    height: 30px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .content .tasks .task .ctrl-input .actions .checked input:checked~span { animation: checked-enabled .4s ease-in-out; }

  .content .tasks .task .ctrl-input .actions .checked span {
    font-size: 30px;
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

  .content .tasks .task .ctrl-input .actions .del {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: .75s all;
    color: var(--primary);
    background-color: var(--error);
  }

  .content .tasks .task .ctrl-input .actions .del:hover {
    box-shadow: 0 0 5px var(--error),
                0 0 10px var(--error),
                0 0 15px var(--error);
  }

  .content .tasks .task textarea {
    width: 100%;
    border: none;
    outline: none;
    background-color: var(--primary);
    border-radius: 0 0 min(12px, 2.75vw) min(12px, 2.75vw);
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

    header .form-login .submit { height: 48px; }
  }

  @media (min-width: 800px) and (max-width: 1085px) {
    header { justify-content: center; }
  }
</style>