<template>
  <section class="container">
    <article class="card flex flex-start has-shadow rounded text mobile-card">
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
  name: 'Know',
  components: { ToHome, SelectCharacter },
  head: {
    title: '| Know'
  }
}
</script>

<style lang="scss">
</style>
