<script setup>
import bgframe1 from './../assets/images/bgframe1.png'
import bgframe2 from './../assets/images/bgframe2.png'
import flower1 from './../assets/images/flower1.png'
import frame1 from './../assets/images/frame1.png'
import { Mail } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import capitalizeName from '../utils/capitalize';

const props = defineProps({
  onToggleInvitation: Function
})

const guestName = ref('Tamu Undangan')

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const name = urlParams.get('to')
  if (name) {
    guestName.value = decodeURIComponent(name)
  }
})

const handleClick = () => {
  props.onToggleInvitation()
}

</script>

<template>
    <section
    class="@container relative bg-white w-full h-full min-h-screen max-w-screen-sm flex flex-col items-center justify-center mx-auto pb-6 overflow-hidden">
    
    <img :src="flower1" alt="Flower Top Left"
            class="absolute top-6 -left-10 w-80 h-80 sm:w-96 sm:h-96 md:w-96 md:h-96 scale-y-[-1] z-20 rotate-20" />
    <!-- Flower Frame Top Left -->
    <img :src="flower1" alt="Flower Bottom Left"
            class="absolute bottom-0 right-0 w-80 h-80 sm:w-96 sm:h-96 md:w-96 md:h-96 scale-x-[-1] z-20 rotate-20" />
    <!-- Flower Frame Bottom Right -->

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

    <div class="relative w-full h-130 flex flex-col items-center justify-center z-50 mt-10 @sm:mt-0 @md:mt-24">
      <img :src="frame1" alt="Frame" class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full object-contain scale-125 sm:scale-120 md:scale-125" />
      <div class="relative w-1/2 h-1/2 text-[#965A60] flex flex-col items-center justify-center gap-2 mx-auto">
        <p class="absolute top-0 @md:-top-4 font-rouge-script text-7xl @md:text-[7rem]"><span class="text-9xl @md:text-[10rem]">S</span>ave</p>
        <p class="absolute transform translate-y-0 @md:translate-y-3 translate-x-full font-rouge-script text-6xl @md:text-7xl mr-4">The</p>
        <p class="absolute transform translate-y-8 @md:translate-y-14 font-rouge-script text-7xl @md:text-[7rem]"><span class="text-9xl @md:text-[10rem]">D</span>ate</p>
      </div>
      <p class="absolute bottom-1/5 @md:bottom-1/8 text-[#965A60] font-inspiration text-5xl @md:text-6xl">Meila <span class="text-3xl">&</span> Hafif</p>
      
    </div>

    <div class="bg-white px-6 py-6 rounded-lg mt-2 @sm:mt-2 @md:mt-20 @lg:mt-24 text-sm md:text-base text-center font-alice shadow-sm z-50">
      <p class="text-sm md:text-base">Kepada Yth.Bapak/Ibu/Saudara/i</p>
      <p class="text-base md:text-xl mt-2">{{ capitalizeName(decodeURIComponent(guestName)) }}</p>
    </div>

    <button @click.prevent="handleClick"
      class="bg-[#965A60] text-white rounded-full inline-flex items-center justify-center gap-2 mt-6 @sm:mt-6 @md:mt-12 w-auto px-4 py-2.5 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] animate-bounce z-50">
      <Mail />
      <span class="text-sm md:text-base">Buka Undangan</span>
    </button>

  </section>
</template>

<style scoped>
</style>