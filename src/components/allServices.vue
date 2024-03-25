<template>
  <defaultLayout>
    <div class="w-full">
      <div class="max-w-7xl mx-auto px-2">
        <h3
          class="text-2xl text-center mb-12 font-semibold leading-7 text-dev-500 sm:truncate sm:text-3xl sm:tracking-tight mt-20"
        >
          Все услуги
        </h3>
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-3">
          <div
            v-for="product in products"
            :key="product.name"
            class="overflow-hidden bg-white rounded-3xl shadow w-full border-2 border-dev-100 flex flex-col"
          >
            <p
              class="text-lg text-center font-semibold leading-7 text-gray-900 p-4"
            >
              {{ product.name }}
            </p>
            <defButton
              @click="
                product.href
                  ? this.$router.push(product.href)
                  : toSection(product.section)
              "
              class="bg-dev-300 text-txt-100"
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
  },
  {
    name: "Уборка в коттедже",
    description: "Чистым будет каждый уголок",
    href: "/cottage",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Уборка в офисе",
    description: "Для комфорта ваших сотрудников",
    href: "/office",
    icon: FingerPrintIcon,
  },
  {
    name: "Мойка окон",
    description: "Стекло будет блестеть!",
    href: "/windows",
    icon: SquaresPlusIcon,
  },
  {
    name: "Здоровый малыш",
    description: "С заботой о самых любимых",
    href: "/kids",
    icon: ArrowPathIcon,
  },
  {
    name: "Здоровый питомец",
    description: "",
    href: "/pet",
    icon: ArrowPathIcon,
  },
  {
    name: "Все услуги",
    description: "",
    href: "/services",
    icon: ArrowPathIcon,
  },
];
</script>
