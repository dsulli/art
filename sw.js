importScripts('/art/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/art/_nuxt/11b200e102c81f3163cf.js",
    "revision": "917629a3b768e62a4c782c7dced3a1db"
  },
  {
    "url": "/art/_nuxt/14152fc1dc9b4d236fb8.js",
    "revision": "4431d4fe66d627bed476478b3ac3a7f5"
  },
  {
    "url": "/art/_nuxt/ac8b52c9243021e3ea91.js",
    "revision": "6e8481b826483822391269d1fb20b4cb"
  },
  {
    "url": "/art/_nuxt/b640ca64ae9ad8e7ee17.js",
    "revision": "604a7e6a490bbf6ac0a05a10ce241272"
  }
], {
  "cacheId": "art",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/art/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/art/.*'), workbox.strategies.networkFirst({}), 'GET')
