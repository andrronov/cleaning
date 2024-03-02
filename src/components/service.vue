<template>
   <!-- <defaultLayout v-if="serv"> -->
   <defaultLayout>
      <div class="flex flex-col justify-center items-center">
         <div class="absolute flex flex-col justify-between items-center h-52 mt-20">
           <h1 class="font-kyiv text-4xl xs:text-7xl mix-blend-overlay font-medium text-white text-center uppercase">
            <slot name="title"></slot>
           </h1>
           <defButton class="mix-blend-hard-light px-5 py-3 text-lg text-[#555555] bg-[#D9D9D9]">Заказать</defButton>
         </div>
         <img src="/img/clean-house-blacked.jpg" class="w-full min-h-screen object-cover" alt="">
       </div>

       <!-- ABOUT -->
       <div class="w-full bg-dev-50">
         <div class="max-w-7xl mx-auto mt-24">
            <h3 class="uppercase text-3xl sm:text-4xl text-dev-500 text-center mb-12">Об услуге</h3>
            <p class="text-center text-txt-200 text-base sm:text-lg">
               <slot name="about"></slot>
            </p>
         </div>
       </div>

       <!-- TYPES -->
       <div class="w-full bg-dev-50" v-if="props.types">
         <div class="max-w-7xl mx-auto mt-24">
            <p class="text-center text-2xl sm:text-3xl text-dev-500 mb-12">
               <slot name="types"></slot>
            </p>
            <div class="flex flex-row justify-between items-center">
               <div v-for="(type, index) in props.types" :key="index" class="flex flex-col items-center gap-4">
                  <img :src="type?.img" alt="">
                  <p class="text-txt-200 text-base sm:text-lg text-center">{{type.text}}</p>
               </div>
            </div>
         </div>
       </div>

       <!-- PRICES -->
       <!-- FINISH -->
       <div class="w-full bg-dev-50" v-if="props.prices">
         <div class="mt-24 max-w-7xl mx-auto flex flex-col items-center">
            <p class="text-3xl sm:text-4xl text-center text-dev-500 uppercase mb-12">Цены</p>
            <table class="table-auto">
               <thead>
                 <tr>
                   <th v-for="(thead, index) in 2" :key="index">{{thead}}</th>
                 </tr>
               </thead>
               <tbody>
                 <tr v-for="(trow, index) in 5" :key="index">
                   <td>{{ trow }}</td>
                   <td>{{ trow }}</td>
                 </tr>
               </tbody>
             </table>
         </div>
       </div>

       <!-- INCLUDES -->
       <div class="w-full bg-dev-50" v-if="props.includes">
         <div class="max-w-7xl mx-auto flex flex-col items-center mt-24">
            <p class="text-dev-500 text-3xl sm:text-4xl text-center mb-12">{{props.includes?.title}}</p>
            <div class="flex flex-col items-center gap-2">
               <div v-for="(include, index) in props.includes" :key="index" class="flex flex-row gap-2 items-center p-2" :class="index % 2 == 0 ? 'border-2 border-dev-300 text-dev-500' : 'bg-dev-500 text-white'">
                  <img src="/img/accept.svg" class="w-10 h-10" alt="">
                  <p>{{ include }}</p>
               </div>
            </div>
            <defButton class="mt-12 bg-dev-500 text-white">Оставить заявку</defButton>
         </div>
       </div>

       <!-- HOW -->
       <div class="w-full bg-dev-50" v-if="props.how">
         <div class="max-w-7xl mx-auto flex flex-col items-center mt-24">
            <h4 class="text-3xl sm:text-4xl text-center text-dev-500 font-medium mb-12">{{props.how.title}}</h4>
            <p class="text-base sm:text-lg text-txt-200 text-center">{{props.how.text}}</p>
         </div>
       </div>

       <div class="bg-dev-500 w-full">
         <div class="max-w-7xl mt-24 mx-auto flex flex-col items-center">
            <div class="text-white font-semibold flex flex-col gap-2 py-4 text-base sm:text-lg">
               <p>Мы полностью понимаем, что клининг может быть крупной задачей и требовать значительных расходов времени и денег. Поэтому наша компания стремится обеспечить профессиональные клининговые услуги по разумной и приемлемой цене.</p>
               <p>Мы инвестируем в качественные средства и оборудование, чтобы добиться наилучших результатов при уборке вашего дома или квартиры. Мы также обучаем нашу команду специалистов, чтобы они были в курсе последних технологий и методов клининга. В результате, мы можем решить самые сложные задачи эффективно и безопасно для вашего имущества.</p>
               <p>Кроме того, обратившись к нам, вы экономите не только деньги, но и время и силы. Наша команда профессионалов выполняет работу быстро и эффективно, что позволяет вам сконцентрироваться на более важных и приятных вещах в своей жизни. Мы гарантируем, что наши клиенты останутся довольны результатами нашей работы.</p>
               <p>Если у вас возникли дополнительные вопросы, не стесняйтесь задавать. Мы всегда готовы помочь вам с выбором и обсуждением деталей.</p>
            </div>
            <div class="my-12 gap-4 py-4 bg-white w-3/5 sm:w-1/3 rounded-xl border-2 border-dev-100 flex flex-col items-center">
               <div class="flex flex-row items-center w-full justify-between px-2">
                  <p class="text-txt-200 text-sm sm:text-lg">Цена уборки квартиры</p>
                  <p class="text-txt-200 font-normal text-base sm:text-xl">от 3990₽</p>
               </div>
               <defButton class="bg-dev-500 text-white">Заказать</defButton>
            </div>
         </div>
       </div>

       <!-- QUESTIONS -->
       <div class="w-full bg-dev-50" v-if="props.questions">
         <div class="max-w-7xl mx-auto flex flex-col items-center mt-24">
            <p class="text-3xl sm:text-4xl text-center text-dev-500 mb-12 uppercase">Часто задаваемые вопросы</p>
            <div class="w-full rounded-2xl bg-white p-2">
               <Disclosure v-slot="{ open }">
                 <DisclosureButton
                   class="flex w-full justify-between rounded-lg bg-dev-500 px-4 py-2 text-left text-lg font-medium text-blue-100 hover:bg-orange-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75"
                 >
                   <span>{{ props.questions.question }}</span>
                   <ChevronUpIcon
                     :class="open ? 'rotate-180 transform' : ''"
                     class="h-5 w-5 text-blue-200"
                   />
                 </DisclosureButton>
                 <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-gray-800">
                   <p class="mb-4">{{ props.questions.answer }}</p>
                 </DisclosurePanel>
               </Disclosure>
             </div>
         </div>
       </div>
   </defaultLayout>
</template>

<script setup>
import defaultLayout from './UI/defaultLayout.vue'
import defButton from './UI/defButton.vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
   types: {
      type: Array
   },
   prices: {
      type: Array
   },
   includes: {
      type: Object
   },
   how: {
      type: Object
   },
   questions: {
      type: Array
   }
})
</script>

<style>

</style>