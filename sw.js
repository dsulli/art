importScripts('/nuxt-gh-pages/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-gh-pages/_nuxt/11b200e102c81f3163cf.js",
    "revision": "917629a3b768e62a4c782c7dced3a1db"
  },
  {
    "url": "/nuxt-gh-pages/_nuxt/14152fc1dc9b4d236fb8.js",
    "revision": "4431d4fe66d627bed476478b3ac3a7f5"
  },
  {
    "url": "/nuxt-gh-pages/_nuxt/148c5fb3f8a7768e561d.js",
    "revision": "ee1ce8a9b7b23b4b0912c1e152fcac7f"
  },
  {
    "url": "/nuxt-gh-pages/_nuxt/fec39862652033b462f3.js",
    "revision": "465b6957e2e75d75721a798b76dd8914"
  }
], {
  "cacheId": "art",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/nuxt-gh-pages/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/nuxt-gh-pages/.*'), workbox.strategies.networkFirst({}), 'GET')
