importScripts('/nuxt-gh-pages/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-gh-pages/_nuxt/1fa21adf1d95becd80d2.js",
    "revision": "1dc6ab52c2f446df581abbf586f35dc5"
  },
  {
    "url": "/nuxt-gh-pages/_nuxt/4599d65e674279b3e1eb.js",
    "revision": "c2175dbb1dfef3276ef36c9c07894655"
  },
  {
    "url": "/nuxt-gh-pages/_nuxt/b1c68dc7bb0b7ea539f4.js",
    "revision": "5afc8b3d88f2827580bafc0e196673c5"
  },
  {
    "url": "/nuxt-gh-pages/_nuxt/b581675d2d022448f4b9.js",
    "revision": "6dc489e7fa7fb8d3599eacc494b28e41"
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
