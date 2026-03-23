<template>
    <li class="tag"><slot></slot></li>
</template>

<style lang="css" scoped>
li {
  list-style: none;
  padding: 3px 7px;

  border: 2px solid;
  border-radius: 33px;
}

li:nth-child(2n) {
  border-color: cornflowerblue;
  background-color: mintcream;
}

li:nth-child(2n + 1) {
  border-color: lightcoral;
  background-color: mistyrose;
}
</style>