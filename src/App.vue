<template>
  <div id="app">
    <div id="stars" />
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './styles/keyframes';
@import './styles/variables';
@import './styles/mixins/_font-face';
@include font-face(Star-Jedi, 'starjedi', 'starjedi');
@include font-face(Game-Over, 'game_over', 'game_over');

html, {
  height: 100%;
  background: $color-background;
}

html, body, #app {
  height: 100%;
  margin: 0;
}

#stars {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: $shadows-stars;
  animation: animStar 50s linear infinite;
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-stars;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: black;
  display: flex;
}
</style>
