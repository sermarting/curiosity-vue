<template>
  <ImagesContainer />
</template>

<script lang="ts">
import Vue from 'vue'
import ImagesContainer from './../containers/ImagesContainer.vue'

export default Vue.extend({
  name: 'HomeView',
  components: {
    ImagesContainer
  }
})
</script>
