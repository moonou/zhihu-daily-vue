<template>
  <div class="home">
    <div class="container">
      <div class="banner">
        <banner></banner>
      </div>
      <div class="list">
        <div class="artcles">
          <div class="header">
            <a :class="[{active: activeView === 'NewsList'}]" @click="changeView('NewsList', 'left')">每日阅读</a>
            <a :class="[{active: activeView === 'ThemeList'}]" @click="changeView('ThemeList', 'right')">主题日报</a>
          </div>
          <div class="body">
            <transition :name="list_animation">
              <component v-bind:is="activeView" class="view">
              </component>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div id="points"></div>
  </div>
</template>

<script>
import NewsList from 'src/components/NewsList'
import ThemeList from 'src/components/ThemeList'
import Banner from 'src/components/Banner'

export default {
  name: 'home_page',
  components: {
    NewsList,
    ThemeList,
    Banner
  },
  data () {
    return {
      activeView: 'NewsList',
      list_animation: 'fade-side-left'
    }
  },
  mounted () {
    particlesJS.load('points', './static/points.json', () => {
    })
  },
  methods: {
    changeView (viewname, direction) {
      this.list_animation = 'fade-side-' + direction
      this.activeView = viewname
    }
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
  overflow: hidden;
  #points {
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }
  .container {
    height: 100%;
    z-index: 1;
    .list {
      @include column(1/3);
      height: 70%;
      margin-top: 100px;
      .artcles {
        height: 100%;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 1px 1px 10px -2px #bdbdbd;
        .header {
          background: #07617D;
          height: 10%;
          box-shadow: 1px 1px 1px 1px #ddd;
          display: flex;
          justify-content: center;
          align-items: center;
          a {
            color: #fff;
            font-size: 14px;
            margin: 0 15px;
            text-decoration: none;
            transition: text-shadow .5s;
            cursor: pointer;
            &.active, &:hover{
              text-shadow: 0px 0px 13px #eee;
            }
          }
        }
        .body {
          height: 90%;
          background: #fff;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          padding: 5px 0 0 5px;
          position: relative;
          .view {
            position: absolute;
            top: 5px;
          }
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
        }
      }

    }
    .banner {
      @include column(2/3);
      margin-top: 100px;
      height: 70%;
    }
  }
}

@media screen and (max-width: 767px) {
  .home {
    .container {
      overflow: scroll;
      padding: 0 10px;
      .list {
        @include column(1/1);
        margin-top: 20px;
      }
      .banner {
        @include column(1/1);
        height: 50%;
        margin-top: 20px;
      }
    }
  }
}

</style>
