<template>
   <footer class="w-full bg-dev-500">
      <div class="max-w-7xl px-2 mx-auto flex flex-row items-center py-8 text-white justify-between">
         <a href="/" class="text-2xl">NaVi Cleaning</a>
         <ul class="hidden flex-row sm:flex items-center gap-2">
            <button v-for="(link, index) in props.headers" :key="index" :href="link.href" @click="link.href ? '' : toSection(link.section)" class="text-sm font-semibold leading-6 text-gray-100">{{ link.name }}</button>
         </ul>
         <div class="flex flex-row items-center gap-1">
            <a href="#top">Наверх</a>
            <img src="/img/arrow.svg" class="text-white" alt="">
         </div>
      </div>
   </footer>
</template>

<script setup>
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