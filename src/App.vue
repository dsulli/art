<template>
    <div id="app">
        <header class="bg-grey-light w-full">
            <div class="container">

            </div>
        </header>
        <div class="bg-black w-full p-8">
            <div class="container mx-auto">
                <h2 class="font-sans font-normal uppercase tracking-wide pl-6 text-grey-light">Gallery</h2>
                <Gallery />
            </div>
        </div>
  </div>
</template>

<script>
import Gallery from './components/Gallery.vue';
export default {
  name: 'App',
  components: {
      Gallery
  }
}
</script>

<style src="./assets/css/styles.css"></style>
