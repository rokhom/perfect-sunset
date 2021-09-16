<template>
  <div>
    <div class="container">
      <ul class="menu">
        <li class="item" v-for="item in menu" v-bind:key="item">
            {{item}}
        </li>
    </ul>
    </div>    
  </div>
</template>
<script>
  export default {
     data () {
      return {          
     }
    },
    props: {
      menu: {
        type: Array,
        required: true,
      }  
    }
  }
</script>
<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    margin: 10px;
    z-index: 2;
  }
  .menu {
    display: flex;
    list-style: none;
  }
  .item {
    display: flex;
    margin-left: 10px;
  }
</style>