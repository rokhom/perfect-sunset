<template>
  <div class="container">
    <ul class="menu">
      <li class="m-item" v-for="item in menu" v-bind:key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    menu: [Array],
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  z-index: 4;
}
.menu {
  display: flex;
  list-style: none;
}
.m-item {
  display: flex;
  margin: 10px;
}
</style>