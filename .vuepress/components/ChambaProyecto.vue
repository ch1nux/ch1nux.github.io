<template>
  <section class="container">
    <article
      class="flex work"
      v-for="work in workList"
      :style="setBorder(work)"
    >
      <div
        :style="{ 'background-color': work.color }"
        class="flex flex-centered"
      >
        <span class="centered work-identifier">
          {{ work.identifier }} {{ detectEmoji(work) }}
        </span>
      </div>
      <div class="work-detail padded">
        <p>{{ work.description }}</p>
        <p>
          <a :href="work.link" target="_blank">{{ work.isWebpage ?  'Ir al sitio' : 'Demo' }}</a>
          <a v-show="work.repo" :href="work.repo" target="_blank">Repositorio</a>
        </p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'ChambaProyecto',
  data () {
    return {
      workList: []
    }
  },
  methods: {
    getWorkList () {
      fetch('/data/works.json')
      .then(r => r.json())
      .then(data => {
        this.workList = data
      })
    },
    setBorder(work) {
      return { 'border': `2px solid ${work.color}` }
    },
    detectEmoji(work) {
      return work.isPen ? '🖊️' : (work.isWebpage ? '🌎' : '🥑')
    }
  },
  created () {
    this.getWorkList()
  }
}
</script>

<style lang="stylus">
.flex
  display flex

.flex-centered
  align-items: center
  justify-content: center

.flex-column
  flex-direction: column

.work > div
  flex 1

.work:nth-child(odd)
  flex-direction row-reverse
  text-align right
  margin 1rem 0

.work-identifier
  color white
  font-size 1.5rem

.work-detail
  padding 1rem

@media(max-width $MQMobile)
  .work:nth-child(n)
    flex-direction column
    text-align center
</style>
