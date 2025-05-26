<script setup>
import bgframe1 from './../assets/images/bgframe1.png'
import bgframe2 from './../assets/images/bgframe2.png'
import flower from './../assets/images/flower2.png'
import couple from './../assets/images/couple1.png'

</script>
v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-8 animate-duration-1000', leaveClass:
'animate-leave fade-out-0' }"
<template>
        <section
                class="@container relative bg-white w-full h-full min-h-screen max-w-screen-sm flex flex-col items-center mx-auto overflow-hidden">


                <img :src="flower" alt="Flower Top"
                        class="absolute top-0 left-1/2 transform -translate-y-1/3 -translate-x-1/2 w-full h-auto object-cover scale-y-[-1] z-20 animate-flower-sway" />
                <!-- Flower Frame Top -->

                <img :src="bgframe1" alt="Frame Top Left"
                        class="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 scale-y-[-1] z-0" />
                <!-- Frame Top Left -->
                <img :src="bgframe2" alt="Frame Top Right"
                        class="absolute top-0 right-0 transform -translate-y-1/3 translate-x-1/2  w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 z-0" />
                <!-- Frame Top Right -->
                <img :src="bgframe2" alt="Frame Bottom Left"
                        class="absolute -bottom-8 left-0 transform -translate-x-1/2  w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 z-0" />
                <!-- Frame Bottom Left -->
                <img :src="bgframe1" alt="Frame Bottom Right"
                        class="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 scale-x-[-1] z-0" />
                <!-- Frame Bottom Right -->

                <div
                        class="flex-1 relative w-full flex flex-col items-center justify-center mt-32 @sm:mt-36 @md:mt-48 px-6 md:px-12 z-50 text-[#965A60]">
                        <p class="self-start ml-4 font-mea-culpa text-8xl @sm:text-[8rem] @md:text-[10rem]"
                        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">Meila</p>
                        <p class="font-mea-culpa text-6xl @sm:text-[6rem] @md:text-[8rem]"
                        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">&</p>
                        <p class="self-end font-mea-culpa text-8xl @sm:text-[8rem] @md:text-[10rem] mr-4"
                        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">Hafif</p>
                </div>

                <div class="w-full flex items-center justify-start">
                        <img :src="couple" alt="Couple"
                                class="w-64 h-64 @min-sm:w-72 @min-sm:h-72 object-cover z-50 scale-x-[-1] animate-bike-move" />
                </div>
                <!-- Couple Bottom -->

        </section>
</template>

<style scoped>
/* Animasi floating */
@layer utilities {
        @keyframes bike-move {
                0% {
                        transform: translateX(100%);
                }

                100% {
                        transform: translateX(-100vw);
                        /* atau 100% tergantung konteks */
                }
        }

        @keyframes flower-sway {

                0%,
                100% {
                        transform: rotate(0deg);
                }

                50% {
                        transform: rotate(10deg);
                }

        }

        .animate-flower-sway {
                animation: flower-sway 4s ease-in-out infinite;
        }

        .animate-bike-move {
                animation: bike-move 10s linear infinite;
        }
}
</style>