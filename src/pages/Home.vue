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
            <news-list></news-list>
          </div>
        </div>
      </div>
      <div class="banner">轮播</div>
    </div>
  </div>
</template>

<script>
import NewsList from 'src/components/NewsList'

export default {
  name: 'home_page',
  components: {
    NewsList
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
          background: #9fccd6;
          height: 7%;
          box-shadow: 1px 1px 1px 1px #ddd;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          a {
            color: #fff;
            font-size: 14px;
            margin: 0 10px;
            text-decoration: none;
            transition: text-shadow .5s;
            cursor: pointer;
            &.active, &:hover{
              text-shadow: 0px 0px 13px #000;
            }
          }
        }
        .body {
          height: 90%;
          background: #fff;
          overflow-y: scroll;
          padding: 5px 0 0 5px;
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
      @include column(2/3)
    }
  }
}
</style>
