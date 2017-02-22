<template>
  <div>
  <div v-if="data" class="content_page">
    <div :class="['header',{'active': headop === 1}]" :style="{ background: 'rgba(7, 97, 125, ' + headop + ')'}">
      <div class="home">
        <router-link :to="{
          name: 'home'
        }">
          <i class="iconfont icon-home"></i>
        </router-link>
      </div>
    </div>
    <div class="backpanel">
      <img :src="proxyserver + data.image" v-if="data.image" alt="">
      <img :src="proxyserver + data.images[0]" v-if="data.images" alt="">
      <div class="imagecopy">背景图来源：{{ data.image_source }}</div>
    </div>
    <div class="page" @scroll="scroll($event)">
      <div class="content">
        <div class="title">{{ data.title }}</div>
        <div class="html">
          <p v-html="data.body" class="typo"></p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="loading">
    <div class="panel">加载中...</div>
  </div>
  </div>
</template>

<script>
import { getApi, proxyserver } from 'src/common/api'

export default {
  name: 'Content',
  data () {
    return {
      newsid: 4772126,
      data: undefined,
      proxyserver: proxyserver,
      headop: 0
    }
  },
  created () {
    if (this.$route.params.id) {
      this.newsid = this.$route.params.id
    }
    fetch(`${getApi().news.content}/${this.newsid}`).then((data) => {
      return data.json()
    }).then((data) => {
      if (data.type === 1) {
        this.$router.push({
          name: 'theme',
          params: {
            id: data.theme.id
          }
        })
      } else {
        data.body = this.fixImageUrl(data.body)
        this.data = data
      }
    })
  },
  methods: {
    fixImageUrl (data) {
      return data.replace(/src="http/g, `src="${proxyserver}http`)
    },
    scroll (e) {
      var top = e.target.scrollTop
      if (top < 330) {
        this.headop = top / 330
      } else {
        this.headop = 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.backpanel {
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  overflow: hidden;
  background-color: #ddd;
  height: 30vw;
  img {
    width: 100%;
    filter: blur(10px);
    transform: scale(1.2);
  }
  .imagecopy {
    position: absolute;
    top: 28vw;
    left: 30px;
    color: #fff;
    text-shadow: 1px 1px 1px #666;
  }
}
.header {
  color: #fff;
  padding: 20px 30px;
  box-sizing: border-box;
  background: rgba(0,0,0,.0);
  position: fixed;
  z-index: 2;
  width: 100%;
  transition: background .6s ease-out;
  &.active {
    box-shadow: 0px 2px 22px -1px #424242;
  }
  .home {
    i {
      transition: all .1s ease-out;
      display: inline-block;
      color: #fff;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
.content_page {
  .page {
    width: 100%;
    position: absolute;
    z-index: 1;
    height: 100%;
    top: 0;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    &:hover {
      &::-webkit-scrollbar-thumb{
        background: rgba(100,100,100,1);
      }
    }
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-button {
    }
    &::-webkit-scrollbar-track {
    }
    &::-webkit-scrollbar-track-piece {
    }
    &::-webkit-scrollbar-thumb{
      background: rgba(222,222,222,0.0);
      border-radius: 4px;
      transition: all .4s ease;
    }
    .content {
      width: 60%;
      background-color: #fff;
      margin: 400px auto 50px auto;
      box-shadow: 4px 4px 10px -1px #ddd;
      border-radius: 4px;
      border: solid 1px #eee;
      .title {
        box-sizing: border-box;
        padding: 20px 10px;
        font-size: 20px;
        border-bottom: solid 1px #eee;
      }
      .html {
        box-sizing: border-box;
        padding: 20px 10px;
        font-size: 15px;
        .view-more {
          a {
            border: solid 1px #eee;
          }
        }
      }
    }
  }
}
.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 4;
  >.panel {
      padding:10px 30px;
      background-color: #fff;
      border:solid 1px #eee;
      border-radius: 4px;
      box-shadow: 2px 2px 20px -2px #ccc;
  }
}
@media screen and (max-width: 767px) {
  .backpanel {
    height: 50vh;
  }
  .header {
    padding:10px 20px;
  }
  .content_page {
    .page {
      .content {
        width: 95%;
        margin: 200px auto 50px auto;
      }
    }
  }
}
</style>
