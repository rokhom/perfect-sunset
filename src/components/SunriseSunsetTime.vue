<template>
  <div class="sunrise-sunset-time" v-if="$store.state.dataWeather && $store.state.dataWeather.sys">
    <div>
      The sun rises at {{ convertTime($store.state.dataWeather.sys.sunrise) }} and sets at
      {{ convertTime($store.state.dataWeather.sys.sunset) }}
    </div>
    <div>Time to start taking pictures</div>
    <div>
      <span class="start-time">{{ subtractTime($store.state.dataWeather.sys.sunrise) }}</span> and
      <span class="start-time">{{ subtractTime($store.state.dataWeather.sys.sunset) }}</span>
    </div>
  </div>
</template>
<script>
import moment from "moment";
moment().format();

export default {
  methods: {
    subtractTime(time) {
      return moment.unix(time).subtract(1, "hour").format("h:mm:ss A");
    },
    convertTime(time) {
      return moment.unix(time).format("h:mm:ss A");
    },
  },  
};
</script>
<style scoped>
  .clouds {
    background-color: blue;
    display: block;
    width: 20px;
    height: 20px;
    z-index: 1;
  }
  .sunrise-sunset-time {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .start-time {
    font-size: xx-large;
  }
</style>