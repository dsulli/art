importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/11b200e102c81f3163cf.js",
    "revision": "917629a3b768e62a4c782c7dced3a1db"
  },
  {
    "url": "/_nuxt/133a189cdb485b005290.js",
    "revision": "73451dac5a9b6052601e37adbbaaa3a4"
  },
  {
    "url": "/_nuxt/3669c5915038e7ac5a63.js",
    "revision": "1e13355fb7215c174ca7a3987d3b3350"
  },
  {
    "url": "/_nuxt/382b2b110d0114effd9b.js",
    "revision": "38a70969a152c5f94cef275549024a68"
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
