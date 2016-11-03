<template>
  <div>
    <ul>
      <li v-for="theme in themes.others"></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['themes'])
  },
  methods: {
    ...mapActions(['getThemes'])
  },
  created () {
    this.getThemes()
  }
}
</script>
