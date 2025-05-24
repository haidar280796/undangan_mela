<script setup>
import bgframe1 from './../assets/images/bgframe1.png'
import bgframe2 from './../assets/images/bgframe2.png'
import flower from './../assets/images/flower2.png'
import frame from './../assets/images/frame2.png'

</script>

<template>
    <section
    class="@container relative bg-white w-full h-full min-h-screen max-w-screen-sm flex flex-col justify-center items-center mx-auto pb-6 overflow-hidden">

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

    <div class="relative w-full flex flex-col items-center justify-center z-50">
        <img :src="frame" alt="Frame"
                class="w-full h-full scale-160 @min-md:scale-135" />
        <!-- Frame Center -->
         <p class="absolute px-16 @min-sm:px-18 @min-md:px-32 font-lexend text-center text-xs @sm:text-sm @md:text-base text-[#E79F63] z-50">
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
            <br>
            <br>
            <strong>QS Ar-Rum : 21</strong>
         </p>
    </div>

  </section>
</template>

<style scoped>
</style>