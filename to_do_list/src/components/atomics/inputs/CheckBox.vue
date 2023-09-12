<script setup lang="ts">
  let checked: boolean = false
</script>

<template>
  <div class="check-box">
    <input type="checkbox" @click="checked = !checked; console.log(checked)">
    <span class="material-symbols-outlined">done</span>
  </div>
</template>

<style scoped>
  .check-box {
    position: relative;
    width: 24px;
    height: 24px;
    transition: .75s all;
    border-radius: 4px;
    color: var(--secondary);
    background-color: var(--primary);
  }

  .check-box:hover {
    box-shadow: 0 0 5px var(--primary),
                0 0 10px var(--primary);
  }

  .check-box input {
    position: absolute;
    opacity: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    box-sizing: border-box;
  }

  .check-box input:checked~span { animation: checked-enabled .4s ease-in-out; }

  .check-box span {
    font-size: 24px;
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
</style>