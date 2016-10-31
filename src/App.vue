<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getApi, getProxyApi } from 'src/common/api'

export default {
  mounted () {
    console.log(getProxyApi())
    fetch(getApi().startImage).then((data) => {
      console.log(data)
    })
  }
}
</script>
