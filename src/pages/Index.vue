<template>
  <div>
    <Menu />
    <section class="flex flex-left flex-center">
      <article class="container">
        <EasterEgg />
      </article>
    </section>
    <div class="container text">
      <p>
        I'm passionated for Javascript (mostly
        <a
          href="https://vuejs.org"
          target="_blank"
          class="smooth coral"
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
          class="smooth coral"
        >
          array of emojis.
        </a>
      </p>
      <p>
        You can either
        <a
          href="/resume.pdf"
          target="_blank"
          class="smooth coral"
        >
          download my resume
        </a>
        or check another options on the menu
      </p>
    </div>
  </div>
</template>

<script>
import EasterEgg from './EasterEgg.vue'
import Menu from './Menu.vue'

export default {
  name: 'Index',
  components: { EasterEgg, Menu },
  head: {
    title: '| Hello, World!'
  }
}
</script>
