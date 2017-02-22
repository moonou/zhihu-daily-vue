<template>
  <div class="theme_container">
      <div  v-if="data" class="panel">
        <div class="left">
          <img :src="proxyserver + data.background" alt="">
          <div class="mask">
            <div class="title"><h1>{{ data.name }}</h1></div>
            <div class="description">{{ data.description }}</div>
          </div>
        </div>
        <div class="right">
          <ul class="list">
            <li v-for="story in data.stories">
              <router-link :to="{
                name: 'content',
                params: {
                  id: story.id
                }
              }">
              <div class="item"  v-if="story.images">
                <div class="text">
                  <div class="title">{{ story.title }}</div>
                </div>
                <div class="image">
                  <img :src="proxyserver + story.images[0]" alt="">
                </div>
              </div>
              <div class="item_title" v-else>
                <div class="title">{{ story.title }}</div>
              </div>
              </router-link>
            </li>
          </ul>
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
  data () {
    return {
      themeid: 2,
      data: undefined,
      proxyserver: proxyserver
    }
  },
  created () {
    if (this.$route.params.id) {
      this.themeid = this.$route.params.id
    }
    fetch(getApi().themes.content + '/' + this.themeid).then((data) => {
      return data.json()
    }).then((data) => {
      this.data = data
    })
  }
}
</script>

<style lang="scss" scoped>
.theme_container {
  display: flex;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  >.panel {
    max-width: 1024px;
    width: 85%;
    height: 70%;
    display: flex;
    box-shadow: 5px 5px 70px -1px #999;
    border-radius: 4px;
    overflow: hidden;
    >.left {
      flex: 0 0 35%;
      position: relative;
      overflow: hidden;
      >img {
        filter: blur(5px);
        transform: scale(1.2)
      }
      .mask {
        position: absolute;
        top: 0;
        color: #fff;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .title {
          h1 {
            color: #fff;
          }
        }
      }
    }
    >.right {
      flex: 0 0 65%;
      background-color: #f3f3f3;
      overflow-y: scroll;
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
      .list {
        li {
          border-top: solid 1px #ddd;
          border-bottom: solid 1px #ddd;
          margin-bottom: 10px;
          background-color: #fff;
          cursor: pointer;
          transition: all .5s ease;
          &:hover {
            background-color: #ddd;
          }
          .item {
            display: flex;
            .text {
              flex: 0 0 70%;
              display: flex;
              align-items: center;
              padding-left: 10px;
              box-sizing: border-box;
            }
            .image {
              flex: 0 0 30%;
              display: flex;
              align-items: center;
              padding-left: 10px;
              box-sizing: border-box;
              img {
                width: 100%;
              }
            }
          }
          .item_title {
            text-align: center;
            padding: 20px 0;
          }
        }
      }
    }
  }
  .loading {
    position: absolute;
    .panel {
      padding:10px 30px;
      background-color: #fff;
      border:solid 1px #eee;
      border-radius: 4px;
      box-shadow: 2px 2px 20px -2px #ccc;
    }
  }
}
@media screen and (max-width: 767px) {
  .theme_container {
    >.panel {
      width: 95%;
      height: 100%;
      margin: 60px 0 20px 0;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      flex-wrap: wrap;
      box-shadow: 2px 2px 10px -1px #999;
      background-color: #fff;
      >.left {
        flex: 0 0 100%;
        height: 200px;
      }
      >.right {
        flex: 0 0 100%;
      }
    }
  }
}
</style>
