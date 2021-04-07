<template>
  <div>
    {{ getTotalImages }}
    <DateFilter @on-filter="onFilter" />
    <hr />
    <Apod :title="apod.title" :image="apod.image" />
    <ImagesList :images="images" />
  </div>
</template>

<script>
import Vue from 'vue'
import ImagesList from '@/components/ImagesList.vue'
import DateFilter from '@/components/DateFilter.vue'
import Apod from '@/components/Apod.vue'
import { mapActions, mapState, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'ImagesContainer',
  components: {
    ImagesList,
    DateFilter,
    Apod
  },
  computed: {
    ...mapState(['images', 'apod']),
    ...mapGetters(['getTotalImages'])
  },
  methods: {
    ...mapActions(['FETCH_IMAGES', 'FETCH_APOD']),
    onFilter(event) {
      this.FETCH_APOD(event)
      this.FETCH_IMAGES(event)
    }
  }
})
</script>
