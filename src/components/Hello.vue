<template>
  <div class="hello">
    <h1>{{ hello.text }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['hello'])
  }
}
</script>
