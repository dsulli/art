<template>
    <div 
        class="absolute pin-t pin-l w-screen h-screen bg-black z-20 overflow-auto"
        style="box-sizing: border-box;"
        v-if="isVisible"
    >
        <div 
            class="absolute pin-t pin-r text-grey-light inline-block"
            @click="close"
        >
            x
        </div>
        <div class="container mx-auto">
            <img 
                :src="require(`@/assets/art/illustration${imgKey}.jpg`)"
                class="max-h-screen max-w-screen"
            >
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
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>