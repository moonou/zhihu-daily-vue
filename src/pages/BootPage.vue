<template>
  <div class="start_image">
    <transition name="start-image">
      <img v-if="show.bgimg" :src="'http://104.251.231.206:3000/?target='+startImage.img" :alt="startImage.text">
    </transition>
    <div class="mask">
      <transition name="start-text">
        <div v-if="show.text" class="text">摄影：{{ startImage.text }}</div>
      </transition>
    </div>
    <div class="content">
      <transition name="start-btn">
        <button class="btn" v-if="show.enterbtn">查看知乎日报</button>
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
      this.show.bgimg = true
      this.show.text = true
      this.show.enterbtn = true
      this.show.loading = false
    }
  },
  methods: {
    ...mapActions({
      'getBootImage': 'getBootImage'
    })
  },
  created () {
    this.getBootImage()
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
    }
  }
  .content {
    .btn {
      background: none;
      border: solid 1px #ddd;
      color: #fff;
      padding: 10px 20px;
      border-radius: 4px;
      transform: translateY(60px);
      transition: all .6s ease-out;
      outline: none;
      &:hover {
        background-color: rgba(255, 255, 255, 0.55);
        cursor: pointer;
      }
    }
  }
}
</style>
