<template>
  <div v-if="info">
    <div>Cloudiness</div>
    <div v-for="clouds in info.clouds" :key="clouds" class="clouds">{{ clouds }}%</div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        info: null
      };
    },
    mounted () {
      axios
      .get (`https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=bdaf1e29c49b1e89b37ab6ccc792494e`)
      .then(response => (this.info = response.data));
    }
  };
</script>
<style scoped>
  .clouds {
    background-color: blue;
    display: block;
    width: 20px;
    height: 20px;
  }
</style>