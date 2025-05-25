<script setup>
import bgframe1 from './../assets/images/bgframe1.png'
import bgframe2 from './../assets/images/bgframe2.png'
import flower from './../assets/images/flower2.png'
import couple from './../assets/images/couple1.png'

</script>

<template>
    <section
    class="@container relative bg-white w-full h-full min-h-screen max-w-screen-sm flex flex-col items-center mx-auto overflow-hidden">
    
    <img :src="flower" alt="Flower Top"
            class="absolute top-0 left-1/2 transform -translate-y-1/3 -translate-x-1/2 w-full h-auto object-cover scale-y-[-1]  z-20" />
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

    <div class="flex-1 relative w-full flex flex-col items-center justify-center mt-32 @sm:mt-36 @md:mt-48 px-6 md:px-12 z-50 text-[#965A60]">
        <p class="self-start ml-4 font-mea-culpa text-8xl @sm:text-[8rem] @md:text-[10rem]">Meila</p>
        <p class="font-mea-culpa text-6xl @sm:text-[6rem] @md:text-[8rem]">&</p>
        <p class="self-end font-mea-culpa text-8xl @sm:text-[8rem] @md:text-[10rem] mr-4">Hafif</p>
    </div>

    <img :src="couple" alt="Couple"
            class="w-64 h-64 @min-sm:w-72 @min-sm:h-72 object-cover z-20 scale-x-[-1]" />
    <!-- Couple Bottom -->

  </section>
</template>

<style scoped>
</style>