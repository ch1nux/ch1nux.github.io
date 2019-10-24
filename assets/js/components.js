const debounce = (fn, ms = 0) => {
  let timeoutId

  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

const NavbarMenu = {
  template: `
    <nav class="flex fixed">
      <router-link to="/" class="option smooth"> About </router-link>
      <router-link to="/works" class="option smooth"> Works </router-link>
      <router-link to="/speak" class="option smooth"> Speak </router-link>
      <router-link to="/blog" class="option smooth"> Blog </router-link>
    </nav>
  `,
}

const ScrollTop = {
  template: `<button v-show="isTop" id="scroll" class="smooth" @click="toTop">☝️</button>`,
  data () {
    return {
      isTop: false
    }
  },
  methods: {
    toTop () {
      if (window) {
        try {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        } catch(err) {
          window.scrollTo(0, 0)
        }
      }
    },
    checkScrollPosition() {
      this.isTop = !!(document.documentElement.scrollTop || document.body.scrollTop)
    }
  },
  created () {
    const debouncedScroll = debounce(this.checkScrollPosition, 200)
    debouncedScroll()
    window.addEventListener('scroll', debouncedScroll)
  }
}

const EasterEgg = {
  template: `
  <section class="container">
    <figure>
      <img :src="IOTD.image" class="face-cover" alt=""/>
      <img src="assets/img/YO.jpg" alt="me"/>
    </figure>
    <h1 class="centered">
      <a v-if="MOTD.hasLink" :href="MOTD.link" target="_blank">{{ MOTD.message }}</a>
      <span v-else>{{ MOTD.message }}</span>
    </h1>
    <h2 class="centered">My name is Jhony, I'm a{{ IOTD.gesture }} person</h2>
    <p class="small centered">(Oh, and please, don't read the console)</p>
    <p class="centered"> I'm passionated for Javascript (mostly <a href="https://vuejs.org" target="_blank">Vue.js</a>), Web Design, SVG Design, animations, 🥑 and emojis! 🍫</p>
  </section>
  `,
  data () {
    return {
      MOTD: {},
      messages: [],
      IOTD: {},
      images: [
        { image: 'assets/img/e-smirk.png', gesture: ' smirk' },
        { image: 'assets/img/e-sweat.png', gesture: ' sweaty' },
        { image: 'assets/img/e-relieved.png', gesture: ' relieved' },
        { image: 'assets/img/e-avocado.png', gesture: 'n avocado' },
        { image: 'assets/img/e-thinking.png', gesture: ' thinking' }
      ]
    }
  },
  methods: {
    fillMessages() {
      fetch('../../data/messages.json')
      .then(r => r.json())
      .then(data => {
        this.messages = data
        this.MOTD = this.messages[Math.floor(Math.random() * this.messages.length)]
      })
    },
    getImage () {
      return this.IOTD = this.images[Math.floor(Math.random() * this.images.length)]
    }
  },
  created () {
    this.fillMessages()
    console.log('%cYou\'re a rebel... I like you!', 'color: #1E76A6; font-size: x-large;')
    this.getImage()
  }
}

const WorkingList = {
  template: `
    <section class="container">
      <h2 class="centered"> Some avocado stuff I've done...💪 </h2>
      <article class="flex work" v-for="work in workList" :style="setBorder(work)">
        <div :style="{ 'background-color': work.color }" class="work-identifier flex flex-centered">
          <h3 class="centered">
            {{ work.identifier }} {{ detectEmoji(work) }}
          </h3>
        </div>
        <div class="work-detail padded">
          <p>{{ work.description }}</p>
          <p>
            <a :href="work.link" target="_blank">{{ work.isWebpage ? 'Website' : 'Demo' }}</a>&nbsp;&nbsp
            <a v-show="work.repo" :href="work.repo" target="_blank">Github</a>
          </p>
        </div>
      </article>
    </section>
  `,
  data () {
    return {
      workList: []
    }
  },
  methods: {
    getWorkList () {
      fetch('../../data/works.json')
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

const SpeaksList = {
  template: `
    <section class="container">
      <h2 class="centered"> Because avocados can talk, don't ya?🤔 </h2>
      <div class="grid">
        <article class="flex card" v-for="speak in slideList">
          <div class="responsive-img">
            <img :src="getImage(speak)">
          </div>
          <div style="margin-left: 1rem; margin-top: 1rem;">
            <p> {{ speak.description }} </p>
            <p> {{ speak.placement }}</p>
            <p> <a :href="speak.link" target="_blank">Link to Slides</a> </p>
          </div>
        </article>
      </div>
    </section>
  `,
  data () {
    return {
      slideList: []
    }
  },
  methods: {
    getSpeakList () {
      fetch('../../data/slides.json')
      .then(r => r.json())
      .then(data => {
        this.slideList = data
      })
    },
    getImage(speak) {
      return `assets/img/${ speak.image }`
    }
  },
  created () {
    this.getSpeakList()
  }
}

const BlogWIP = {
  template: `
  <section class="container card padded">
    <h2>Blog (WIP)😌</h2>
    <p>Some time ago, I post something about the Universe, but <a href="https://jotaeseymas.wordpress.com/2015/01/18/dicen-que-el-universo/" target="_blank">can't remember where</a> 🤔 . There, I talked about a way to define or create an entire universe within two parameters, between a 0 and a 1, for example, or within two HTML tags.</p>
    <p>As every universe created according to Chaos Theory, is prone to expand or contract, and as far as I see it, the last universe I created, didn't convince me so much neither. But me, as its creative chaos, I decided to build a new universe, larger than ever, because the expansion suffered before is not only for me, but for many people who have experienced the vertiginous rampaging Javascript world (or as I call it: "the avocado world")</p>
  <p>So, <a href="https://jotaeseymas.surge.sh/" target="_blank">here it is (for now)</a>. It was made with <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a> and 💕</p>
  <p>See you in the code! You read it from an avocado. 🥑</p>
  </section>
  `
}
