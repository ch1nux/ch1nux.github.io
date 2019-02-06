<template>
  <div>
    <Menu />
    <section class="flex flex-left flex-center">
      <article class="container">
        <div class="flex text">
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
              Let's get in touch, shall we? <br>You can follow me here
              <a
                class="smooth terran"
                href="https://twitter.com/ch1nux"
                target="_blank"
              >
                🐦
              </a>
              or message me here
              <a
                class="smooth terran"
                href="https://linkedin.com/in/jhonygrillet"
                target="_blank"
              >
                🏢
              </a>
              , or chat with me here
              <a
                class="smooth terran"
                href="https://t.me/ch1nux"
                target="_blank"
              >
                💬
              </a>
              .
            </p>
            <p>
              You can either
              <a
                href="/resume.pdf"
                target="_blank"
                class="smooth terran"
              >
                download my resume
              </a>
              or check another options on the menu
            </p>
          </div>
        </div>
      </article>
    </section>
    <div class="container grid contact-grid">
      <div class="card text rounded has-shadow color-slides">
        <h4 class="medium mono align-center">
          Presentations
        </h4>
        <ul>
          <li
            v-for="(slide, i) in slides"
            :key="i"
            class="flex flex-left slide"
          >
            <a
              :href="slide.link"
              target="_blank"
              class="smooth coral"
            >
              <img
                class="squared-small hidden-on-mobile"
                :src="slide.image"
                alt="slide"
              >
              <span class="slide-content">
                {{ slide.description }}<br>{{ slide.placement }}
              </span>
            </a>
          </li>
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
            class="smooth terran"
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
            class="smooth terran"
          >
            So, here it is.
          </a>
          It was made with
          <a
            href="https://vuepress.vuejs.org/"
            target="_blank"
            class="smooth terran"
          >
            VuePress
          </a>
          and 💕
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import slides from './../data/slides.json'
import Menu from './Menu.vue'

export default {
  name: 'Contact',
  components: { Menu },
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
  background-color: $terran-blue !important;
}
.contact {
  background-color: $metal-blue !important;
}
.contact-grid {
  margin: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
.slide {
  margin: .5rem 0;
}
.slide-content {
  display: inline-block;
  margin-left: 1rem;
}
</style>
