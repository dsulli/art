<template>
    <div>
        <div 
            ref="thumbs"
            class="flex flex-row flex-wrap"
        >
            <div 
                v-for="n in imgOrder" 
                :key="n"
                :ref="`thumb${n}`"
                class="p-2 relative cursor-pointer"
                @mouseover="hoverThumb(n)"
                @mouseout="hoverOutThumb(n)"
                @click="selectImage(n)"
            >
                <img 
                    :src="require(`@/assets/art/thumbs/illustration${n}.jpg`)"
                    class="relative"
                    
                >
                <div class="opacity-0 gallery-item">
                    <div class="absolute pin-l pin-b w-full font-sans p-6 uppercase">
                        <span class="title block text-white font-extrabold">{{ images[n].title }}</span>
                        <span class="title font-bold text-grey-lightest">{{ images[n].date }}</span>
                    </div>
                </div>
            </div>
        </div>
        <transition name="fade">
        <GalleryImageFull
            :imgKey="selectedImage"
            :image="images[selectedImage]"
            :isVisible="showImage"
            @close="showImage = false"
            @next="goNext"
            @prev="goPrev"
        />
        </transition>
    </div>
</template>

<script>
import GalleryImageFull from '../components/GalleryImageFull.vue';

export default {
    components: {
        GalleryImageFull
    },
    data() {
        return {
            imgOrder: ["10", "09", "08", "07", "06", "05", "04", "03", "02", "01"],
            selectedImage: "01",
            showImage: false,
            images: {
                "10": {
                    title: "Winter Vladimir",
                    date: "Dec 2018",
                    orientation: "portrait"
                },
                "09": {
                    title: "Dark Waters Diana",
                    date: "Oct 2018",
                    orientation: "landscape"
                },
                "08": {
                    title: "Odyssey Sona",
                    date: "Sep 2018",
                    orientation: "landscape"
                },
                "07": {
                    title: "Anime Conji",
                    date: "May 2018",
                    orientation: "portrait"
                },
                "06": {
                    title: "Pool Party Cait",
                    date: "Jun 2018",
                    orientation: "landscape"
                },
                "05": {
                    title: "Star Guardian Farewell",
                    date: "Mar 2018",
                    orientation: "portrait"
                },
                "04": {
                    title: "Nier: Automata Scene",
                    date: "Mar 2017",
                    orientation: "landscape"
                },
                "03": {
                    title: "Taliyah",
                    date: "Jan 2017",
                    orientation: "landscape"
                },
                "02": {
                    title: "Whimsy",
                    date: "Dec 2016",
                    orientation: "landscape"
                },
                "01": {
                    title: "Elementalist Lux",
                    date: "Nov 2016",
                    orientation: "landscape"
                }
            }
        };
    },
    methods: {
        hoverThumb(n) {
            for(var i = 0; i < this.imgOrder.length; i++) {
                let count = this.imgOrder[i];
                if(n !== count) {
                    TweenLite.to(this.$refs[`thumb${count}`], 0.5, {opacity: 0.5});
                }
            }
            TweenLite.to(this.$refs[`thumb${n}`][0].children[1], 0.25, {opacity: 1});
        },
        hoverOutThumb(n) {
            for(var i = 0; i < this.imgOrder.length; i++) {
                let count = this.imgOrder[i];
                if(n !== count) {
                    TweenLite.to(this.$refs[`thumb${count}`], 0.5, {opacity: 1});
                }
            }
            TweenLite.to(this.$refs[`thumb${n}`][0].children[1], 0.25, {opacity: 0});
            // TweenLite.to(event.target.nextElementSibling, 0.25, {opacity: 0});
            // let otherThumbs = this.$refs.thumbs.children;
            // for(let thumb of otherThumbs) {
            //     if(thumb.children[0] !== event.target) {
            //         TweenLite.to(thumb, 0.5, {opacity: 1});
            //     }
            // }
        },
        selectImage(img) {
            this.selectedImage = img;
            this.showImage = true;
        },
        goNext() {
            let currentIndex = this.imgOrder.indexOf(this.selectedImage);
            if(currentIndex !== this.imgOrder.length - 1) {
                this.selectedImage = this.imgOrder[currentIndex + 1];
            } else {
                this.selectedImage = this.imgOrder[0];
            }
        },
        goPrev() {
            let currentIndex = this.imgOrder.indexOf(this.selectedImage);
            if(currentIndex !== 0) {
                this.selectedImage = this.imgOrder[currentIndex - 1];
            } else {
                this.selectedImage = this.imgOrder[this.imgOrder.length - 1];
            }
        }
    }
}
</script>

<style>
    .title {
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8), 1px 1px 6px rgba(0, 0, 0, 0.5);
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .gallery-item {
        position: absolute;
        top: 0;
        left: 0;
        margin: 8%;
        width: 84%;
        height: 90%;
        border: 2px solid rgba(255,255,255,0.5);
        opacity: 0;
    }
</style>