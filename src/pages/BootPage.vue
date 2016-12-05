<template>
  <div class="start_image">
    <transition name="start-image">
      <img v-if="show.bgimg" :src="proxyserver+startImage.img" :alt="startImage.text">
    </transition>
    <div class="mask">
      <transition name="start-text">
        <div v-if="show.text" class="text">图片来源：{{ startImage.text }}</div>
      </transition>
    </div>
    <div class="content">
      <transition name="start-btn">
        <router-link to="/home" class="btn" v-if="show.enterbtn" tag="button">查看知乎日报</router-link>
      </transition>
    </div>
    <div class="mask" v-if="show.loading">加载中...</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      show: {
        bgimg: false,
        text: false,
        enterbtn: false,
        loading: true
      }
    }
  },
  computed: {
    ...mapGetters({
      startImage: 'bootimage'
    })
  },
  watch: {
    'startImage.img': function () {
      this.startAnimate()
    }
  },
  methods: {
    ...mapActions({
      'getBootImage': 'getBootImage'
    }),
    startAnimate () {
      this.show.bgimg = true
      this.show.text = true
      this.show.enterbtn = true
      this.show.loading = false
    }
  },
  created () {
    this.getBootImage()
    if (this.startImage.img !== '') {
      this.startAnimate()
    }
  }
}
</script>

<style lang="scss">
.start_image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  img {
    width: 100%;
  }
  .mask, .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mask {
    .text {
      font-size: 30px;
      color: #fff;
      text-shadow: 0px 0px 5px #666;
    }
  }
  .content {
    .btn {
      background: none;
      border: solid 1px #ddd;
      color: #fff;
      padding: 5px 20px;
      border-radius: 4px;
      transform: translateY(60px);
      transition: all .6s ease-out;
      outline: none;
      text-shadow: 0px 0px 5px #666;
      &:hover {
        background-color: rgba(255, 255, 255, 0.55);
        cursor: pointer;
      }
    }
  }
}
</style>
