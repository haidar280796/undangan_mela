<script setup>
import logoMuamalat from './../assets/images/muamalat-logo.png'
import bgframe2 from './../assets/images/bgframe2.png'
import flower from './../assets/images/flower3.png'
import { Clock, MessageSquareMore, RefreshCw, Send } from 'lucide-vue-next';
import { useToast } from 'vue-toast-notification';
import { onMounted, ref } from 'vue'
import { supabase } from '../utils/supabase'
import { formatWaktuRelative } from '../utils/formattime'

const toast = useToast();

const nama = ref('')
const ucapan = ref('')
const kehadiran = ref('')
const totalUcapan = ref(0)
const daftarUcapan = ref([])
const loading = ref(false)
const perPage = 5
const page = ref(1)
const moreData = ref(true)
const hiddenInput = ref(null)

const submitForm = async () => {
    if (!nama.value) {
        toast.error('Nama harus diisi!')
        return
    }

    if (!ucapan.value) {
        toast.error('Ucapan harus diisi!')
        return
    }

    if (!kehadiran.value) {
        toast.error('Kehadiran harus dipilih!')
        return
    }

    const { error } = await supabase.from('guest_messages').insert([
        {
            name: nama.value,
            message: ucapan.value,
            attendance: kehadiran.value,
        },
    ])

    if (error) {
        toast.error('Gagal mengirim ucapan!')
    } else {
        toast.success('Ucapan berhasil dikirim!')
        nama.value = ''
        ucapan.value = ''
        kehadiran.value = ''
    }
}

const fetchUcapan = async () => {
    loading.value = true
    const from = (page.value - 1) * perPage
    const to = from + perPage - 1

    const { data, count, error } = await supabase
        .from('guest_messages')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(from, to)

    if (error) {
        console.error('Gagal mengambil data:', error)
    } else {
        daftarUcapan.value.push(...data)
        totalUcapan.value = count
        if (data.length < perPage) {
            moreData.value = false
        }
    }

    loading.value = false
}

const loadMore = () => {
  page.value++
  fetchUcapan()
}

const setupRealtime = () => {
    supabase
        .channel('ucapan-realtime')
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'guest_messages'
        }, payload => {
            daftarUcapan.value.unshift(payload.new)
            totalUcapan.value++
        })
        .subscribe()
}

onMounted(() => {
    fetchUcapan()
    setupRealtime()
})


const copyClipboard = async () => {
  const input = hiddenInput.value
  input.select()
  document.execCommand('copy')
  toast.success('Berhasil disalin ke clipboard!')
}
</script>

<template>
     <input ref="hiddenInput" type="text" value="356001552111"
      class="sr-only" readonly />
    <section
        class="@container relative bg-[#FFEDEF] w-full h-full min-h-screen max-w-screen-sm flex flex-col items-center mx-auto pb-6 overflow-hidden">

        <img :src="bgframe2" alt="Frame Top"
            class="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-auto scale-170 z-0" />
        <!-- Frame Top -->

        <img :src="flower" alt="Flower Top"
            class="absolute top-0 left-1/2 transform -translate-y-1/3 -translate-x-1/2 w-full h-auto object-cover scale-115 rotate-180 z-20 animate-flower-sway" />
        <!-- Flower Frame Top -->

        <img :src="flower" alt="Flower Bottom"
            class="absolute bottom-0 left-1/2 transform translate-y-1/4 -translate-x-1/2 w-full h-auto object-cover scale-115 z-20 animate-flower-sway" />
        <!-- Flower Frame Bottom -->

        <p
            class="font-ephesis text-center text-[#965A60] text-3xl @min-sm:text-4xl @min-md:text-5xl mt-32 @min-sm:mt-32 @min-md:mt-48 z-50"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            Kirim Doa & Ucapan</p>

        <div class="w-full px-6 sm:px-14 md:px-20 overflow-hidden flex-col items-center z-50">
            <form v-on:submit.prevent="submitForm" class="flex flex-col gap-2 mt-6 mb-10">
                <div class="mt-2">
                    <label for="nama_lengkap">
                        <span class="text-sm font-medium text-gray-700 sr-only"> Nama </span>

                        <input type="text" id="nama_lengkap" placeholder="Nama" v-model="nama"
                            class="w-full px-3 py-2.5 rounded-lg border-gray-300 shadow-sm text-sm md:text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#965A60] font-alice" />
                    </label>
                </div>
                <div class="mt-2">
                    <label for="nama_lengkap">
                        <span class="text-sm font-medium text-gray-700 sr-only"> Kehadiran </span>

                        <select id="kehadiran" v-model="kehadiran"
                            class="w-full px-3 py-2.5 rounded-lg border-gray-300 shadow-sm text-sm md:text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#965A60] font-alice">
                            <option value="">Pilih Kehadiran</option>
                            <option value="hadir">Hadir</option>
                            <option value="tidak_hadir">Tidak Hadir</option>
                            <option value="ragu">Ragu</option>
                        </select>
                    </label>
                </div>
                <div class="mt-2">
                    <label for="nama_lengkap">
                        <span class="text-sm font-medium text-gray-700 sr-only"> Ucapan & Doa </span>

                        <textarea id="ucapan" placeholder="Ucapan & Doa" v-model="ucapan"
                            class="w-full px-3 py-2.5 rounded-lg border-gray-300 shadow-sm text-sm md:text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#965A60] font-alice"></textarea>
                    </label>
                </div>
                <button type="submit"
                    class="self-end inline-flex px-4 py-2 flex items-center justify-center gap-2 bg-[#965A60] rounded-md text-center">
                    <Send class="w-4 h-4 text-white" />
                    <p class="text-sm md:text-base text-white font-alice">Kirim</p>
                </button>
            </form>

            <div
                class="mt-4 py-1 md:py-2 text-base md:text-lg text-left font-alice border-b-2 border-[#965A60] text-[#575757]">
                <p>{{ totalUcapan }} Best Friend Whises</p>
            </div>

            <div class="flex flex-col gap-2 md:gap-4 mt-2">
                <div v-for="(item, index) in daftarUcapan" :key="item.id"
                    class="flex flex-col gap-2 px-2.5 py-2.5 bg-white rounded-md"
                    :style="{ animationDelay: (index * 50) + 'ms' }">
                    <div class="flex items-center gap-2 ">
                        <div class="flex items-center gap-2 mr-auto">
                            <p class="text-sm md:text-base text-[#575757] font-alice ">{{ item.name }}</p>
                            <p class="text-xs md:text-sm text-[#965A60] font-alice italic ">-</p>
                            <p class="text-xs md:text-sm text-[#965A60] font-alice italic ">{{ (item.attendance == 'hadir' ? 'Hadir' : item.attendance == 'tidak_hadir' ? 'Tidak Hadir'  : 'Ragu') }}</p>
                        </div>
                        <Clock class="text-[#965A60]" size="14px" />
                        <p class="text-sm md:text-base text-[#575757] font-alice">{{
                            formatWaktuRelative(item.created_at) }}</p>
                    </div>
                    <div class="fade-in flex items-center gap-2">
                        <MessageSquareMore class="text-[#965A60]" size="16px" />
                        <p class="w-full text-sm md:text-base text-[#575757] font-alice">{{ item.message }}</p>
                    </div>
                </div>
            </div>

            <div v-if="loading" class="text-center text-white mt-4">Loading...</div>

            <div class="mt-6 text-center">
                <button @click.prevent="loadMore"
                    class="inline-flex px-4 py-2 flex items-center justify-center gap-2 bg-[#965A60] rounded-md text-center cursor-pointer">
                    <RefreshCw class="w-4 h-4 text-white" />
                    <p class="text-sm md:text-base text-white font-alice">Load More</p>
                </button>
            </div>

        </div>

        <p
            class="font-ephesis text-center text-[#965A60] text-3xl @min-sm:text-4xl @min-md:text-5xl mt-16 @min-sm:mt-16 @min-md:mt-24 z-50"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            Amplop Digital</p>

        <p
            class="font-lexend text-center text-sm @sm:text-sm @md:text-base text-black mt-4 px-6 @min-md:px-12 z-50"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            Do'a Anda sangat berarti dan kebahagiaan untuk kami. <br>Dan jika memberi adalah ungkapan tanda kasih Anda,
            Anda dapat memberi kado secara cashless.</p>

        <div class="grid grid-cols-1 gap-10 mt-10 z-50">
            <div class="flex flex-col gap-2 pb-4" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <img :src="logoMuamalat" alt="Logo Muamalat" class="h-10 w-full object-contain">
                <p
                class="font-lexend text-center text-black text-base @min-sm:text-lg">
                Rekening: 35xxxxxx</p>
                <p
                class="font-lexend text-center text-black text-sm @min-sm:text-base">
                Meilasari</p>
                <button type="button" @click.prevent="copyClipboard" class="flex items-center justify-center gap-2 bg-[#965A60] text-white py-1.5 px-3 rounded-full font-semibold hover:bg-[#8a484e] transition cursor-pointer">
                    Salin
                </button>
            </div>
        </div>
        

        <div class="w-full h-48">

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
            transform: rotate(-10deg);
        }

    }

    .animate-flower-sway {
        animation: flower-sway 4s ease-in-out infinite;
    }
}
</style>
