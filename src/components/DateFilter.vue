<template>
  <div>
    <h1>Filter</h1>
    <div class="date-filter">
      <input type="text" v-model="value" /> <button type="button" @click="filter">Search</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DateFilter',
  data: (): {
    value: string
  } => ({
    value: '2016-04-15'
  }),
  mounted() {
    this.filter()
  },
  methods: {
    filter() {
      this.$emit('on-filter', this.value)
    }
  }
})
</script>

<style lang="scss" scoped>
.date-filter {
  margin: var(--spaced) 0;
  > * {
    font-size: 16px;
  }
}
</style>
