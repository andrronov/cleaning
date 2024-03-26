<template>
  <defaultLayout>
    <div class="w-full">
      <div class="max-w-7xl mx-auto px-2 mb-12">
        <h3
          class="text-2xl text-center mb-12 font-semibold leading-7 text-dev-500 sm:truncate sm:text-3xl sm:tracking-tight mt-28"
        >
          Все услуги
        </h3>
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-3">
          <div
            v-for="product in products"
            :key="product.name"
            class="overflow-hidden bg-white rounded-3xl rounded-s-3xl shadow justify-between w-full border-2 h-auto border-dev-100 flex flex-col"
          >
            <p
              class="text-lg text-center font-semibold leading-7 text-gray-900 p-4"
            >
              {{ product.name }}
            </p>
            <p v-if="product.price"
              class="text-lg text-center font-semibold leading-5 text-gray-700 p-4"
            >
              от {{ product.price }}₽
            </p>
            <defButton
              @click="
                product.href
                  ? this.$router.push(product.href)
                  : toSection(product.section)
              "
              class="bg-dev-300 text-txt-100 rounded-none"
              >Перейти</defButton
            >
          </div>
        </div>
      </div>
    </div>
  </defaultLayout>
</template>

<script setup>
import defaultLayout from "./UI/defaultLayout.vue";
import defButton from "./UI/defButton.vue";
import { ref } from "vue";
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
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

const products = [
  {
    name: "Уборка в квартире",
    description: "3 вида уборки",
    href: "/apartment",
    icon: ChartPieIcon,
    price: 3990
  },
  {
    name: "Уборка в коттедже",
    description: "Чистым будет каждый уголок",
    href: "/cottage",
    icon: CursorArrowRaysIcon,
    price: 3990
  },
  {
    name: "Уборка в офисе",
    description: "Для комфорта ваших сотрудников",
    href: "/office",
    icon: FingerPrintIcon,
    price: 3990
  },
  {
    name: "Мойка окон",
    description: "Стекло будет блестеть!",
    href: "/windows",
    icon: SquaresPlusIcon,
    price: 4000
  },
  {
    name: "Здоровый малыш",
    description: "С заботой о самых любимых",
    href: "/kids",
    icon: ArrowPathIcon,
    price: 3303
  },
  {
    name: "Здоровый питомец",
    description: "",
    href: "/pet",
    icon: ArrowPathIcon,
    price: 2360
  },
  {
    name: 'Генеральная уборка',
    href: '/general',
    price: 13500
  },
  {
    name: 'Уборка кухни',
    href: '/kitchen',
    price: 6500
  },
  {
    name: 'Уборка санузла',
    href: '/bathroom',
    price: 6500
  },
  {
    name: 'Уборка после ремонта',
    href: '/repair',
    price: 15600
  },
  {
    name: 'Глажка белья и одежды',
    href: '/clothes',
    price: 3000
  },
];
</script>
