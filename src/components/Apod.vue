<template>
  <div>
    <h1>Astronomy Picture of the Day:</h1>
    <h2>{{ title }}</h2>
    <Card class="image__card">
      <div class="image__img"><img :src="image" alt="" /></div>
    </Card>
  </div>
</template>

<script lang="ts">
import Card from './Card.vue'
import { Image } from '@/models/Image'
import Vue from 'vue'

export default Vue.extend({
  name: 'Apod',
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  components: {
    Card
  }
})
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.3em;
  font-style: italic;
  text-align: center;
}
.image__img {
  margin: 20px;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
