<template>
  <div class="sunrise-sunset-time" v-if="info">
    <div>
      The sun rises at {{ convertTime(info.sys.sunrise) }} and sets at
      {{ convertTime(info.sys.sunset) }}
    </div>

    <div>Time to start taking pictures</div>

    <div>
      <span class="start-time">{{ subtractTime(info.sys.sunrise) }}</span> and
      <span class="start-time">{{ subtractTime(info.sys.sunset) }}</span>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
moment().format();

export default {
  data() {
    return {
      info: null,
      sunTime: new Date(),
    };
  },
  methods: {
    subtractTime(time) {
      return moment.unix(time).subtract(1, "hour").format("h:mm:ss A");
    },
    convertTime(time) {
      return moment.unix(time).format("h:mm:ss A");
    },
  },
  mounted() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=bdaf1e29c49b1e89b37ab6ccc792494e`
      )
      .then((response) => (this.info = response.data));
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