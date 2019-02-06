<template>
  <div>
    <Menu />
    <section class="flex flex-center flex-left">
      <article class="container">
        <div class="flex text">
          <div class="image">
            <img
              class="squared"
              src="/logocp.svg"
              alt="About"
            >
          </div>
          <div class="content">
            <h3 class="large mono">
              Knowmad!
            </h3>
            <p>
              This <em>Phi</em> symbol is the 21th letter of the Greek Alphabet.
              Also, is the symbol to represent "The Golden Ratio", a mathematical
              representation of beauty in all things.
            </p>
            <p>
              Also is the symbol of many numeric constants in Physics, such the
              magnetic flux or/and the electric flux.
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
    <div class="container text">
      <p>
        This symbol also has two letters in its shape. A "c" and a "p",
        which is "conveniently" a short for <em>Chinux Paribus</em>, my
        nickname in almost every social network I have.
      </p>
      <p>
        <em>Chinux</em>
        is also a short for the fusion of two things I like most:
        Asian Culture (<em>Chi</em>-na) and Free Software (Li-<em>nux</em>,
        free as "speech"😉).
      </p>
      <p>
        <em>Paribus</em> is a Latin vocable that means "equal sharing", which
        is an ethic rule that I follow on everything I do.
      </p>
      <p>
        By the way, all of my projects share the same stack, which relies on web
        technologies (mostly Javascript, HTML5 and CSS3, but also PWA, Web
        APIs and SVG), with or without frameworks.
      </p>
    </div>
  </div>
</template>

<script>
import Menu from './Menu.vue'

export default {
  name: 'Know',
  components: { Menu },
  head: {
    title: '| Know'
  }
}
</script>
