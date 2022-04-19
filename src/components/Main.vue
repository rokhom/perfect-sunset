<template>
  <div>
    <div class="wrapper">
      <Slider :imgArray="imgArray"></Slider>
      <Header :menu="menu"></Header>
      <div class="main-wrapper">
        <current-weather></current-weather>
        <sunrise-sunset-time></sunrise-sunset-time>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import CurrentWeather from "./CurrentWeather.vue";
import SunriseSunsetTime from "./SunriseSunsetTime.vue";
import Slider from "./Slider.vue";

export default {
  components: {
    Header,
    Footer,
    CurrentWeather,
    SunriseSunsetTime,
    Slider,
  },
  data() {
    return {
      imgArray: [
        "https://live.staticflickr.com/65535/51470208705_d86b52275c_b.jpg",
        "https://live.staticflickr.com/65535/51470209490_71e4a8690b_b.jpg",
        "https://live.staticflickr.com/65535/51469270446_066fd49d07_b.jpg",
        "https://live.staticflickr.com/65535/51469998479_fb373dfc5c_b.jpg",
        "https://live.staticflickr.com/65535/51470213705_18bebcc17e_b.jpg",
        "https://live.staticflickr.com/65535/51469268041_0708ea7914_b.jpg",
        "https://live.staticflickr.com/65535/51470214700_91a32fd1be_b.jpg",
        "https://live.staticflickr.com/65535/51470209735_e0a216265f_b.jpg",
        "https://live.staticflickr.com/65535/51469522398_61195a31cd_b.jpg",
      ],
      menu: ["Perfect sunset in Lviv"],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Glory:ital,wght@0,300;1,800&display=swap");

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  body {
    color: #ffffff;
    background-size: 100% 100%;
    height: 100vh;
    margin: 0 0;
    font-family: "Yaldevi", sans-serif;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    -webkit-user-select: none;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .main-wrapper {
    max-height: 90vh;
    min-height: 80vh;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-family: "Glory", sans-serif;
    font-weight: 900;
    padding: 0 50px;
  }
  @media (max-width: 500px) {
    .main-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
</style>