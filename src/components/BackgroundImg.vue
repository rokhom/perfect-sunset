<template>
  <div>
    <div class="slider">      
      <div class="item">
        <img src="https://live.staticflickr.com/65535/51470208705_d86b52275c_b.jpg"/>
      </div>     
      <div class="item">
        <img src="https://live.staticflickr.com/65535/51470209490_71e4a8690b_b.jpg"/>
      </div>      
      <div class="item">
        <img src="https://live.staticflickr.com/65535/51469270446_066fd49d07_b.jpg"/>
      </div>
      <div class="item">
        <img src="https://live.staticflickr.com/65535/51469998479_fb373dfc5c_b.jpg"/>
      </div>
      <div class="item">
        <img src="https://live.staticflickr.com/65535/51470213705_18bebcc17e_b.jpg"/>
      </div>
      <div class="item">
        <img src="https://live.staticflickr.com/65535/51469268041_0708ea7914_b.jpg"/>
      </div>      
      <div class="item">
        <img src="https://live.staticflickr.com/65535/51470214700_91a32fd1be_b.jpg"/>
      </div>
      <div class="item">
        <img src="https://live.staticflickr.com/65535/51470209735_e0a216265f_b.jpg"/>
      </div>      
      <div class="item">
        <img src="https://live.staticflickr.com/65535/51469522398_61195a31cd_b.jpg"/>
      </div>
      <div class="previous" @click="previousSlide()">&#10094;</div>
      <div class="next" @click="nextSlide()">&#10095;</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slideIndex: 0,
      /* showSlides: null, */
      /* imgUrl: 'https://live.staticflickr.com/65535/51470212945_3c4ae10008_b.jpg',
      imgArray: [
        'https://live.staticflickr.com/65535/51470212945_3c4ae10008_b.jpg',
        'https://live.staticflickr.com/65535/51469268041_0708ea7914_b.jpg',
        'https://live.staticflickr.com/65535/51470208705_d86b52275c_b.jpg',
        'https://live.staticflickr.com/65535/51470209490_71e4a8690b_b.jpg'
      ] */
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

      if (n > slides.length - 2) {
        this.slideIndex = 1;
      }
      console.log(this.slideIndex);
      if (n < 1) {
        this.slideIndex = slides.length - 2;
      }
      for (let slide of slides) {
        slide.style.display = "none";
      }
      slides[this.slideIndex - 1].style.display = "block";

      /* nextSlide() {
      this.slideIndex = this.slideIndex < this.imgArray.length-1 ? this.slideIndex +1 : 0
      console.log(this.slideIndex)
      this.imgUrl = this.imgArray[this.slideIndex]
    },

    previousSlide() {
      this.slideIndex = this.slideIndex < this.imgArray.length-1 ? this.imgArray.length-1 : this.slideIndex -1
      console.log(this.slideIndex)
      this.imgUrl = this.imgArray[this.slideIndex]
    }, */
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