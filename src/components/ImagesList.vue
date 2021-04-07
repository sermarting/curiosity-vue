<template>
  <div>
    <h1>Curiosity:</h1>
    <div class="images-list">
      <p v-if="images.length === 0">No results fund</p>
      <Card v-else v-for="image in images" :key="image.id" class="images-list__card">
        <div class="images-list__img"><img :src="image.img_src" alt="" /></div>

        <div class="images-list__info">
          <h2>{{ image.camera.full_name }}</h2>
          <span>{{ image.earth_date }}</span>
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Card from './Card.vue'
import { Image } from '@/models/Image'
import Vue from 'vue'

export default Vue.extend({
  name: 'ImagesList',
  props: {
    images: {
      type: Image,
      default: []
    }
  },
  components: {
    Card
  }
})
</script>

<style lang="scss" scoped>
.images-list {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  &__card {
    display: flex;
    flex-direction: row;
    height: 200px;
    width: 100%;
    margin: var(--spaced) 0;
  }
  &__img {
    flex: 2;
  }
  &__img > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__info {
    padding: var(--spaced);
    flex: 1;
  }
}
</style>
