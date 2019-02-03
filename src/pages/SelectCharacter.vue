<template>
  <article class="grid selection">
    <div>
      &nbsp;
    </div>
    <Character
      v-for="(char, i) in selection()"
      :key="i"
      v-bind="char"
    />
    <div>
      &nbsp;
    </div>
  </article>
</template>

<script>
import options from './../data/options.json'
import Character from './Character.vue'

export default {
  name: 'SelectCharacter',
  components: { Character },
  methods: {
    selection () {
      return options.filter(
        option => option.route !== this.$router.currentRoute.fullPath
      )
    }
  }
}
</script>

<style lang="scss">
.selection {
  grid-template-columns: 1fr repeat(3, 1fr) 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
}
</style>
