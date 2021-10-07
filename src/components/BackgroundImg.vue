<template>
  <div>
    <div class="slider">
      <div class="item" v-for="img in imgArray" :key="img">
        <img :src="img" />
        <div class="previous" @click="previousSlide()">&#10094;</div>
        <div class="next" @click="nextSlide()">&#10095;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgArray: [Array],
  },
  data() {
    return {
      slideIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.showSlides((this.slideIndex += 1));
    },
    previousSlide() {
      this.showSlides((this.slideIndex -= 1));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      let slides = document.getElementsByClassName("item");

      if (n > slides.length - 1) {
        this.slideIndex = 1;
      }
      console.log(this.slideIndex);
      if (n < 1) {
        this.slideIndex = slides.length - 1;
      }
      for (let slide of slides) {
        slide.style.display = "none";
      }
      slides[this.slideIndex - 1].style.display = "block";
    },
  },
};
</script>
<style scoped>
img {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
}
.slider {
  max-width: 100%;
  position: relative;
}

.slider .previous,
.slider .next {
  cursor: pointer;
  position: absolute;
  width: auto;
  margin-top: 172px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  z-index: 3;
}

.slider .next {
  right: 0;
}
</style>