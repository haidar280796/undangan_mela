<script setup>
import bgframe2 from './../assets/images/bgframe2.png'
import flower from './../assets/images/flower1.png'

</script>

<template>
    <section
        class="@container relative bg-white w-full h-full min-h-screen max-w-screen-sm flex flex-col justify-center items-center mx-auto pb-6 overflow-hidden">

        <img :src="bgframe2" alt="Frame Top"
            class="absolute top-0 @min-md:-top-10 left-1/2 transform -translate-y-1/4 @min-md:-translate-y-1/2 -translate-x-1/2 w-full h-auto scale-180 z-0" />
        <!-- Frame Top -->
        <img :src="bgframe2" alt="Frame Top"
            class="absolute bottom-0 @min-md:-bottom-10 left-1/2 transform translate-y-1/4 @min-md:translate-y-1/2 -translate-x-1/2 w-full h-auto scale-160 z-0" />
        <!-- Frame Top -->

        <img :src="flower" alt="Flower Top Left" class="absolute top-0 -right-12 w-80 h-80 @min-md:w-96 @min-md:h-96 z-20 rotate-160 animate-flower-sway" />
        <!-- Flower Frame Top Left -->
        <img :src="flower" alt="Flower Bottom Left" class="absolute -bottom-4 -left-4 w-80 h-80 @min-md:w-96 @min-md:h-96 z-20 rotate-0 animate-flower-sway" />
        <!-- Flower Frame Bottom Right -->

        <div
            class="relative w-full flex flex-col items-center justify-center px-6 @min-md:px-6 z-50 @min-md:gap-4">
            <div class="w-full flex flex-col items-center justify-center"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <p class="font-mea-culpa text-center text-[4rem] @min-sm:text-[4rem] text-[#965A60]">Meilasari</p>
                <p class="max-w-3/4 font-lexend text-center text-sm @min-sm:text-base">Putri Pertama Dari Bapak Tugiman & Ibu Carwati (Alm)</p>
            </div>
            <div class="w-full flex flex-col items-center justify-center"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <p class="font-mea-culpa text-center text-[4rem] @min-sm:text-[6rem] text-[#E79F63]">&</p>
            </div>
            <div class="w-full flex flex-col items-center justify-center"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <p class="font-mea-culpa text-center text-[4rem] @min-sm:text-[4rem] text-[#965A60]">Hafif Azwarli</p>
                <p class="max-w-3/4 font-lexend text-center text-sm @min-sm:text-base">Putra keempat Dari Bapak Abdul Mukhsin (Alm) & Ibu Yusniar Hayani</p>
            </div>
        </div>

    </section>
</template>

<style scoped>
/* Animasi floating */
@layer utilities {
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
}
</style>