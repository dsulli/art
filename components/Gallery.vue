<template>
  <div>
    <div ref="thumbs" class="md:px-12 mx-auto flex flex-row flex-wrap">
      <div
        v-for="n in imgOrder"
        :key="n"
        :ref="`thumb${n}`"
        class="p-2 relative cursor-pointer w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
        @mouseover="hoverThumb(n)"
        @mouseout="hoverOutThumb(n)"
        @click="selectImage(n)"
      >
        <img
          :src="require(`@/assets/art/thumbs/illustration${n}.jpg`)"
          class="w-full inline-block"
        />
        <div class="opacity-0 gallery-item">
          <div class="absolute left-0 bottom-0 w-full font-sans p-6 uppercase">
            <span class="title block text-white font-extrabold">{{
              images[n].title
            }}</span>
            <span class="title block font-bold text-gray-200">{{
              images[n].date
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <GalleryImageFull
        :img-key="selectedImage"
        :image="images[selectedImage]"
        :is-visible="showImage"
        :index="imgOrder.indexOf(selectedImage)"
        @close="showImage = false"
        @next="goNext"
        @prev="goPrev"
      />
    </transition>
  </div>
</template>

<script>
import GalleryImageFull from '~/components/GalleryImageFull.vue'

export default {
  components: {
    GalleryImageFull
  },
  data() {
    return {
      imgOrder: ['10', '09', '08', '07', '06', '05', '04', '03', '02', '01'],
      selectedImage: '01',
      showImage: false,
      images: {
        '10': {
          title: 'Winter Vladimir',
          date: 'Dec 2018',
          orientation: 'portrait',
          description: `
            I drew Vladimir from League of Legends in a winter outfit for a secret santa. The main inspiration for this piece is Ayami Kojima with the dramatic lighting and oil painting effects. 
          `
        },
        '09': {
          title: 'Dark Waters Diana',
          date: 'Oct 2018',
          orientation: 'landscape',
          description: `
            I loved this Diana skin as soon as I saw it, so I knew I had to create fan art of it. I experimented with imitating ambient occlusion to paint some harsher shadows in the nooks and crannies of the forms, however I definitely need more practice to get it right! 
         `
        },
        '08': {
          title: 'Odyssey Sona',
          date: 'Sep 2018',
          orientation: 'landscape',
          description: `
            This piece was drawn to celebrate the League of Legends Odyssey event. Riot gave me codes for the Odyssey Sona emote to give away to my followers. I'm super grateful for the opportunity and had a ton of fun playing the game mode.
          `
        },
        '07': {
          title: 'Anime Conji',
          date: 'May 2018',
          orientation: 'portrait',
          description: `
            Anime Conji is a convention in San Diego that I was a staff artist for from 2010 to 2013. In 2018, I was invited to be the Artist Guest of Honor. I drew the program guide book cover and the badge art below.
          `
        },
        '06': {
          title: 'Pool Party Cait',
          date: 'Jun 2018',
          orientation: 'landscape',
          description: `
            Caitlyn from League of Legends is a favorite of mine, so I was excited for the release of her Pool Party skin. The background is inspired by a water effect I use in resin often.
          `
        },
        '05': {
          title: 'Star Guardian Farewell',
          date: 'Mar 2018',
          orientation: 'portrait',
          description: `
            This piece was drawn for the charity fanzine, UNITED, themed around the Star Guardian universe. I had this idea that the last page of the zine would show the original team saying goodbye. It turned out to be a bittersweet piece.
          `
        },
        '04': {
          title: 'Nier: Automata Scene',
          date: 'Mar 2017',
          orientation: 'landscape',
          description: `
            Nier: Automata had such a brilliant story, so I drew this piece to express some of the emotions from the game. The game has a muted color palette, so I kept this piece greyscale.
          `
        },
        '03': {
          title: 'Taliyah',
          date: 'Jan 2017',
          orientation: 'landscape',
          description: `
            I love Taliyah's animations in League of Legends, and wanted to create a piece that portrays her graceful movement. She's having a blast surfing on rocks in the Shuriman sunset.
          `
        },
        '02': {
          title: 'Whimsy',
          date: 'Dec 2016',
          orientation: 'landscape',
          description: `
            Lulu zooming through Summoner's Rift. She's my absolute favorite champion in League of Legends!
          `
        },
        '01': {
          title: 'Elementalist Lux',
          date: 'Nov 2016',
          orientation: 'landscape',
          description: `
            Queen Elementalist Lux sits on her throne. I was heavily inspired by the Magic the Gathering Card, Teysa, Envoy of Ghosts. The pose makes her look powerful.
          `
        }
      }
    }
  },
  methods: {
    hoverThumb(n) {
      for (let i = 0; i < this.imgOrder.length; i++) {
        const count = this.imgOrder[i]
        if (n !== count) {
          TweenLite.to(this.$refs[`thumb${count}`], 0.5, { opacity: 0.5 })
        }
      }
      TweenLite.to(this.$refs[`thumb${n}`][0].children[1], 0.25, { opacity: 1 })
    },
    hoverOutThumb(n) {
      for (let i = 0; i < this.imgOrder.length; i++) {
        const count = this.imgOrder[i]
        if (n !== count) {
          TweenLite.to(this.$refs[`thumb${count}`], 0.5, { opacity: 1 })
        }
      }
      TweenLite.to(this.$refs[`thumb${n}`][0].children[1], 0.25, { opacity: 0 })
    },
    selectImage(img) {
      this.selectedImage = img
      this.showImage = true
    },
    goNext() {
      const currentIndex = this.imgOrder.indexOf(this.selectedImage)
      if (currentIndex !== this.imgOrder.length - 1) {
        this.selectedImage = this.imgOrder[currentIndex + 1]
      } else {
        this.selectedImage = this.imgOrder[0]
      }
    },
    goPrev() {
      const currentIndex = this.imgOrder.indexOf(this.selectedImage)
      if (currentIndex !== 0) {
        this.selectedImage = this.imgOrder[currentIndex - 1]
      } else {
        this.selectedImage = this.imgOrder[this.imgOrder.length - 1]
      }
    }
  }
}
</script>

<style>
.title {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8), 1px 1px 6px rgba(0, 0, 0, 0.5);
}

.gallery-item {
  position: absolute;
  top: 0;
  left: 0;
  margin: 8%;
  width: 84%;
  height: 90%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  opacity: 0;
}
</style>
