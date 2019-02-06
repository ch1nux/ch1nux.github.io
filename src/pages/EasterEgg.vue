<template>
  <div class="flex text">
    <div class="image">
      <img
        src="/YO.jpg"
        alt="identifier"
        class="image"
      >
    </div>
    <div class="content">
      <h1 class="large greet">
        ✋
      </h1><br>
      <span
        v-if="MOTD.hasLink"
        class="medium mono"
      >
        <a
          :href="MOTD.link"
          target="_blank"
          class="smooth terran"
        >
          {{ MOTD.message }}
        </a>
      </span>
      <span
        v-else
        class="medium mono"
      >
        {{ MOTD.message }}
      </span><br>
      <h2 class="small mono">
        Hi there, my name is Jhony 😉
      </h2>
      <span class="x-small text hidden-on-mobile">
        (Oh, and please, don't read the console...)
      </span>
    </div>
  </div>
</template>

<script>
import messages from './../data/messages.json'

export default {
  name: 'EasterEgg',
  data () {
    return {
      MOTD: '',
      messages
    }
  },
  mounted () {
    this.MOTD = this.getMessage()
    // console.clear()
    console.log('%cYou\'re a rebel... I like you!', 'color: #1E76A6; font-size: x-large;')
  },
  methods: {
    getMessage () {
      return this.messages[Math.floor(Math.random() * this.messages.length)]
    }
  }
}
</script>
<style lang="scss">
.greet {
  animation: greet 2s ease infinite alternate;
  display: inline-block;
  transform-origin: center;
}
@keyframes greet {
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(-10deg);
  }
}
</style>
