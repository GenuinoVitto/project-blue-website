import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e8086cf = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _3c30f39c = () => interopDefault(import('..\\pages\\become-volunteer.vue' /* webpackChunkName: "pages/become-volunteer" */))
const _55276650 = () => interopDefault(import('..\\pages\\causes.vue' /* webpackChunkName: "pages/causes" */))
const _658bc066 = () => interopDefault(import('..\\pages\\causes-details.vue' /* webpackChunkName: "pages/causes-details" */))
const _ba12393c = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _7aa30547 = () => interopDefault(import('..\\pages\\events.vue' /* webpackChunkName: "pages/events" */))
const _55e4f93c = () => interopDefault(import('..\\pages\\events-details.vue' /* webpackChunkName: "pages/events-details" */))
const _bb85a91e = () => interopDefault(import('..\\pages\\founder.vue' /* webpackChunkName: "pages/founder" */))
const _206b4d94 = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _a7d9848e = () => interopDefault(import('..\\pages\\index-2.vue' /* webpackChunkName: "pages/index-2" */))
const _a7bd558c = () => interopDefault(import('..\\pages\\index-3.vue' /* webpackChunkName: "pages/index-3" */))
const _37e460fe = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _4c66e976 = () => interopDefault(import('..\\pages\\news-details.vue' /* webpackChunkName: "pages/news-details" */))
const _22229757 = () => interopDefault(import('..\\pages\\volunteers.vue' /* webpackChunkName: "pages/volunteers" */))
const _5e386194 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3e8086cf,
    name: "about"
  }, {
    path: "/become-volunteer",
    component: _3c30f39c,
    name: "become-volunteer"
  }, {
    path: "/causes",
    component: _55276650,
    name: "causes"
  }, {
    path: "/causes-details",
    component: _658bc066,
    name: "causes-details"
  }, {
    path: "/contact",
    component: _ba12393c,
    name: "contact"
  }, {
    path: "/events",
    component: _7aa30547,
    name: "events"
  }, {
    path: "/events-details",
    component: _55e4f93c,
    name: "events-details"
  }, {
    path: "/founder",
    component: _bb85a91e,
    name: "founder"
  }, {
    path: "/gallery",
    component: _206b4d94,
    name: "gallery"
  }, {
    path: "/index-2",
    component: _a7d9848e,
    name: "index-2"
  }, {
    path: "/index-3",
    component: _a7bd558c,
    name: "index-3"
  }, {
    path: "/news",
    component: _37e460fe,
    name: "news"
  }, {
    path: "/news-details",
    component: _4c66e976,
    name: "news-details"
  }, {
    path: "/volunteers",
    component: _22229757,
    name: "volunteers"
  }, {
    path: "/",
    component: _5e386194,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
