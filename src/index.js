import './assets/styles.scss'

import Router from 'vue-router'

import pages from './pages/pages.js'

export default () => {
  const router = new Router({
    mode: 'history',
    routes: pages.map((component) => {
      let path = (component.name === 'Index')
        ? '/'
        : `/${component.name.toLowerCase()}`
      return { path, component }
    })
  })

  return { router }
}
