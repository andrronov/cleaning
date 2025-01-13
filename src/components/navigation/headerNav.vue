<template>
   <header class="fixed w-full py-6 px-4 sm:py-2 backdrop-blur-xl z-40" :class="mobileMenuOpen ? 'bg-white text-black' : 'bg-gray-700/30 text-white'">
     <nav class="mx-auto max-w-7xl flex items-center justify-between sm:px-8" aria-label="Global">
       <div class="flex sm:flex-0">
         <a href="/" class="-m-1.5 p-1.5">
           <span>NoVa Cleaning</span>
           <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> -->
         </a>
       </div>
       <div class="flex sm:hidden">
         <button type="button" tabindex="0" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100" @click="mobileMenuOpen = true">
           <span class="sr-only">Open main menu</span>
           <Bars3Icon class="h-6 w-6" :class="mobileMenuOpen ? 'text-black' : 'text-white'" />
         </button>
       </div>
       <PopoverGroup class="hidden sm:flex sm:gap-x-12">
         <Popover class="relative">
           <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100">
             Услуги
             <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
           </PopoverButton>
 
           <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
             <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-900/5">
               <div class="p-4">
                 <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-sm p-4 text-sm leading-6 hover:bg-gray-50">
                   <div class="flex h-11 w-11 flex-none items-center justify-center rounded-sm bg-gray-50 group-hover:bg-white">
                     <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                   </div>
                   <div class="flex-auto">
                     <router-link :to="item.href" class="block font-semibold text-gray-900">
                       {{ item.name }}
                       <span class="absolute inset-0" />
                     </router-link>
                     <p class="mt-1 text-gray-600">{{ item.description }}</p>
                   </div>
                 </div>
               </div>
             </PopoverPanel>
           </transition>
         </Popover>
         
         <button v-for="(link, index) in props.headers" :key="index" :href="link.href" @click="link.href ? $router.push(link.href) : isCalculatorModalOpen = true" class="text-sm font-semibold leading-6 text-gray-100">{{ link.name }}</button>
        
         <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-100">Marketplace</a>
         <a href="#" class="text-sm font-semibold leading-6 text-gray-100">Company</a> -->
       </PopoverGroup>
       <div class="hidden sm:flex flex-col items-center sm:justify-end">
         <a href="tel:89773788955" class="text-sm font-semibold leading-6 text-gray-100">8- 977-137-91-72</a>
         <defButton @click="toSection('form')" class="bg-dev-10 text-txt-100">Оставить заявку</defButton>
       </div>
     </nav>
     <Dialog as="div" class="sm:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
       <div class="fixed inset-0 z-10" />
       <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
         <div class="flex items-center justify-between">
           <router-link to="/" class="-m-1.5 p-1.5">
            <span>NoVa Cleaning</span>
             <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> -->
           </router-link>
           <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
             <span class="sr-only">Close menu</span>
             <XMarkIcon class="h-6 w-6" aria-hidden="true" />
           </button>
         </div>
         <div class="mt-6 flow-root">
           <div class="-my-6 divide-y divide-gray-500/10">
             <div class="space-y-2 py-6">
               <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                 <DisclosureButton class="flex w-full items-center justify-between rounded-sm py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                   Услуги
                   <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                 </DisclosureButton>
                 <DisclosurePanel class="mt-2 space-y-2">
                   <DisclosureButton v-for="item in products" :key="item.name" as="button" @click.prevent="item.href ? $router.push(item.href) : toSection(item.section)" class="block rounded-sm py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {{ item.name }}
                  </DisclosureButton>
                 </DisclosurePanel>
               </Disclosure>
               <button v-for="(link, index) in props.headers" @click.prevent="link.href ? $router.push(link.href) : mobileMenuOpen = false; isCalculatorModalOpen = true" :key="index" class="-mx-3 block rounded-sm px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ link.name }}</button>
             </div>
             <div class="py-6">
              <defButton @click="toSection('form')" class="border-2 border-black -mx-4">Оставить заявку</defButton>
              </div>
           </div>
         </div>
       </DialogPanel>
     </Dialog>

     <calculator 
     :isOpen="isCalculatorModalOpen"
      @close-modal="isCalculatorModalOpen = false"
      />
   </header>
 </template>
 
 <script setup>
 import { ref } from 'vue'
 import {
   Dialog,
   DialogPanel,
   Disclosure,
   DisclosureButton,
   DisclosurePanel,
   Popover,
   PopoverButton,
   PopoverGroup,
   PopoverPanel,
 } from '@headlessui/vue'
 import {
   ArrowPathIcon,
   Bars3Icon,
   ChartPieIcon,
   CursorArrowRaysIcon,
   FingerPrintIcon,
   SquaresPlusIcon,
   ArrowDownIcon,
   InformationCircleIcon,
   XMarkIcon,
 } from '@heroicons/vue/24/outline'
 import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
 import calculator from '../calculator.vue'

 const products = [
   { name: 'Уборка в квартире', description: '3 вида уборки', href: '/apartment', icon: ChartPieIcon },
   { name: 'Уборка в коттедже', description: 'Чистым будет каждый уголок', href: '/cottage', icon: CursorArrowRaysIcon },
   { name: 'Уборка в офисе', description: 'Для комфорта ваших сотрудников', href: '/office', icon: FingerPrintIcon },
   { name: 'Мойка окон', description: 'Стекло будет блестеть!', href: '/windows', icon: SquaresPlusIcon },
   { name: 'Здоровый малыш', description: 'С заботой о самых любимых', href: '/kids', icon: InformationCircleIcon },
   { name: 'Здоровый питомец', description: 'Ваши питомцы точно оценят это!', href: '/pet', icon: ArrowDownIcon },
   { name: 'Все услуги', description: '', href: '/services', icon: ArrowPathIcon },
 ]

import defButton from '../UI/defButton.vue'

const isCalculatorModalOpen = ref(false);

function toSection(el){
  mobileMenuOpen.value = false
  const section = document.getElementById(el)
  section.scrollIntoView({
    behavior: 'smooth',
        block: 'start',
  })
}

const props = defineProps({
  headers: {
    type: Array,
    require: true
  }
})
 
 const mobileMenuOpen = ref(false)
 </script>