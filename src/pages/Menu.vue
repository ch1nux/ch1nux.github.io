<template>
  <article class="grid menu">
    <router-link
      v-for="(option, index) in options"
      :key="index"
      :to="option.route"
      class="medium mono smooth"
    >
      <PresentationCard v-bind="option" />
    </router-link>
  </article>
</template>

<script>
import PresentationCard from './PresentationCard.vue'
import options from './../data/options.json'

export default {
  name: 'Menu',
  components: { PresentationCard },
  data () {
    return {
      options
    }
  }
}
</script>

<style lang="scss">
.menu {
  grid-template-columns: repeat(2, 1fr);
  grid-gap: .5rem;
  margin-bottom: 1rem;
}
</style>
