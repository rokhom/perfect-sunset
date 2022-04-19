import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataWeather: [],
  },
  actions: {
    async fetchWeather(ctx) {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=bdaf1e29c49b1e89b37ab6ccc792494e`
        )
        .then((response) => {
          ctx.commit('setWeather', response.data)
        });
    },
  },
  mutations: {
    setWeather(state, dataWeather) {
      state.dataWeather = dataWeather
    }
  },
})