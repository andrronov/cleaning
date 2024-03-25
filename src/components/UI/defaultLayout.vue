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
        <form class="w-80 mb-32">
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
          <div class="flex items-start mb-5 mx-2">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900"
              >Remember me</label
            >
          </div>
          <defButton
            @click.prevent="sendForm"
            class="text-white bg-dev-500 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >Подтвердить</defButton
          >
        </form>
      </div>
    </div>
    <footerNav :headers="headers" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import footerNav from "../navigation/footerNav.vue";
import headerNav from "../navigation/headerNav.vue";
import defButton from "./defButton.vue";
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
    name: "Сертификаты",
    section: "sertificates",
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
];
const form = reactive({
  name: null,
  phone: null,
});
async function sendForm() {
  const res = await fetch(import.meta.env.VITE_SITE_PORT + "api/application", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(form),
  });
  console.log(res);
  console.log(form);
}
</script>