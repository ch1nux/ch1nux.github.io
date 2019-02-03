<template>
  <div>
    <section class="container">
      <EasterEgg />
      <Menu />
    </section>
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
