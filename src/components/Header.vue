<template>
  <div class="container">
      <Title></Title>
      <Menu :menu="menu"/>
  </div>
</template>
<script>
  import Title from './Title.vue'
  import Menu from './Menu.vue'

  export default {
  components: {
    Title,
    Menu,
  },
  data () {
    return {
      menu: ['About', 'Gallery']
    }
  }
};
</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: row;
    }
</style>