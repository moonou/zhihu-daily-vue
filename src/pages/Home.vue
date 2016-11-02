<template>
  <div class="home">
    <div class="container">
      <div class="list">
        <div class="artcles">
          <div class="header">
            <a href="">每日阅读</a>
            <a href="">主题日报</a>
          </div>
          <div class="body">
            <ul v-for="_news in news">
              <li class="date"> {{ _news.date }} </li>
              <li v-for="newsitem in _news.stories" class="newsitem">
                <div class="title">{{ newsitem.title }}</div>
                <div class="image">
                  <img :src="proxyserver + newsitem.images[0]" alt="">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="banner">轮播</div>
    </div>
  </div>
</template>

<script>
import { proxyserver } from 'src/common/api'
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  data () {
    return {
      proxyserver: proxyserver
    }
  },
  methods: {
    ...mapActions({
      updatenews: 'getNewsByDate'
    })
  },
  computed: {
    ...mapGetters(['news'])
  },
  created () {
    this.updatenews(moment().format('YYYYMMDD'))
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/jeet/index.scss';

.home {
  background-color: #f9f9f9;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  .container {
    height: 100%;
    .list {
      @include column(1/3)
      height: 70%;
      margin-top: 100px;
      .artcles {
        height: 100%;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 1px 1px 10px -2px #bdbdbd;
        .header {
          background: #015668;
          height: 10%;
          box-shadow: 1px 1px 1px 1px #ddd;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          a {
            color: #fff;
            font-size: 17px;
            margin: 0 10px;
            text-decoration: none;
            transition: text-shadow .5s;
            &.active, &:hover{
              text-shadow: 0px 0px 13px #f1f1f1;
            }
          }
        }
        .body {
          height: 90%;
          background: #fff;
          overflow-y: scroll;
          padding: 5px 0 0 5px;
          ul {
            .date {
              text-align: center;
              background: #e3e3e3;
              font-size: 14px;
              color: #797979;
              padding: 5px 0;
              border-radius: 2px;
            }
            .newsitem {
              border-bottom: solid 1px #ddd;
              padding: 5px 0 0 0;
              display: flex;
              .title {
                flex: 0 0 (3/4);
              }
              .image {
                flex: 0 0 (1/4);
                width: 0;
                min-width: 20px;
                img {
                  width: 100%;
                }
              }
            }
          }
          &:hover {
            &::-webkit-scrollbar-thumb{
              background: rgba(222,222,222,0.7);
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
        }
      }

    }
    .banner {
      @include column(2/3)
    }
  }
}
</style>
