<template>
  <defaultLayout>
    <div class="w-full bg-dev-50">
      <div class="max-w-7xl mx-auto flex flex-col items-center mt-24">
        <h3 class="text-3xl sm:text-4xl text-center mb-12 text-dev-500">
          Цены
        </h3>
        <div
          class="w-11/12 rounded-xl border-4 gap-4 py-3 px-px mb-12 border-dev-500 flex flex-col items-center"
        >
          <p class="text-2xl mb-8 sm:text-3xl font-light">Уборка квартиры</p>
          <div class="flex flex-row text-xl sm:text-2xl justify-around w-full">
            <p>1-комнатная</p>
            <p>от 3990р</p>
          </div>
          <div class="flex flex-row text-xl sm:text-2xl justify-around w-full">
            <p>2-комнатная</p>
            <p>от 4490р</p>
          </div>
          <div class="flex flex-row text-xl sm:text-2xl justify-around w-full">
            <p>3-комнатная</p>
            <p>от 4990р</p>
          </div>
          <div class="flex flex-row text-xl sm:text-2xl justify-around w-full">
            <p>4-комнатная</p>
            <p>от 5490р</p>
          </div>
          <div class="flex flex-row text-xl sm:text-2xl justify-around w-full">
            <p>5-комнатная</p>
            <p>от 5590р</p>
          </div>
        </div>

        <div
          class="w-11/12 rounded-xl border-4 gap-4 py-3 px-px mb-12 border-dev-500 flex flex-col items-center text-center"
        >
          <p class="text-2xl mb-8 sm:text-3xl font-light">Уборка дома</p>
          <div class="flex flex-row text-xl sm:text-2xl justify-around w-full">
            <p class="w-1/2">Поддерживающая уборка</p>
            <p class="w-1/2">от 50р кв/метр</p>
          </div>
          <div class="flex flex-row text-xl sm:text-2xl justify-around w-full">
            <p class="w-1/2">Генеральная уборка</p>
            <p class="w-1/2">от 210р кв/метр</p>
          </div>
          <div class="flex flex-row text-xl sm:text-2xl justify-around w-full">
            <p class="w-1/2">После ремонта/строительства</p>
            <p class="w-1/2">от 240р кв/метр</p>
          </div>
          <div class="flex flex-row text-xl sm:text-2xl justify-around w-full">
            <p class="w-1/2">После арендатора (в зависимости от загрязнения)</p>
            <p class="w-1/2">от 250р кв/метр</p>
          </div>
          <div class="flex flex-row text-xl sm:text-2xl justify-around w-full">
            <p class="w-1/2">Если в отделке присутствует дерево и мрамор</p>
            <p class="w-1/2">Цена по запросу</p>
          </div>
          <div class="flex flex-row text-xl sm:text-2xl justify-around w-full">
            <p class="w-1/2">Выезд за пределы МКАД</p>
            <p class="w-1/2">от 1500р</p>
          </div>
        </div>

        <div
          class="w-11/12 rounded-xl border-4 gap-4 py-3 px-px mb-16 border-dev-500 flex flex-col items-center"
        >
          <p class="text-2xl text-center mb-8 sm:text-3xl font-light">
            Дополнительные опции (цены от)
          </p>
          <div
            class="w-full text-lg sm:text-xl flex flex-col sm:flex-row items-center justify-between px-2"
          >
            <div class="flex flex-col w-full sm:w-1/2 px-2 items-center gap-2">
              <div
                v-for="(serv, index) in prices.firstColumn"
                :key="index"
                class="flex flex-row gap-1 xs:gap-3 justify-between w-full"
              >
                <span class="text-gray-900 text-start">{{ serv.name }}</span>
                <span class="text-gray-800 text-end min-w-20">{{
                  serv.price
                }}</span>
              </div>
            </div>
            <div class="flex flex-col w-full sm:w-1/2 px-2 items-center gap-2">
              <div
                v-for="(serv, index) in prices.secondColumn"
                :key="index"
                class="flex flex-row gap-1 xs:gap-3 justify-between w-full"
              >
                <p class="text-gray-900 text-start">{{ serv.name }}</p>
                <p class="text-gray-800 text-end min-w-20">{{ serv.price }}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-11/12 rounded-xl border-4 gap-4 py-3 px-px mb-12 border-dev-500 flex flex-col items-center"
        >
          <p class="text-2xl mb-8 sm:text-3xl font-light">Фасады</p>
          <div
            class="flex flex-row text-lg sm:text-xl justify-between w-full px-2"
          >
            <span
              >Техническая мойка фасада аппаратом высокого давления(сбить
              атмосферную грязь)</span
            >
            <span class="min-w-20 text-end">от 45р/м2</span>
          </div>
          <div
            class="flex flex-row text-lg sm:text-xl justify-between w-full px-2"
          >
            <p>
              Мойка фасадов (декоративная шуба, декоративный бетон, поверхности
              с микрорельефом, лепнина) аппаратом высокого давления с
              регулируемой мощностью, без добавления химии
            </p>
            <span class="min-w-20 text-end">от 50р/м2</span>
          </div>
          <div
            class="flex flex-row text-lg sm:text-xl justify-between w-full px-2"
          >
            <p>
              Глубокая химическая чистка фасадов (декоративный бетон, мрамор,
              алюминий, стальные поверхности) с использованием кислотных моющих
              средств
            </p>
            <span class="min-w-20 text-end">от 100р/м2</span>
          </div>
          <div
            class="flex flex-row text-lg sm:text-xl justify-between w-full px-2"
          >
            <p>Очистка кирпичной кладки фасадов от высолов</p>
            <span class="min-w-20 text-end">от 150р/м2</span>
          </div>
          <div
            class="flex flex-row text-lg sm:text-xl justify-between w-full px-2"
          >
            <p>Очистка фасада от облупившейся краски и копоти</p>
            <span class="min-w-20 text-end">от 160р/м2</span>
          </div>
        </div>
        <p class="text-black text-xl font-medium">
          При заказе в день уборки, цена может измениться
        </p>

        <div
          class="flex flex-row text-center items-end w-full mt-12 bg-dev-100 py-10 justify-around"
        >
          <div class="flex w-1/2 flex-col items-center gap-4">
            <p class="font-semibold text-xl sm:text-2xl">
              Расчитать стоимость самостоятельно
            </p>
            <defButton
              @click="isCalculatorModalOpen = true"
              class="bg-dev-500 text-white"
              >Расчитать стоимость</defButton
            >
          </div>
          <div class="flex w-1/2 flex-col items-center gap-4">
            <p class="font-semibold text-xl sm:text-2xl">Быстро оформить</p>
            <defButton @click="toSection('form')" class="bg-dev-500 text-white"
              >Оставить заявку</defButton
            >
          </div>
        </div>
      </div>
    </div>

    <calculator
      :isOpen="isCalculatorModalOpen"
      @close-modal="isCalculatorModalOpen = false"
    />
  </defaultLayout>
</template>

<script setup>
import calculator from "./calculator.vue";
import defaultLayout from "./UI/defaultLayout.vue";
import defButton from "./UI/defButton.vue";
import { ref } from "vue";

const prices = {
  firstColumn: [
    {
      name: "Доставить ключи (в две стороны)",
      price: "500р(700р)",
    },
    { name: "Холодильник", price: "900р" },
    { name: "Духовка(противень+доплата 300р за шт.)", price: "900р" },
    { name: "Внутри кухонных шкафов", price: "800р/час" },
    { name: "Помыть посуду (30 мин)", price: "600р" },
    { name: "Посудомоечная машина", price: "750р" },
    { name: "Стиральная машина", price: "750р" },
    { name: "Внутри микроволновки", price: "700р" },
    { name: "Кофемашина", price: "750р" },
    { name: "Глажка", price: "1000р/час" },
    { name: "Окна (стандартное двухстворчатое окно)", price: "950р" },
    { name: "Трехстворчатое окно", price: "1250р" },
    { name: "Окна на балконе (1 створка)", price: "750р" },
    { name: "Панорамное остекление", price: "550 р/м2" },
    { name: "Двойные деревянные окна - цена удваивается", price: "х2" },
    { name: "Балкон (уборка без мытья окон)", price: "1000р" },
    { name: "Почистить жалюзи 1шт", price: "от 400р" },
    { name: "Доп. санузел (генеруборка)", price: "3000р" },
    { name: "Доп. санузел", price: "1500р" },
    {
      name: "*В поддерживающую уборку входит только 1 санузел",
      price: "50р/м2",
    },
  ],
  secondColumn: [
    {
      name: "Здоровый малыш",
      price: "+40% к стоимости",
    },
    { name: "Здоровый питомец", price: "+40% к стоимости" },
    { name: "Генеральная уборка Санузла", price: "6500р" },
    { name: "Генеральная уборка Кухни (all inclusive)", price: "7500р" },
    { name: "Генеральная уборка Кухни (без техники)", price: "6500р" },
    { name: "Москитная сетка 1шт", price: "200р" },
    { name: "Балконный блок (дверь с окном)", price: "1500р" },
    { name: "Ковер, ковр покрытие (химч)", price: "450р/кв.м" },
    { name: "Стула без тканевой спинки (химч)", price: "от 300р" },
    { name: "Стул с тканевой спинкой (химч)", price: "от 400 р" },
    { name: "Подушка (химч)", price: "200р" },
    { name: "Пуфик (химч)", price: "500р" },
    { name: "Люстра", price: "500р" },
    { name: "Хрустальная люстра", price: "800р" },
    { name: "Шторы (постирать, погладить)", price: "500р/шт" },
    {
      name: "*Доставка оборудования по Москве(в область)",
      price: "от 2500р (от 3500р)",
    },
    { name: "*Подтверждение заказа принимается", price: "до 18.00" },
    {
      name: "*Если клинеры заканчивают уборку после 12 часов ночи дорогу оплачивает клиент(такси).",
      price: "",
    },
  ],
};

const isCalculatorModalOpen = ref(false);

function toSection(el) {
  const section = document.getElementById(el);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
</script>

<style></style>
