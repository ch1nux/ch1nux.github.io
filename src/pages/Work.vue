<template>
  <div>
    <Menu />
    <section class="flex flex-center flex-left">
      <article class="container">
        <div class="flex text">
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
              Y'know, the kind of stuff that cats know how to code...
            </p>
            <p>
              Links to:
              <span class="dict">
                ⚓🌎
              </span>
              a webpage |
              <span class="dict">
                💻🖊️
              </span>
              a CodePen Project |
              <span class="dict">
                🐙🐱
              </span>
              a Github repository
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
    <div class="container grid work-grid">
      <div class="card has-shadow rounded align-center">
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
    </div>
  </div>
</template>

<script>
import works from './../data/works.json'
import Menu from './Menu.vue'
import WorkCard from './WorkCard.vue'

export default {
  name: 'Work',
  components: { WorkCard, Menu },
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
.work-grid {
  margin: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>
