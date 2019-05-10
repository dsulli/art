<template>
    <div 
        class="absolute pin-t pin-l w-screen h-screen bg-black z-20 overflow-auto"
        style="box-sizing: border-box;"
        v-if="isVisible"
    >
        <div 
            class="absolute pin-t pin-r text-grey-light inline-block close"
            @click="close"
        >
        </div>
        
        <div 
            class="absolute pin-l center-vertical inline-block cursor-pointer p-4 bg-grey-darkest"
            @click="prev"
        >
            <svg width="30px" height="30px" viewBox="0 0 50 80" xml:space="preserve">
                <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                45.63,75.8 0.375,38.087 45.63,0.375 "/>
            </svg>  
        </div>

        <div 
            class="absolute pin-r center-vertical inline-block cursor-pointer p-4 bg-grey-darkest"
            @click="next"
        >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 50 80" xml:space="preserve">
                <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                0.375,0.375 45.63,38.087 0.375,75.8 "/>
            </svg>
        </div>

        <div 
            v-if="image.orientation === 'portrait'"
            class="flex flex-col md:flex-row"
        >
            <div 
                class="w-1/2 min-h-screen"
                :style="imgStyle"
            >
            </div>
            
            <div class="ml-6 p-6 font-sans font-normal uppercase tracking-wide pl-6 text-grey-light">
                <div class="text-3xl">{{image.title}}</div>
            </div>
        </div>
        <div 
            v-else
            class="container m-auto"
        >
            <img 
                :src="require(`@/assets/art/illustration${this.imgKey}.jpg`)"
            />
            <div class=" p-6 font-sans font-normal uppercase tracking-wide pl-6 text-grey-light">
                <div class="text-3xl">{{image.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            imgKey: {
                type: String
            },
            image: {
                type: Object            },
            isVisible: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            isVisible(val) {
                if(val) {
                    document.getElementById("app").style.height = "100vh";
                    document.getElementById("app").style.overflow = "hidden";
                } else {
                    document.getElementById("app").style.height = "auto";
                    document.getElementById("app").style.overflow = "auto";
                }
            }
        },
        computed: {
            imgStyle() {
                return {
                    "background-image": "url(" + require(`@/assets/art/illustration${this.imgKey}.jpg`) +  ")",
                    "background-size": "cover",
                    "background-position": "center"
                }
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            prev() {
                this.$emit('prev');
            },
            next() {
                this.$emit('next');
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
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #FFF;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.center-vertical {
    top: 50%;
    transform:translateY(-50%);
}


</style>