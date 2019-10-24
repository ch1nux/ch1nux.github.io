const routes = [
  { path: '/', component: EasterEgg },
  { path: '/works', component: WorkingList },
  { path: '/speak', component: SpeaksList },
  { path: '/blog', component: BlogWIP },
]

const router = new VueRouter({ routes })
