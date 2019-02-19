<template>
  <div class="loader">
    <img class="loader__image"
         src="https://s3.amazonaws.com/star-wars-challenge/bb8.gif"
         alt="BB8 Loader">
    <h4 class="loader__title">Loading...</h4>
  </div>
</template>

<script>
  export default {
    name: "Loading"
  }
</script>

<style scoped lang="scss">
@import '../styles/_keyframes';
.loader {
  .loader__image {
    width: 200px;
    margin-top: 20vh;
  }
  .loader__title {
    animation: blinker 1s linear infinite;
    font-family: 'Game-Over';
    color: #FFFFFF;
  }
}
</style>