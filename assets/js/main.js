const canvas = document.createElement('canvas')
canvas.height = 48
canvas.width = 48

const ctx = canvas.getContext('2d')
ctx.font = '48px serif'
ctx.fillText('🥑', 0, 42)

const favicon = document.querySelector('link[rel=icon]')
favicon.href = canvas.toDataURL()

const app = new Vue({
  components: {
    'navbar-menu': NavbarMenu,
    'scroll-top': ScrollTop,
    'easter-egg': EasterEgg,
    'working-list': WorkingList,
    'speaks-list': SpeaksList,
    'blog-entries': BlogWIP,
  },
  router
}).$mount('#app')
