<script setup lang="js">
defineEmits(['click']);
</script>

<template>
    <button @click="$emit('click')" ><slot></slot></button>
</template>

<style lang="css" scoped>
button {
  width: fit-content;
  height: fit-content;

  padding: 7px;

  font-size: 14px;
  font-weight: bold;

  border: 2px solid black;
  background-color: white;

  position: relative;
}

button::before {
  content: '';
  display: block;

  width: 100%;
  height: 100%;

  border: 2px solid black;
  background-color: black;

  position: absolute;
  z-index: -1;

  top: 2px;
  left: 2px;
  transition: top 150ms, left 150ms;
}

button:hover::before {
  top: -5px;
  left: -5px;
  transition: top 150ms, left 150ms;
}
</style>
