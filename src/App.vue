<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getApi } from 'src/common/api'

export default {
  mounted () {
    console.log(getApi())
    fetch(getApi().startImage).then((data) => {
      console.log(data)
    })
  }
}
</script>
