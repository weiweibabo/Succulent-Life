<template>
  <div class="carousel">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      :interval="4000"
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide :img-src="require('@/assets/img/workshop/workshop-8.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/img/workshop/workshop-7.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/img/workshop/workshop-6.jpg')" />
    </b-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
