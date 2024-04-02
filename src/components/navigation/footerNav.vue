<template>
   <footer id="footer" class="w-full bg-dev-500">
      <div class="max-w-7xl px-2 mx-auto flex flex-row items-center py-8 text-white justify-between">
         <a href="/" class="text-2xl font-bold">NaVi Cleaning</a>
         <ul class="hidden flex-row sm:flex items-center gap-2">
            <button v-for="(link, index) in props.headers" :key="index" :href="link.href" @click="link.href ? router.push(link.href) : toSection(link.section)" class="text-sm font-semibold leading-6 text-gray-100">{{ link.name }}</button>
         </ul>
         <div class="flex flex-row items-center gap-1">
            <a href="https://wa.me/79055836008">
               <img src="/img/whatsapp.svg" class="text-white w-10 h-10" alt="">
            </a>
            <a href="https://wa.me/79773789259">
               <img src="/img/whatsapp.svg" class="text-white w-10 h-10" alt="">
            </a>
            <a href="https://t.me/ecocleaningM">
               <img src="/img/telegram.svg" class="text-white w-10 h-10" alt="">
            </a>
         </div>
      </div>   
   </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
   headers: {
      type: Array,
      require: true
   }
})

function toSection(el){
  const section = document.getElementById(el)
  section.scrollIntoView({
    behavior: 'smooth',
        block: 'start',
  })
}
</script>