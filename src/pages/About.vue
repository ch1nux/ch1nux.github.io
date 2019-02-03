<template>
  <section class="container">
    <article class="card about text flex rounded flex-top has-shadow mobile-card">
      <div class="image">
        <img
          class="squared"
          src="/YO.jpg"
          alt="yo"
        >
      </div>
      <div class="content">
        <h3 class="large mono">
          It's me.
        </h3>
        <p>
          Hi, my name is Jhony. Nice to meet you!.
        </p>
        <p>
          I'm passionated for Javascript (mostly
          <a
            href="https://vuejs.org"
            target="_blank"
            class="smooth"
          >
            Vue.js
          </a>
          ), Web Design, SVG Animations, 🥑 and emojis! 😊
        </p>
        <p>
          I can define myself as an
          <a
            href="https://twitter.com/ch1nux/status/1086289075248787456"
            target="_blank"
            class="smooth"
          >
            array of emojis!
          </a>
        </p>
        <ToHome />
      </div>
    </article>
    <SelectCharacter />
  </section>
</template>

<script>
import ToHome from './ToHome.vue'
import SelectCharacter from './SelectCharacter.vue'

export default {
  name: 'About',
  components: { ToHome, SelectCharacter },
  head: {
    title: '| About'
  }
}
</script>

<style lang="scss">
.about {
  background-color: $color-1 !important;
}
</style>
