<template>
  <defModal @close-modal="closeModal">
    <div class="w-full h-[535px]">
      <h3 class="text-center text-dev-500 text-2xl mb-8 sm:text-3xl">
        Расчет стоимости
      </h3>
      <div class="overflow-y-scroll h-full">
        <div id="form" class="w-full bg-white text-black">
          <div class="max-w-7xl mx-auto flex flex-col items-center">
            <form class="w-full mb-32">
              <div class="max-w-7xl mx-auto mb-8">
                <label
                  class="block mb-2 text-sm sm:text-lg font-medium text-gray-900"
                  >Тип уборки</label
                >
                <select
                  v-model="form.typesCleaning.selected"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                >
                  <option
                    v-for="(type, index) in form.typesCleaning.array"
                    :key="index"
                    :value="type"
                  >
                    {{ type }}
                  </option>
                </select>
              </div>

              <div class="max-w-7xl mx-auto flex flex-col">
                <p
                  v-if="form.typesCleaning.selected === 'После строительства'"
                  class="text-red-800"
                >
                  Доставка оборудования в пределах МКАД - 1000 руб. За пределы
                  МКАД - от 1500 руб.
                </p>
                <div class="flex flex-row items-center gap-5 sm:gap-10 mb-8">
                  <div class="flex flex-col w-1/2 items-start gap-4">
                    <div>
                      <label
                        class="block mb-2 text-sm sm:text-lg font-medium text-gray-900"
                        >Где будет проходить уборка</label
                      >
                      <select
                        v-model="form.cleaningInfo.selected"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                      >
                        <option
                          v-for="(type, index) in form.cleaningInfo.where"
                          :key="index"
                          :value="type"
                        >
                          {{ type }}
                        </option>
                      </select>
                    </div>
                    <div class="w-full">
                      <label
                        class="block mb-2 text-sm sm:text-lg font-medium text-gray-900"
                        >Площадь (кв/м)</label
                      >
                      <div class="relative flex w-full sm:w-1/2 items-center">
                        <input
                          type="number"
                          v-model="form.cleaningInfo.areaCount"
                          class="bg-gray-50 border border-gray-300 rounded-lg font-medium text-center h-10 text-gray-900 text-lg focus:ring-orange-500 focus:border-orange-500 block w-full"
                          required
                        />
                      </div>
                      <p
                        class="text-sm text-gray-800"
                        v-if="
                          form.typesCleaning.selected ==
                            'После строительства' &&
                          form.cleaningInfo.selected == 'Квартира'
                        "
                      >
                        Oкна включены в стоимость
                      </p>
                      <p
                        class="text-sm text-gray-800"
                        v-if="
                          form.typesCleaning.selected ==
                            'После строительства' &&
                          form.cleaningInfo.selected == 'Дом'
                        "
                      >
                        Oкна НЕ включены в стоимость, расчет идет отдельно
                      </p>
                    </div>
                  </div>
                  <div class="flex w-1/2 flex-col items-start gap-4">
                    <div
                      v-if="
                        form.typesCleaning.selected !== 'После строительства'
                      "
                    >
                      <label
                        class="block mb-2 text-sm sm:text-lg font-medium text-gray-900"
                        >Вариант уборки</label
                      >
                      <select
                        v-model="form.variantsCleaning.selected"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                      >
                        <option
                          v-for="(type, index) in form.variantsCleaning.array"
                          :key="index"
                          :value="type"
                        >
                          {{ type }}
                        </option>
                      </select>
                    </div>
                    <label
                      class="block mb-px text-sm sm:text-lg font-medium text-gray-900"
                      >Санузлов</label
                    >
                    <div class="relative flex items-center">
                      <input
                        type="number"
                        id="bedrooms-input"
                        aria-describedby="helper-text-explanation"
                        class="bg-gray-50 border border-gray-300 rounded-lg h-full font-medium text-center text-gray-900 text-lg focus:ring-orange-500 focus:border-orange-500 block w-full py-2"
                        placeholder=""
                        :value="form.cleaningInfo.washRooms"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-8">
                  <label
                    class="block mb-2 text-sm sm:text-lg font-medium text-gray-900"
                    >Дополнительно</label
                  >
                      <div class="w-full grid grid-cols-1 xs:grid-cols-2">
                        <label
                          v-for="(item, index) in form.additional.array"
                          :key="index"
                          class="inline-flex items-center space-x-1 xs:text-lg"
                        >
                        <span>{{ item.name }} ({{ item.price }}р)</span>
                        <input
                          type="checkbox"
                          :value="item"
                          v-model="form.additional.selected"
                          class="form-checkbox text-orange-500 rounded w-5 h-5 focus:ring-orange-500 focus:ring-2"
                        />
                        </label>
                      </div>
                </div>
                <div class="mb-8">
                  <label
                    class="block mb-4 text-sm sm:text-lg font-medium text-gray-900"
                    >Когда к Вам приехать</label
                  >
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        for="input-label"
                        class="block text-sm font-medium mb-2"
                        >Укажите дату</label
                      >
                      <input
                        v-model="form.necessarily.date"
                        required
                        id="input-label"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        placeholder="29.02.2024"
                      />
                    </div>
                    <div>
                      <label
                        for="input-label"
                        class="block text-sm font-medium mb-2"
                        >Укажите время</label
                      >
                      <input
                        v-model="form.necessarily.time"
                        required
                        id="input-label"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        placeholder="16:00"
                      />
                    </div>
                    <div>
                      <label
                        for="name"
                        id="name"
                        class="block text-sm font-medium mb-2"
                        >Ваше имя</label
                      >
                      <input
                        v-model="form.necessarily.name"
                        required
                        id="input-label"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        placeholder="Иван"
                      />
                    </div>
                    <div>
                      <label
                        for="phone"
                        class="block text-sm font-medium mb-2"
                        >Номер телефона</label
                      >
                      <input
                        v-model="form.necessarily.phone"
                        required
                        id="input-label"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        placeholder="+7"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-8">
                  <label
                    class="block mb-4 text-sm sm:text-lg font-medium text-gray-900"
                    >Как часто нужно убираться</label
                  >
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
                  <label
                    class="block mb-4 text-sm sm:text-lg font-medium text-gray-900"
                    >Ваш адрес</label
                  >
                  <div class="mb-4">
                    <label
                      for="phone"
                      class="block text-sm font-medium mb-2"
                      >Город</label
                    >
                    <input
                      v-model="form.necessarily.city"
                      required
                      id="input-label"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                      placeholder="Москва"
                    />
                  </div>
                  <div class="grid grid-cols-3 gap-2 mb-6">
                    <div>
                      <label
                        class="block text-sm font-medium mb-2"
                        >Дом</label
                      >
                      <input
                        v-model="form.necessarily.house"
                        required
                        id="input-label"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-sm font-medium mb-2"
                        >Корпус</label
                      >
                      <input
                        v-model="form.necessarily.corpus"
                        id="input-label"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-sm font-medium mb-2"
                        >Строение</label
                      >
                      <input
                        v-model="form.necessarily.stroenie"
                        id="input-label"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                      />
                    </div>
                  </div>
                  <div class="mb-4">
                    <label
                      class="block text-sm font-medium mb-2"
                      >Улица</label
                    >
                    <input
                      v-model="form.necessarily.street"
                      required
                      id="input-label"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                      placeholder="Москва"
                    />
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <div>
                      <label
                        class="block text-sm font-medium mb-2"
                        >Квартира</label
                      >
                      <input
                        v-model="form.necessarily.apartment"
                        id="input-label"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-sm font-medium mb-2"
                        >Подъезд</label
                      >
                      <input
                        v-model="form.necessarily.podezd"
                        id="input-label"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-sm font-medium mb-2"
                        >Домофон</label
                      >
                      <input
                        v-model="form.necessarily.domofon"
                        id="input-label"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col mt-4 px-px">
                    <label class="text-sm font-medium mb-2"
                      >Комментарий</label
                    >
                    <textarea
                      v-model="form.necessarily.commentary"
                      name="commentary"
                      id=""
                      cols="30"
                      rows="5"
                      class="border border-black"
                    ></textarea>
                  </div>
                </div>
                <div
                  class="flex flex-col w-full min-h-64 justify-around items-center border-2 bg-dev-50 border-dev-500 text-black p-2 rounded-xl mt-8"
                >
                  <p class="text-center text-2xl sm:text-3xl font-semibold">
                    Уборка {{ form.typesCleaning.selected }}
                  </p>
                  <span
                    class="text-sm text-gray-700 mb-4 mt-1 text-center"
                    v-if="form.typesCleaning.selected === 'После арендатора'"
                    >Итоговая стоимость зависит от степени загрязнения</span
                  >
                  <div class="flex flex-row justify-around w-full px-2">
                    <div
                      class="self-center flex flex-col w-full max-w-80 items-start gap-2"
                    >
                      <p
                        v-if="
                          form.cleaningInfo.selected == 'Квартира' &&
                          form.typesCleaning.selected == 'Поддерживающая'
                        "
                        class="text-lg sm:text-xl font-medium"
                      >
                        Комнат: {{ form.cleaningInfo.areaCount }}
                      </p>
                      <p v-else class="text-lg sm:text-xl font-medium">
                        Площадь: {{ form.cleaningInfo.areaCount }} кв/м
                      </p>
                      <p class="text-lg sm:text-xl font-medium">
                        Санузлов: {{ form.cleaningInfo.washRooms }}
                      </p>
                      <span class="text-lg sm:text-xl font-medium"
                        >Дополнительно:
                        <p
                          class="text-gray-800 text-base sm:text-lg underline"
                          v-for="(item, index) in form.additional.selected"
                          :key="index"
                        >
                          {{ item.name }}
                        </p></span
                      >
                      <p class="text-lg sm:text-xl font-medium">
                        Дата: {{ form.necessarily.date }}
                      </p>
                    </div>
                    <div
                      class="bg-dev-500 text-white flex flex-col justify-between p-2 items-center w-1/3 sm:w-1/4 rounded-xl"
                    >
                      <p class="text-xl sm:text-2xl font-medium mb-4">Итого</p>
                      <p class="text-lg sm:text-xl mb-2 font-semibold">
                        {{ totalPrice }}₽
                      </p>
                      <defButton
                        @click="sendForm"
                        type="submit"
                        class="border-2 px-5 border-white rounded-xl"
                        >Заказать</defButton
                      >
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

  <!-- if(form.cleaningInfo.selected === 'Квартира'){
      if(form.cleaningInfo.areaCount < 2) {price = 3900}
      price = 3990 + ((form.cleaningInfo.areaCount-1) * 500)
      if(form.cleaningInfo.areaCount > 4){price = 5590}
      if(form.typesCleaning.selected === 'Генеральная'){
        price = form.cleaningInfo.areaCount * 150
      } else if(form.typesCleaning.selected === 'После строительства') {
        price = form.cleaningInfo.areaCount * 240
      }
    } 
    else{ -->
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import defModal from "./UI/defModal.vue";
import defButton from "./UI/defButton.vue";

const emits = defineEmits({
  closeModal() {
    return false;
  },
});
function closeModal() {
  emits("closeModal");
}

const totalPrice = computed(() => {
  let price = 0;

  if (form.typesCleaning.selected === "Поддерживающая") {
    price = form.cleaningInfo.areaCount * 80;
  } else if (form.typesCleaning.selected === "Генеральная") {
    price = form.cleaningInfo.areaCount * 100;
  } else if (form.typesCleaning.selected === "После строительства") {
    price = form.cleaningInfo.areaCount * 240;
  } else if (form.typesCleaning.selected === "После арендатора") {
    price = form.cleaningInfo.areaCount * 250;
  }

  if (form.cleaningInfo.washRooms > 1) {
    if (form.typesCleaning.selected === "Поддерживающая") {
      price += (form.cleaningInfo.washRooms - 1) * 500;
    } else {
      price += (form.cleaningInfo.washRooms - 1) * 1500;
    }
  }
  if (form.variantsCleaning.selected !== "Обычная") {
    price = price + (price / 100) * 40;
  }

  const addings = [0];
  form.additional.selected.forEach((item) => addings.push(item.price));
  price += addings.reduce((acc, number) => acc + number);

  price = price - ((price / 100) * form.howOften.selected).toFixed();
  return price.toFixed();
});

const form = reactive({
  isCalculator: true,
  cleaningInfo: {
    selected: "Квартира",
    areaCount: 1,
    washRooms: 1,
    where: ["Квартира", "Офис", "Дом"],
  },
  variantsCleaning: {
    selected: "Обычная",
    array: ["Обычная", "Здоровый малыш", "Здоровый питомец"],
  },
  typesCleaning: {
    selected: "Поддерживающая",
    array: [
      "Поддерживающая",
      "Генеральная",
      "После строительства",
      "После арендатора",
    ],
  },
  additional: {
    selected: [],
    array: [
      {
        name: "Доставить ключи",
        price: 500,
      },
      {
        name: "Холодильник",
        price: 800,
      },
      {
        name: "Духовка",
        price: 900,
      },
      {
        name: "Помыть посуду",
        price: 600,
      },
      {
        name: "Внутри микроволновки",
        price: 700,
      },
      {
        name: "Внутри кухонных шкафов",
        price: 800,
      },
      {
        name: "Глажка",
        price: 1000,
      },
      {
        name: "Окна",
        price: 950,
      },
      {
        name: "Уборка балкона без окон",
        price: 1000,
      },
    ],
  },
  howOften: {
    selected: 0,
    array: [
      {
        name: "Раз в неделю (скидка 15%)",
        discount: 15,
      },
      {
        name: "Раз в две недели (скидка 10%)",
        discount: 10,
      },
      {
        name: "Раз в месяц (скидка 5%)",
        discount: 5,
      },
      {
        name: "Один раз",
        discount: 0,
      },
    ],
  },
  necessarily: {
    date: null,
    time: null,
    name: null,
    phone: null,
    city: null,
    house: null,
    corpus: null,
    stroenie: null,
    street: null,
    apartment: null,
    podezd: null,
    domofon: null,
    commentary: null,
  },
});

async function sendForm() {
  const res = await fetch(import.meta.env.VITE_SITE_PORT + "api/application", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(form),
  });
  if (res.ok) {
    form.text = "Заявка успешно отправлена!";
    form.isLoading = false;
  } else {
    form.text = "Произошла ошибка";
    form.isLoading = false;
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
.answer_input:checked + .input_question {
  color: white;
  padding: 5px;
  margin: -5px;
  background-color: #ffa800;
}
.answer_input {
  height: 28px;
  width: 28px;
  display: none;
}
</style>
