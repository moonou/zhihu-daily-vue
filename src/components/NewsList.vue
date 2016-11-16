<template>
  <div class="newslist">
   <ul v-for="_news in news">
     <li class="date"> {{ _news.date }} </li>
     <li v-for="newsitem in _news.stories" class="newsitem">
       <router-link :to="{
         name: 'content',
         params: {
           id: newsitem.id
         }
       }">
        <div class="title">{{ newsitem.title }}</div>
        <div class="image">
          <img :src="proxyserver + newsitem.images[0]" alt="">
        </div>
       </router-link>
    </li>
   </ul>
   <button class="more" @click="loadnext">加载更早的新闻</button>
  </div>
</template>

<script>
import { proxyserver } from 'src/common/api'
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  data () {
    return {
      proxyserver: proxyserver,
      dayindex: 0
    }
  },
  methods: {
    ...mapActions({
      updatenews: 'getNewsByDate',
      updatenewslatest: 'getNews'
    }),
    loadnext () {
      this.updatenews(moment().subtract(this.dayindex, 'days').format('YYYYMMDD'))
      this.dayindex++
    }
  },
  computed: {
    ...mapGetters(['news'])
  },
  created () {
    this.updatenewslatest()
    // this.updatenews(moment().format('YYYYMMDD'))
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/jeet/index.scss';

.newslist {
  ul {
    .date {
      text-align: center;
      background: #e3e3e3;
      font-size: 14px;
      color: #797979;
      padding: 2px 0;
      border-radius: 2px;
    }
    .newsitem {
      border-bottom: solid 1px #ddd;
      padding: 5px 0 0 0;
      cursor: pointer;
      >a {
        display: flex;
      }
      &:hover {
        background-color: #f5f5f5;
      }
      .title {
        flex: 0 0 (3/4)*100+%;
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #828181;
      }
      .image {
        flex: 0 0 (1/4)*100+%;
        width: 0;
        min-width: 20px;
        img {
          width: 100%;
          border-radius: 2px;
        }
      }
    }
  }
  .more {
    width: 100%;
    margin: 10px 0;
    padding: 8px;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
}
</style>
