<template>
  <div class="themes">
    <ul>
      <li v-for="theme in themes.others">
        <router-link :to="{
          name: 'theme',
          params: {
            id: theme.id
          }
        }">
          <div class="theme_item">
            <div class="left">
              <div class="name">{{theme.name}}</div>
              <div class="description">{{theme.description}}</div>
            </div>
            <div class="image">
              <img :src="proxyserver+theme.thumbnail" alt="">
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { proxyserver } from 'src/common/api'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['themes'])
  },
  methods: {
    ...mapActions(['getThemes'])
  },
  data () {
    return {
      proxyserver: proxyserver
    }
  },
  created () {
    this.getThemes()
  }
}
</script>

<style lang="scss" scoped>
.themes {
  .theme_item {
    display: flex;
    border-bottom: solid 1px #ddd;
    padding: 5px 0 0 0;
    transition: all .3s ease;
    &:hover {
      background-color: #f5f5f5;
    }
    .left {
      flex: 0 0 (3/4)*100+%;
      cursor: pointer;
      .name {
        font-size: 15px;
      }
      .description {
        color: #757575;
      }
    }
    .image {
      flex: 0 0 (1/4)*100+%;
      img {
        max-width: 100%;
        border-radius: 2px;
      }
    }
  }
}
</style>
