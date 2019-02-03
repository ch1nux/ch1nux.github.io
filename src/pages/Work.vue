<template>
  <section class="container">
    <article class="card work text flex flex-top has-shadow mobile-card">
      <div class="image">
        <img
          src="/avatar-cat.gif"
          alt=""
          class="squared"
        >
      </div>
      <div class="content">
        <h3 class="large mono">
          Cat stuffs...
        </h3>
        <p>
          Y'know, the kind of stuff that cats who knows how to code...
        </p>
        <p class="mono">
          ¯\_(ツ)_/¯
        </p>
        <ToHome />
      </div>
    </article>
    <article class="grid work-grid">
      <div class="card has-shadow align-center">
        <span class="mono">
          💖 this.portfolio
        </span>
        <p class="x-small text">
          It deserves some credit, huh? 😅
        </p>
      </div>
      <WorkCard
        v-for="(job, i) in works"
        :key="i"
        v-bind="job"
      />
    </article>
    <SelectCharacter />
  </section>
</template>

<script>
import works from './../data/works.json'
import WorkCard from './WorkCard.vue'
import ToHome from './ToHome.vue'
import SelectCharacter from './SelectCharacter.vue'

export default {
  name: 'Work',
  components: { WorkCard, ToHome, SelectCharacter },
  head: {
    title: '| Work'
  },
  data () {
    return {
      works
    }
  }
}
</script>

<style lang="scss">
.work {
  background: $color-3 !important;
}
.work-grid {
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>
