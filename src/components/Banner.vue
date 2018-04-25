<template>
  <div class="banner_component">
    <div class="content">
      <div v-if="news[0]">
        <transition name="banner">
          <div
            class="panel"
            v-for="(story, index) in news[0].top_stories"
            v-if="activeindex === index+1"
            :key="index"
          >
            <router-link :to="{
              name: 'content',
              params: {
                id: story.id
              }
            }">
              <img :src="proxyserver + story.image" alt="">
              <div class="mask">
                <div class="title">{{ story.title }}</div>
              </div>
            </router-link>
          </div>
        </transition>
      </div>
      <div class="dotpanel">
        <ul class="dots" v-if="news[0]">
          <li
            v-for="dotindex in news[0].top_stories.length"
            :class="[{active: dotindex === activeindex}]"
            @click=" activeindex = dotindex"
            :key="dotindex"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { proxyserver } from 'src/common/api'
import { mapGetters } from 'vuex'

let interv
export default {
  data () {
    return {
      proxyserver: proxyserver,
      activeindex: 1
    }
  },
  created () {
    if (interv) {
      clearInterval(interv)
    }
    interv = setInterval(() => {
      if (this.news[0]) {
        let newslength = this.news[0].top_stories.length
        if (newslength > 0) {
          this.activeindex === newslength ? this.activeindex = 1 : this.activeindex++
        }
      }
    }, 8000)
  },
  beforeDestory () {
    if (interv) {
      clearInterval(interv)
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters(['news'])
  }
}
</script>

<style lang="scss" scoped>

  .banner_component {
    height: 100%;
    .content {
      background-color: #fff;
      width: 100%;
      margin: 0 0 0 auto;
      height: 100%;
      border-radius: 4px;
      box-shadow: 1px 1px 10px 1px #ddd;
      overflow: hidden;
      position: relative;
      .panel {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        img {
          transition: all .4s ease-out;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%) scale(1);
        }
        &:hover {
          img {
            transform: translateY(-50%) translateX(-50%) scale(1.1);
          }
        }
        .mask {
          position: absolute;
          top: 10%;
          left: 0%;
          padding:5px 20px;
          width: 100%;
          box-sizing: border-box;
          background: rgba(0, 0, 0, .6);
          border-top: solid 1px #ddd;
          border-bottom: solid 1px #ddd;
          .title {
            font-size: 20px;
            color: #fff;
            text-shadow: 0 0 3px #000;
          }
        }
      }
      .dotpanel {
        position: absolute;
        bottom: 5%;
        left: 5%;
        width: auto;
        .dots {
            li {
              width: 12px;
              height: 12px;
              background: #fff;
              display: inline-block;
              border-radius: 50%;
              margin-right: 10px;
              box-shadow: inset 1px 1px 4px #656565;
              cursor: pointer;
              &.active {
                background: #9fccd6;
                box-shadow: 1px 1px 4px #000;
              }
            }
          }
      }
    }
  }
@media screen and (max-width: 767px) {
  .banner_component {
    .content {
      width: 100%;
    }
  }
}
</style>
