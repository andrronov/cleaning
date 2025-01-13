<template>
  <div class="flex flex-col items-center">
    <headerNav :headers="headers" />
    <slot></slot>
    <!-- FORM -->
    <div id="form" class="w-full bg-dev-50">
      <div class="max-w-7xl mx-auto flex flex-col items-center">
        <h6 class="text-dev-300 text-4xl text-center mt-44 mb-24 mx-2">
          Оставьте заявку прямо сейчас!
        </h6>
        <form class="w-full max-w-96 mb-32">
          <div class="mb-5 mx-2">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Имя</label
            >
            <input
              v-model="form.name"
              type="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="Иван"
              required
            />
          </div>
          <div class="mb-5 mx-2">
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Номер телефона</label
            >
            <input
              v-model="form.phone"
              type="phone"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="+7"
              required
            />
          </div>
          <div class="flex items-center mb-5 mx-2">
            <div class="flex items-center h-5">
              <input
              v-model="form.isAgreed"
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label for="remember" class="ms-2 text-xs font-medium text-gray-900"
              >Я согласен с условиями <span @click="openModal" class="font-semibold hover:font-bold cursor-pointer text-dev-500 underline">договора</span> об оказании услуг</label
            >
          </div>

          <defModal :isOpen="opened" @close-modal="opened = false">
            <img v-for="(doc, index) in documents" :key="index" :src="doc" class="my-12" alt="">
          </defModal>

          <defButton
            @click.prevent="sendForm"
            class="text-white bg-dev-500 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >Подтвердить</defButton>

          <p v-if="form.text" class="text-center text-lg sm:text-xl mt-2 text-dev-500">{{ form.text }}</p>
          <img v-if="form.isLoading" class="mx-auto w-24 h-24" src="/img/Infinity-1s-200px.svg" alt="">
        </form>
      </div>
    </div>
    <footerNav :headers="headers" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import footerNav from '../navigation/footerNav.vue';
import headerNav from '../navigation/headerNav.vue';
import defButton from './defButton.vue';
import defModal from './defModal.vue'

const headers = [
  // {
  //   name: 'Главная',
  //   href: '#'
  // },
  // {
  //   name: 'Услуги',
  //   href: '#'
  // },
  {
    name: "Расчет стоимости",
  },
  {
    name: "Цены",
    href: "/prices",
  },
  // {
  //   name: 'Типы уборок',
  //   href: '#'
  // },
  {
    name: "Контакты",
    href: "/contacts",
  },
]

const form = reactive({
  name: null,
  phone: null,
  isAgreed: false,
  isLoading: false
})


async function sendForm(){
  if(form.isAgreed && form.name && form.phone){
    form.isLoading = true
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
  } else {
    form.text = "Все поля должны быть заполнены"
    setTimeout(() => {
      form.text = null
    }, 3000);
  }
}


const documents = ['/img/договор НаВи.jpg', '/img/договор НаВи1.jpg', '/img/договор НаВи2.jpg', '/img/договор НаВи3.jpg', '/img/договор НаВи4.jpg', '/img/договор НаВи5.jpg', '/img/договор НаВи6.jpg', '/img/договор НаВи7.jpg', '/img/договор НаВи8.jpg']
const opened = ref(false)
function openModal(){
  opened.value = true
}
</script>
