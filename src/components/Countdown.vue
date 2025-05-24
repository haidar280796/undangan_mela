<script setup>
import bgframe1 from './../assets/images/bgframe1.png'
import bgframe2 from './../assets/images/bgframe2.png'
import flower from './../assets/images/flower3.png'
import splashBrush from './../assets/images/splash_brush.png'

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

        <p class="font-lexend text-sm @sm:text-sm @md:text-base text-black mt-28 @sm:mt-28 @md:mt-36 z-50">Please join
            us to celebrate our wedding </p>

        <div class="relative w-full flex flex-col items-center justify-center -mt-4 @min-md:mt-0 px-6 md:px-12 z-50">
            <p class="font-rouge-script text-[#E79F63] text-[8rem] @min-sm:text-[12rem]">15</p>
            <p class="font-rouge-script text-[#E79F63] text-[4rem] @min-sm:text-[6rem] -mt-22 @min-sm:-mt-32">Juni</p>
            <p class="font-rouge-script text-[#E79F63] text-[4rem] @min-sm:text-[6rem] -mt-11 @min-sm:-mt-16">2025</p>
        </div>

        <div class="relative w-full px-10 @min-md:px-20 z-50">
            <img :src="splashBrush" alt="Splash Brush" class="w-full h-auto object-contain">
            <p
                class="w-full absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 font-rouge-script text-white text-center text-5xl @sm:text-5xl @md:text-[5rem]">
                Save the Date</p>
        </div>

        <div class="w-full flex flex-row items-center justify-center gap-2 @min-md:gap-6 z-50 mt-4 @md:mt-8">
            <div class="w-16 h-16 @sm:w-18 @sm:h-18 @md:w-24 @md:h-24 bg-[#965A60] flex flex-col items-center justify-center rounded-xl">
                <p class="font-lexend text-xl @sm:text-2xl @md:text-4xl text-white">35</p>
                <p class="font-lexend text-sm @sm:text-sm @md:text-xl text-white">Days</p>
            </div>
            <div class="w-16 h-16 @sm:w-18 @sm:h-18 @md:w-24 @md:h-24 bg-[#965A60] flex flex-col items-center justify-center rounded-xl">
                <p class="font-lexend text-xl @sm:text-2xl @md:text-4xl text-white">20</p>
                <p class="font-lexend text-sm @sm:text-sm @md:text-xl text-white">Hours</p>
            </div>
            <div class="w-16 h-16 @sm:w-18 @sm:h-18 @md:w-24 @md:h-24 bg-[#965A60] flex flex-col items-center justify-center rounded-xl">
                <p class="font-lexend text-xl @sm:text-2xl @md:text-4xl text-white">05</p>
                <p class="font-lexend text-sm @sm:text-sm @md:text-xl text-white">Minutes</p>
            </div>
            <div class="w-16 h-16 @sm:w-18 @sm:h-18 @md:w-24 @md:h-24 bg-[#965A60] flex flex-col items-center justify-center rounded-xl">
                <p class="font-lexend text-xl @sm:text-2xl @md:text-4xl text-white">10</p>
                <p class="font-lexend text-sm @sm:text-sm @md:text-xl text-white">Seconds</p>
            </div>
        </div>

    </section>
</template>

<style scoped></style>