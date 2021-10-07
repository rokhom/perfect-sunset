<template>
  <div class="current-weather" v-if="info">
    <div class="clouds-description">Cloudiness now:</div>
    <span v-for="clouds in info.clouds" :key="clouds" class="clouds">
      {{ clouds }}%
    </span>
    <div class="decision"> {{ decision }} </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      decision: null,
    };
  },
  methods: {
    async mghjhjh() {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=bdaf1e29c49b1e89b37ab6ccc792494e`
        )
        .then((response) => {
          console.log("this.response", response);
          this.info = response.data;
        });
      console.log("this.this.info", this.info);
      if (this.info.clouds.all > 81) {
        this.decision = "If clouds > 80%, not the best to take pictures of sunrise or sunset";
      } else if (this.info.clouds.all <= 80) {
        this.decision = "Good to take pictures";
      }
    },
  },
  mounted() {
    this.mghjhjh();
  },
};
</script>
<style scoped>
.clouds {
  display: block;
}
.clouds-description {
  font-weight: 200;
  font-size: large;
}
.decision {
  font-size: xx-large;
}
.current-weather {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>