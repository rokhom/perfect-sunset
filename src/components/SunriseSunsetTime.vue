<template>
  <div v-if="info">
    {{convertTime(info.sys.sunrise)}}
    {{convertTime(info.sys.sunset)}}
  </div>
</template>
<script>
  import axios from 'axios'
  import moment from 'moment';
  moment().format();

  export default {
    data () {
      return {
        info: null,
        sunTime: new Date()
      };
    },
    methods: {
        convertTime(time) {
           return moment.unix(time).format('h:mm:ss A') 
        }
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