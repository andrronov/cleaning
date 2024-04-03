<template>
   <defModal @close-modal="closeModal">
      <div class="w-full h-[535px]">
        <h3 class="text-center text-dev-500 text-2xl mb-8 sm:text-3xl">Расчет стоимости</h3>
        <div class="overflow-y-scroll h-full">
         <div id="form" class="w-full bg-white">
            <div class="max-w-7xl mx-auto flex flex-col items-center">      
              <form class="w-full mb-32">
               
               <div class="max-w-7xl mx-auto mb-8">
                  <label  class="block mb-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-white">Тип уборки</label>
                  <select v-model="form.typesCleaning.selected" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                  <option v-for="(type, index) in form.typesCleaning.array" :key="index" :value="type">{{type}}</option>
                  </select>
               </div>

               <div class="max-w-7xl mx-auto flex flex-col">
                 <p v-if="form.typesCleaning.selected === 'После строительства'" class="text-red-800">Доставка оборудования в пределах МКАД - 2000 руб.
                   За пределы МКАД - от 2500 руб.</p>
                  <div class="flex flex-row items-center gap-5 sm:gap-10 mb-8">
                     <div class="flex flex-col w-1/2 items-start gap-4">
                        <div>
                           <label class="block mb-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-white">Где будет проходить уборка</label>
                           <select v-model="form.cleaningInfo.selected" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                             <option v-for="(type, index) in form.cleaningInfo.where" :key="index" :value="type">{{type}}</option>
                             </select>
                        </div>
                        <div class="w-full">
                          <label class="block mb-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-white" v-if="form.cleaningInfo.selected == 'Квартира' && form.typesCleaning.selected == 'Поддерживающая'">Кол-во комнат</label>
                          <label class="block mb-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-white" v-else>Площадь (кв/м)</label>
                          <div class="relative flex w-full sm:w-1/2 items-center">
                              <!-- <button type="button" @click="form.cleaningInfo.areaCount --" :disabled="form.cleaningInfo.areaCount < 2" id="decrement-button" data-input-counter-decrement="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                  <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                  </svg>
                              </button> -->
                              <input type="number" v-model="form.cleaningInfo.areaCount" min="1" max="5" v-if="form.cleaningInfo.selected == 'Квартира' && form.typesCleaning.selected == 'Поддерживающая'" class="bg-gray-50 border-x-0 border-gray-300 font-medium text-center h-10 text-gray-900 text-lg focus:ring-orange-500 focus:border-orange-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
                              <input type="number" v-model="form.cleaningInfo.areaCount" v-else class="bg-gray-50 border-x-0 border-gray-300 font-medium text-center h-10 text-gray-900 text-lg focus:ring-orange-500 focus:border-orange-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
                              
                              <!-- <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-[8px] text-gray-400 space-x-1 rtl:space-x-reverse">
                                  <svg class="w-2.5 h-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
                                  </svg>
                                  <span v-if="form.cleaningInfo.selected == 'Квартира' && form.typesCleaning.selected == 'Поддерживающая'">Комнат</span>
                              </div> -->
                              <!-- <button type="button" v-if="form.cleaningInfo.selected == 'Квартира' && form.typesCleaning.selected == 'Поддерживающая'" @click="form.cleaningInfo.areaCount ++" :disabled="form.cleaningInfo.areaCount > 4" id="increment-button" data-input-counter-increment="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                  <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </button>
                              <button type="button" v-else @click="form.cleaningInfo.areaCount ++" id="increment-button" data-input-counter-increment="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                  <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </button> -->
                          </div>
                          <p class="text-sm text-gray-800" v-if="form.typesCleaning.selected == 'После строительства' && form.cleaningInfo.selected == 'Квартира'">Oкна включены в стоимость</p>
                          <p class="text-sm text-gray-800" v-if="form.typesCleaning.selected == 'После строительства' && form.cleaningInfo.selected == 'Дом'">Oкна НЕ включены в стоимость, расчет идет отдельно</p>
                        </div>
                     </div>
                     <div class="flex w-1/2 flex-col items-start gap-4">
                        <div v-if="form.typesCleaning.selected !== 'После строительства'">
                           <label class="block mb-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-white">Вариант уборки</label>
                           <select v-model="form.variantsCleaning.selected" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                             <option v-for="(type, index) in form.variantsCleaning.array" :key="index" :value="type">{{type}}</option>
                             </select>
                        </div>
                        <label class="block mb-px text-sm sm:text-lg font-medium text-gray-900 dark:text-white">Санузлов</label>
                          <div class="relative flex items-center">
                              <button type="button" @click="form.cleaningInfo.washRooms --" :disabled="form.cleaningInfo.washRooms < 2" id="decrement-button" data-input-counter-decrement="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                  <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                  </svg>
                              </button>
                              <input type="text" id="bedrooms-input" data-input-counter data-input-counter-min="1" aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-full font-medium text-center text-gray-900 text-lg focus:ring-orange-500 focus:border-orange-500 block w-full py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="" :value="form.cleaningInfo.washRooms" required />
                              <button type="button" @click="form.cleaningInfo.washRooms ++" :disabled="form.cleaningInfo.washRooms > 4" id="increment-button" data-input-counter-increment="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                  <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </button>
                          </div>
                     </div>
                  </div>
                  <!-- <p class="mb-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-white">Дополнительно</p> -->
                  <div class="mb-8">
                    <label  class="block mb-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-white">Дополнительно</label>
                    <select multiple v-model="form.additional.selected" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                      <option v-for="(item, index) in form.additional.array" :key="index" :value="item">{{item.name}}</option>
                      </select>
                 </div>
                 <div class="mb-8">
                  <label class="block mb-4 text-sm sm:text-lg font-medium text-gray-900 dark:text-white">Когда к Вам приехать</label>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Укажите дату</label>
                      <input v-model="form.necessarily.date" required id="input-label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="29.02.2024">
                    </div>
                    <div>
                      <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Укажите время</label>
                      <input v-model="form.necessarily.time" required id="input-label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="16:00">
                    </div>
                    <div>
                      <label for="name" id="name" class="block text-sm font-medium mb-2 dark:text-white">Ваше имя</label>
                      <input v-model="form.necessarily.name" required id="input-label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Иван">
                    </div>
                    <div>
                      <label for="phone" class="block text-sm font-medium mb-2 dark:text-white">Номер телефона</label>
                      <input v-model="form.necessarily.phone" required id="input-label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="+7">
                    </div>
                  </div>
                 </div>
                 <div class="mb-8">
                  <label class="block mb-4 text-sm sm:text-lg font-medium text-gray-900 dark:text-white">Как часто нужно убираться</label>
                  <div class="grid grid-cols-2 gap-4">
                    <label
                      v-for="(variant, index) in form.howOften.array"
                      :key="index"
                      class="answer"
                    >
                      <input
                        v-model="form.howOften.selected"
                        type="radio"
                        class="answer_input"
                        name="answer"
                        :value="variant.discount"
                      />
                      <p class="input_question">{{ variant.name }}</p>
                    </label>
                  </div>
                 </div>
                 <div>
                  <label class="block mb-4 text-sm sm:text-lg font-medium text-gray-900 dark:text-white">Ваш адрес</label>
                  <div class="mb-4">
                    <label for="phone" class="block text-sm font-medium mb-2 dark:text-white">Город</label>
                    <input v-model="form.necessarily.city" required id="input-label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Москва">
                  </div>
                  <div class="grid grid-cols-3 gap-2 mb-6">
                    <div>
                      <label class="block text-sm font-medium mb-2 dark:text-white">Дом</label>
                      <input v-model="form.necessarily.house" required id="input-label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                    </div><div>
                      <label class="block text-sm font-medium mb-2 dark:text-white">Корпус</label>
                      <input v-model="form.necessarily.corpus" id="input-label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                    </div><div>
                      <label class="block text-sm font-medium mb-2 dark:text-white">Строение</label>
                      <input v-model="form.necessarily.stroenie" id="input-label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block text-sm font-medium mb-2 dark:text-white">Улица</label>
                    <input v-model="form.necessarily.street" required id="input-label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Москва">
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <div>
                      <label class="block text-sm font-medium mb-2 dark:text-white">Квартира</label>
                      <input v-model="form.necessarily.apartment" id="input-label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                    </div><div>
                      <label class="block text-sm font-medium mb-2 dark:text-white">Подъезд</label>
                      <input v-model="form.necessarily.podezd" id="input-label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                    </div><div>
                      <label class="block text-sm font-medium mb-2 dark:text-white">Домофон</label>
                      <input v-model="form.necessarily.domofon" id="input-label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                    </div>
                  </div>
                  <div class="flex flex-col mt-4 px-px">
                    <label class=" text-sm font-medium mb-2 dark:text-white">Комментарий</label>
                  <textarea v-model="form.necessarily.commentary" name="commentary" id="" cols="30" rows="5" class="border border-black"></textarea>
                  </div>
                 </div>
                 <div class="flex flex-col w-full min-h-64 justify-around items-center border-2 bg-dev-50 border-dev-500 text-black p-2 rounded-xl mt-8">
                  <p class="text-center text-2xl sm:text-3xl mb-4 font-semibold">Уборка {{form.typesCleaning.selected}}</p>
                  <div class="flex flex-row justify-around w-full">
                    <div class="self-center flex flex-col w-auto items-start gap-2">
                      <p v-if="form.cleaningInfo.selected == 'Квартира' && form.typesCleaning.selected == 'Поддерживающая'" class="text-lg sm:text-xl font-medium">Комнат: {{form.cleaningInfo.areaCount}}</p>
                      <p v-else class="text-lg sm:text-xl font-medium">Площадь: {{form.cleaningInfo.areaCount}} кв/м</p>
                      <p class="text-lg sm:text-xl font-medium">Санузлов: {{form.cleaningInfo.washRooms}}</p>
                      <span class="text-lg sm:text-xl font-medium">Дополнительно: <p class="text-gray-800 text-base sm:text-lg underline" v-for="(item, index) in form.additional.selected" :key="index">{{item.name}}</p></span>
                      <p class="text-lg sm:text-xl font-medium">Дата: {{form.necessarily.date}}</p>
                    </div>
                    <div class="bg-dev-500 text-white flex flex-col justify-between p-2 items-center w-1/3 sm:w-1/4 rounded-xl">
                      <p class="text-xl sm:text-2xl font-medium mb-4">Итого</p>
                      <p class="text-lg sm:text-xl mb-2 font-semibold">{{totalPrice}}₽</p>
                      <defButton @click="sendForm" type="submit" class="border-2 px-5 border-white">Заказать</defButton>
                    </div>
                  </div>
                 </div>
               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </defModal>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import defModal from './UI/defModal.vue'
import defButton from './UI/defButton.vue'

const emits = defineEmits({
   closeModal(){return false}
})
function closeModal(){
  emits('closeModal')
}

const totalPrice = computed(() => {
  let price = 0
  if(form.cleaningInfo.selected === 'Квартира'){
    if(form.cleaningInfo.areaCount < 2) {price = 3900}
    price = 3990 + ((form.cleaningInfo.areaCount-1) * 500)
    if(form.cleaningInfo.areaCount > 4){price = 5590}
    if(form.typesCleaning.selected === 'Генеральная'){
      price = form.cleaningInfo.areaCount * 150
    } else if(form.typesCleaning.selected === 'После строительства') {
      price = form.cleaningInfo.areaCount * 240
    }
  } 
  else{
    if(form.typesCleaning.selected === 'Поддерживающая'){
      price = form.cleaningInfo.areaCount * 50
    }
    else if(form.typesCleaning.selected === 'Генеральная'){
      price = form.cleaningInfo.areaCount * 210
    } else if(form.typesCleaning.selected === 'После строительства') {
      price = form.cleaningInfo.areaCount * 240
    }
  }
  if(form.cleaningInfo.washRooms > 1){
      if(form.typesCleaning.selected === 'Поддерживающая'){
        price += (form.cleaningInfo.washRooms-1) * 500
    } else {
      price += (form.cleaningInfo.washRooms-1) * 1500
    }
  }
  if(form.variantsCleaning.selected !== 'Обычная'){
    price = price + (price / 100 * 40)
  }

  const addings = [0]
  form.additional.selected.forEach(item => addings.push(item.price))
  price += addings.reduce((acc, number) => acc + number)

  price = price - (price / 100 * form.howOften.selected).toFixed()
  return price.toFixed()
})

const form = reactive({
  isCalculator: true,
  cleaningInfo: {
    selected: 'Квартира',
    areaCount: 1,
    washRooms: 1,
    where: ['Квартира', 'Офис', 'Дом']
  },
  variantsCleaning: {
    selected: 'Обычная',
    array: ['Обычная', 'Здоровый малыш', 'Здоровый питомец'],
  },
  typesCleaning: {
    selected: 'Поддерживающая',
    array: ['Поддерживающая', 'Генеральная', 'После строительства']
  },
  additional: {
    selected: [],
    array: [
      {
        name: 'Доставить ключи',
        price: 500
      },
      {
        name: 'Холодильник',
        price: 800,
      },
      {
        name: 'Духовка',
        price: 900,
      },
      {
        name: 'Помыть посуду',
        price: 600,
      },
      {
        name: 'Внутри микроволновки',
        price: 700,
      },
      {
        name: 'Внутри кухонных шкафов',
        price: 800,
      },
      {
        name: 'Глажка',
        price: 1000,
      },
      {
        name: 'Окна',
        price: 950,
      },
      {
        name: 'Уборка балкона без окон',
        price: 1000,
      },
    ]
  },
  howOften: {
    selected: 0,
    array: [{
      name: 'Раз в неделю 15%',
      discount: 15
    }, {
      name: 'Раз в две недели 10%',
      discount: 10
    }, {
      name: 'Раз в месяц 5%',
      discount: 5
    }, {
      name: 'Один раз',
      discount: 0
    },]
  },
  necessarily: {
   date: null, time: null, name: null, phone: null, city: null, house: null, corpus: null, stroenie: null, street: null, apartment: null, podezd: null, domofon: null, commentary: null
  }
})

async function sendForm(){
  const res = await fetch(import.meta.env.VITE_SITE_PORT + 'api/application', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(form)
  })
    if(res.ok){
      form.text = 'Заявка успешно отправлена!'
      form.isLoading = false
    } else {
      form.text = 'Произошла ошибка'
      form.isLoading = false
    }
}
</script>

<style scoped>
.answer {
  margin: 2.5px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}
.answer_input:checked + .input_question{
  color: white;
  padding: 5px;
  margin: -5px;
  background-color: #FFA800;
 }
 .answer_input {
   height: 28px;
   width: 28px;
   display: none;
 }
</style>