<template>
  <div id="app">
    <router-view></router-view>
    <img :src="'http://104.251.231.206:3000/?target='+startImage.img" :alt="startImage.text">
  </div>
</template>

<script>
import { getApi } from 'src/common/api'

export default {
  data () {
    return {
      startImage: {
        text: '',
        img: ''
      }
    }
  },
  mounted () {
    fetch(getApi().startImage).then((data) => {
      return data.json()
    }).then((data) => {
      this.startImage = data
    })
  }
}
</script>
