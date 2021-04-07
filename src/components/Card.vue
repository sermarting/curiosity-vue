<template>
  <section class="card"><slot /></section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Card'
})
</script>

<style scoped>
.card {
  box-shadow: var(--box-shadow);
}
</style>
