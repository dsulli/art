importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/11b200e102c81f3163cf.js",
    "revision": "917629a3b768e62a4c782c7dced3a1db"
  },
  {
    "url": "/_nuxt/14152fc1dc9b4d236fb8.js",
    "revision": "4431d4fe66d627bed476478b3ac3a7f5"
  },
  {
    "url": "/_nuxt/3669c5915038e7ac5a63.js",
    "revision": "1e13355fb7215c174ca7a3987d3b3350"
  },
  {
    "url": "/_nuxt/8f53cbfeb9ddd223797e.js",
    "revision": "4d52aa7698df85aaba8bfa647a87725e"
  }
], {
  "cacheId": "art",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
