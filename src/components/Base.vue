<template>
  <div>
    <div class="wrapper">
    <Header></Header>
    <div class="main">
    <current-weather></current-weather>
    <sunrise-sunset-time></sunrise-sunset-time>
    </div>
    <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue';
import CurrentWeather from './CurrentWeather.vue';
import SunriseSunsetTime from './SunriseSunsetTime.vue';

export default {
  components: {
    Header,
    Footer,
    CurrentWeather,
    SunriseSunsetTime
  },
};
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
body {
  color: #ffffff;
  background-image: url("https://live.staticflickr.com/65535/51470212945_3c4ae10008_b.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  margin: 0 0;
}
.wrapper {
  display: flex;
  flex-direction: column;  
}
.main {
  max-height: 90vh;
  min-height: 80vh;
}
</style>