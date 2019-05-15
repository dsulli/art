<template>
  <div id="app">
    <header class="bg-grey-light w-full font-sans">
      <div class="container"></div>
    </header>
    <div class="w-full p-8 font-sans ">
      <div class="mx-auto" style="max-width: 1400px;">
        <h2
          class="font-normal text-xl md:text-4xl font-medium mb-8 text-center uppercase tracking-wide text-gray-200"
        >
          <img
            src="~/assets/heading-ornament.svg"
            class="inline-block"
            style="width: 60px;"
          />
          Illustrations
          <img
            src="~/assets/heading-ornament.svg"
            class="inline-block flipped"
            style="width: 60px;"
          />
        </h2>
        <div
          class="text-gray-400 leading-normal tracking-wide font-medium mb-8 max-w-3xl mx-auto"
        >
          Once every so often, I create full paintings with characters and
          backgrounds. These take the longest to complete, averaging 10 hours.
        </div>
        <Gallery />
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'
export default {
  name: 'App',
  components: {
    Gallery
  }
}
</script>
