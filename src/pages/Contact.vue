<template>
  <section class="container">
    <article class="card contact text flex rounded flex-top has-shadow mobile-card">
      <div class="image">
        <img
          class="squared"
          src="/WTF.png"
          alt="contact"
        >
      </div>
      <div class="content">
        <h3 class="large mono">
          Wat r u doing?
        </h3>
        <p>
          Well, glad you ask. I've done a couple of things...
        </p>
        <p>
          I can do more if you ask nicely 🤓
        </p>
        <p>
          Let's get in touch, shall we? You can follow me here
          <a
            class="smooth"
            href="https://twitter.com/ch1nux"
            target="_blank"
          >
            🐦
          </a>
          or message me here
          <a
            class="smooth"
            href="https://linkedin.com/in/jhonygrillet"
            target="_blank"
          >
            🏢
          </a>
          , or chat with me here
          <a
            class="smooth"
            href="https://t.me/ch1nux"
            target="_blank"
          >
            💬
          </a>
        </p>
        <ToHome />
      </div>
    </article>
    <article class="grid contact-grid">
      <div class="card text rounded has-shadow color-slides">
        <h4 class="medium mono align-center">
          Presentations
        </h4>
        <ul>
          <Slide
            v-for="(slide, i) in slides"
            :key="i"
            v-bind="slide"
          />
        </ul>
      </div>
      <div class="card text rounded has-shadow color-blog">
        <h4 class="medium mono align-center">
          Blog
        </h4>
        <p>
          Some time ago, I post something about the Universe, but
          <a
            href="https://jotaeseymas.wordpress.com/2015/01/18/dicen-que-el-universo/"
            target="_blank"
          >
            "can't remember where" 🤔
          </a>
          . In there, I talked about a way to define or create an entire universe within
          two parameters, between a 0 and a 1, for example, or within two HTML
          tags.
        </p>
        <p>
          As every universe created according to Chaos Theory, is prone to expand or
          contract, and as far as I see it, the last universe I created, didn't
          convince me so much neither. But me, as its creative chaos, I decided
          to build a new universe, larger than ever, because the expansion
          suffered before is not only for me, but for many people who have
          experienced the vertiginous Javascript ascent (or descent, <em>as well</em> 😅)
        </p>
        <p>
          <a
            href="https://jotaeseymas.surge.sh"
            target="_blank"
          >
            So, here it is.
          </a>
          It was made with
          <a
            href="https://vuepress.vuejs.org/"
            target="_blank"
          >
            VuePress
          </a>
          and 💕
        </p>
      </div>
    </article>
    <SelectCharacter />
  </section>
</template>

<script>
import slides from './../data/slides.json'
import Slide from './Slide.vue'
import ToHome from './ToHome.vue'
import SelectCharacter from './SelectCharacter.vue'

export default {
  name: 'Contact',
  components: { ToHome, SelectCharacter, Slide },
  head: {
    title: '| Contact'
  },
  data () {
    return {
      slides
    }
  }
}
</script>

<style lang="scss">
.color-blog {
  background-color: #D25349 !important;
}
.color-slides {
  background-color: $color-1 !important;
}
.contact {
  background-color: $color-2 !important;
}
.contact-grid {
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
</style>
