<script setup>
import frame from './../assets/images/frame3.png'
import bgframe2 from './../assets/images/bgframe2.png'
import flower from './../assets/images/flower3.png'

</script>

<template>
    <section
        class="@container relative bg-white w-full h-full min-h-screen max-w-screen-sm flex flex-col items-center mx-auto pb-6 overflow-hidden">

        <img :src="flower" alt="Flower Top"
            class="absolute top-0 left-1/2 transform -translate-y-1/3 -translate-x-1/2 w-full h-auto object-cover scale-115 rotate-180 z-20 animate-flower-sway" />
        <!-- Flower Frame Top -->

        <img :src="bgframe2" alt="Frame Center"
            class="absolute top-0 left-1/2 transform translate-y-1/2 -translate-x-1/3 w-full h-auto scale-250 z-0" />
        <!-- Frame Center -->

        <p
            class="font-lexend text-center text-sm @sm:text-sm @md:text-base text-black mt-28 @sm:mt-32 @md:mt-48 px-6 @min-md:px-12 z-50" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            Semoga Allah memberikan berkah dan kebahagiaan bagi kami. Kehadiran dan doa restu Bapak/Ibu/Saudara/i sangat
            kami harapkan.</p>


        <div class="relative w-full flex flex-col items-center justify-center mt-10 z-50">
            <img :src="frame" alt="Frame" class="w-full h-full animate-flower-sway2" />
            <!-- Frame Center -->
            <div
                class="absolute w-full flex flex-col items-center justify-center z-50 text-[#965A60]">
                <p class="self-start ml-20 @min-md:ml-30 font-rouge-script text-[6rem] @sm:text-[7rem] @md:text-[12rem] -mt-20 @min-md:-mt-20" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">M</p>
                <p class="font-rouge-script text-[#E79F63] text-[5rem] @sm:text-[5rem] @md:text-[10rem] -mt-20 @min-md:-mt-36"
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">&</p>
                <p class="self-end mr-24 @min-md:mr-40 font-rouge-script text-[6rem] @sm:text-[7rem] @md:text-[12rem] -mt-20 @min-md:-mt-36"
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">H</p>
            </div>
        </div>

        <p
            class="font-lexend text-center text-sm @sm:text-sm @md:text-base text-[#965A60] mt-28 @sm:mt-32 @md:mt-48 px-6 @min-md:px-12 z-50">
            Made by <a href="https://momenly.com" target="_blank" rel="noopener"></a>Momenly</p>

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
            transform: rotate(-10deg);
        }

    }

    .animate-flower-sway {
        animation: flower-sway 4s ease-in-out infinite;
    }
    @keyframes flower-sway2 {

        0%,
        100% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(10deg);
        }

    }

    .animate-flower-sway2 {
        animation: flower-sway2 4s ease-in-out infinite;
    }
}
</style>