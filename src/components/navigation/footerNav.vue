<template>
   <footer class="w-full bg-dev-500">
      <div class="max-w-7xl px-2 mx-auto flex flex-row items-center py-8 text-white justify-between">
         <h2 class="text-2xl">NaVi Cleaning</h2>
         <ul class="hidden flex-row sm:flex items-center gap-2">
            <a v-for="(link, index) in props.headers" :key="index" :href="link.href">{{ link.name }}</a>
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
</script>