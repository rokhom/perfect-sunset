<template>
  <div class="current-weather" v-if="$store.state.dataWeather">
    <div class="clouds-description">Cloudiness now:</div>
    <span v-for="clouds in $store.state.dataWeather.clouds" :key="clouds" class="clouds">
      {{ clouds }}%
    </span>
    <div class="decision"> {{ decision }} </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      decision: null,
    };
  },
  methods: {
    isCloudinessHigh(){
      if (this.$store.state.dataWeather.clouds.all > 81) this.decision = "If clouds > 80%, not the best to take pictures of sunrise or sunset"; 
    },
    isCloudinessGood(){
      if (this.$store.state.dataWeather.clouds.all <= 80) this.decision = "Good to take pictures";
    },
    setDecision(){
      this.isCloudinessHigh()
      this.isCloudinessGood()
    }
  },
  async mounted() {
    await this.$store.dispatch('fetchWeather');
    this.setDecision()
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