<script setup>
import { nextTick, ref } from 'vue'
import Welcome from './components/Welcome.vue';
import Home from './components/Home.vue';
import Countdown from './components/Countdown.vue';
import Surat from './components/Surat.vue';
import Couple from './components/Couple.vue';
import Location from './components/Location.vue';
import Footer from './components/Footer.vue';
import SendMessage from './components/SendMessage.vue';

const showInvitation = ref(false);

const toggleInvitation = async () => {
  playAudio()
  if (!showInvitation.value) {
    showInvitation.value = true
    await nextTick() // Tunggu DOM render dulu
    scrollToInvitation()
  }
}

const audio = new Audio('/audio/lagu.mp3') // Ganti dengan path lagumu
audio.loop = true // Agar lagu terus diputar berulang
audio.volume = 0.8 // Atur volume sesuai keinginan

const isPlaying = ref(false)

const playAudio = () => {
  if (!isPlaying.value) {
    audio.play().then(() => {
      isPlaying.value = true
    }).catch(e => {
      console.warn('Autoplay diblokir:', e)
    })
  }
}

const toggleAudio = () => {
  if (isPlaying.value) {
    audio.pause()
  } else {
    audio.play()
  }
  isPlaying.value = !isPlaying.value
}

const invitationSection = ref(null)

const scrollToInvitation = () => {
  const top = invitationSection.value?.offsetTop || 0
  window.scrollTo({ top, behavior: 'smooth' })
}

</script>

<template>
  <Welcome :onToggleInvitation="toggleInvitation" />
  <div ref="invitationSection" v-if="showInvitation">
    <button @click="toggleAudio"
      class="fixed z-50 bottom-4 right-4 bg-[#7E8D7A] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
      <span v-if="isPlaying">🔊</span>
      <span v-else>🔇</span>
    </button>
  </div>
  <Home />
  <Countdown />
  <Surat />
  <Couple />
  <Location />
  <SendMessage />
  <Footer />
</template>
