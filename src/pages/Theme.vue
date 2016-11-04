<template>
  <div v-if="data">
    <div class="header">
      123
    </div>
    <div class="backpanel">
      <img :src="proxyserver + data.image" alt="">
    </div>
  </div>
</template>

<script>
import { getApi, proxyserver } from 'src/common/api'

export default {
  data () {
    return {
      themeid: 2,
      data: undefined,
      proxyserver: proxyserver
    }
  },
  created () {
    fetch(getApi().themes.content + '/' + this.themeid).then((data) => {
      return data.json()
    }).then((data) => {
      this.data = data
    })
  }
}
</script>

<style lang="scss" scoped>
.backpanel {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    filter: blur(10px);
    transform: scale(1.2);
  }
}
</style>
