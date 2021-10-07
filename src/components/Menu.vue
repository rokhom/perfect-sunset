<template>
  <div>
    <div class="container">
      <ul class="menu">
        <li class="item" v-for="item in menu" v-bind:key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  margin: 10px;
  z-index: 3;
}
.menu {
  display: flex;
  list-style: none;
  z-index: 3;
}
.item {
  display: flex;
  margin-left: 10px;
}
</style>