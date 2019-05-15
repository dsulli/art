<template>
  <div
    v-if="isVisible"
    class="absolute top-0 left-0 w-screen h-screen bg-black z-20 overflow-auto"
    style="box-sizing: border-box;"
  >
    <div
      class="fixed top-0 right-0 text-gray-300 inline-block close z-40"
      @click="close"
    ></div>

    <div
      class="fixed left-0 center-vertical inline-block cursor-pointer p-4 bg-gray-900 z-40"
      @click="prev"
    >
      <svg width="30px" height="30px" viewBox="0 0 50 80" xml:space="preserve">
        <polyline
          fill="none"
          stroke="#FFFFFF"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="
                45.63,75.8 0.375,38.087 45.63,0.375 "
        />
      </svg>
    </div>

    <div
      class="fixed right-0 center-vertical inline-block cursor-pointer p-4 bg-gray-900 z-40"
      @click="next"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="30px"
        height="30px"
        viewBox="0 0 50 80"
        xml:space="preserve"
      >
        <polyline
          fill="none"
          stroke="#FFFFFF"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="
                0.375,0.375 45.63,38.087 0.375,75.8 "
        />
      </svg>
    </div>
    <div class="relative z-20" style="">
      <transition-group name="fade" tag="div" mode="out-in">
        <div
          v-for="number in [index]"
          :key="number"
          class="absolute left-0 right-0"
        >
          <div class="container mx-auto">
            <img
              :src="require(`@/assets/art/illustration${imgKey}.jpg`)"
              :style="mainImgStyle"
              class="mx-auto"
            />
            <div class="p-6 font-sans font-normal pl-6 ">
              <div
                class="text-center text-3xl uppercase tracking-widest text-gray-600"
              >
                {{ image.title }}
              </div>
              <div
                class="leading-relaxed tracking-wide pt-4 max-w-3xl mx-auto text-gray-400 pb-12 md:pb-0"
              >
                {{ image.description }}
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgKey: {
      type: String,
      default: ''
    },
    image: {
      type: Object,
      default: () => {}
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    mainImgStyle() {
      if (this.image.orientation === 'landscape') {
        return {
          'max-height': '670px'
        }
      } else {
        return {
          'max-height': '80vh'
        }
      }
    }
  },
  watch: {
    isVisible(val) {
      if (val) {
        document.getElementById('app').style.height = '100vh'
        document.getElementById('app').style.overflow = 'hidden'
      } else {
        document.getElementById('app').style.height = 'auto'
        document.getElementById('app').style.overflow = 'auto'
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    prev() {
      this.$emit('prev')
    },
    next() {
      this.$emit('next')
    }
  }
}
</script>

<style>
.close {
  position: absolute;
  width: 32px;
  height: 32px;
  margin: 2rem;
  cursor: pointer;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #fff;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.center-vertical {
  top: 50%;
  transform: translateY(-50%);
}

@media only screen and (max-width: 640px) {
  .center-vertical {
    top: auto;
    bottom: 0;
    transform: translateY(0);
  }
}
</style>
