<template>
  <div class="hello">
    <h1>{{ hello.text }}</h1>
    <ul>
     <li v-for="n in 10">
      <h3>{{ n }}</h3>
     </li>
    </ul>
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
