<script setup>
import bgframe1 from './../assets/images/bgframe1.png'
import bgframe2 from './../assets/images/bgframe2.png'
import flower from './../assets/images/flower3.png'
import { MapPin } from 'lucide-vue-next';

</script>

<template>
    <section
        class="@container relative bg-white w-full h-full min-h-screen max-w-screen-sm flex flex-col items-center mx-auto pb-6 overflow-hidden">

        <img :src="flower" alt="Flower Top"
            class="absolute top-0 left-1/2 transform -translate-y-1/3 -translate-x-1/2 w-full h-auto object-cover scale-115 rotate-180 z-20" />
        <!-- Flower Frame Top -->

        <img :src="flower" alt="Flower Bottom"
            class="absolute bottom-0 left-1/2 transform translate-y-1/4 -translate-x-1/2 w-full h-auto object-cover scale-115 z-20" />
        <!-- Flower Frame Bottom -->

        <img :src="bgframe2" alt="Frame Top"
            class="absolute top-0 left-1/2 transform translate-y-1/6 -translate-x-1/2 w-full h-auto scale-170 z-0" />
        <!-- Frame Top -->
        <img :src="bgframe2" alt="Frame Bottom Left"
            class="absolute -bottom-8 left-0 transform -translate-x-1/2  w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 z-0" />
        <!-- Frame Bottom Left -->
        <img :src="bgframe1" alt="Frame Bottom Right"
            class="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 scale-x-[-1] z-0" />
        <!-- Frame Bottom Right -->

        <p class="font-rouge-script text-[#965A60] text-5xl @min-sm:text-7xl @min-md:text-8xl mt-32 @min-sm:mt-36 @min-md:mt-48 z-50">Akad Nikah</p>

        <p class="font-lexend text-[#965A60] text-2xl @min-sm:text-3xl mt-10 @min-sm:mt-12 z-50">RABU</p>

        <div class="w-full flex flex-row items-center justify-center gap-2 @min-md:gap-2 z-50 px-12 mt-4 @md:mt-4">
            <div class="w-full py-2 border-t-2 border-b-2 border-[#965A60] flex flex-col items-center justify-center">
                <p class="font-lexend text-xl @sm:text-2xl @md:text-4xl text-[#965A60]">JUNI</p>
            </div>
            <div class="w-full flex flex-col items-center justify-center">
                <p class="font-lexend text-6xl @sm:text-7xl @md:text-9xl text-[#965A60]">15</p>
            </div>
            <div class="w-full py-2 border-t-2 border-b-2 border-[#965A60] flex flex-col items-center justify-center">
                <p class="font-lexend text-xl @sm:text-2xl @md:text-4xl text-[#965A60]">08:00</p>
            </div>
        </div>

        <p class="font-lexend text-[#965A60] text-2xl @min-sm:text-3xl mt-2 @min-sm:mt-4 z-50">2025</p>

        <div class="w-full px-12 z-50 mt-10">
            <div class="w-full bg-[#CB989D] flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-xl">
                <div class="flex flex-row gap-2">
                    <MapPin class="w-6 h-6 text-white" />
                    <p class="font-lexend text-base @sm:text-base @md:text-lg text-white">Lokasi</p>
                </div>
                <p class="font-lexend text-sm @sm:text-sm @md:text-base text-white text-center">Gg. Semeru II No.136
                    Kelapa Tujuh, Kotabumi Selatan, Lampung Utara</p>
                <button @click.prevent="handleClick"
                    class="bg-white text-black rounded-xl inline-flex items-center justify-center gap-2 mt-6 w-auto px-4 py-2.5 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] animate-bounce z-50">
                    <Mail />
                    <span class="text-sm md:text-base">Google Maps</span>
                </button>
            </div>
        </div>

    </section>
</template>

<style scoped></style>