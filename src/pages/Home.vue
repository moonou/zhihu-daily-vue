<template>
  <div class="home">
    <div class="container">
      <div class="list">列表</div>
      <div class="banner">轮播</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/jeet/index.scss';

.home {
  background-color: #f9f9f9;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  .container {
    margin-top: 100px;
    .list {
      @include column(1/4)
    }
    .banner {
      @include column(3/4)
    }
  }
}
</style>
