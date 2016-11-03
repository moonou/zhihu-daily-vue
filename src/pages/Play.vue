<template>
  <div>
    <div class="flexbox">
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
  </div>
</template>

<style lang="scss">
  .flexbox {
    display: flex;
  }
  .left {
    background-color: #ddd;
    flex: 0 0 30%;
  }
  .right {
    background-color: #e3e3e3;
    flex: 0 0 70%;
  }
</style>
