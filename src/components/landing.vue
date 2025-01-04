<template>
    <defaultLayout>
      <div class="flex flex-col justify-center items-center">
        <div class="absolute flex flex-col justify-between items-center h-52 mt-20">
          <h1 class="font-kyiv text-4xl xs:text-7xl mix-blend-overlay font-medium text-white text-center">ЭКО КЛИНИНГ</h1>
          <defButton @click="isCalculatorModalOpen = true" class="mix-blend-hard-light px-5 py-3 text-lg text-[#555555] bg-[#D9D9D9]">Расчитать стоимость</defButton>
        </div>
        <img src="/img/clean-house-blacked.jpg" class="w-full min-h-screen object-cover" alt="">
      </div>

      <calculator :isOpen="isCalculatorModalOpen" @close-modal="isCalculatorModalOpen = false" />

      <!-- 5 REASONS -->
      <div class="bg-[#FEFDF5] w-full">
        <div class="h-full sm:h-[867px] max-w-7xl mx-auto relative flex flex-col items-center sm:justify-center gap-4">
          <p class="sm:text-[280px] text-9xl -mt-4 text-dev-100 sm:absolute px-6 sm:px-24 rounded-3xl border-2 border-[#E5E4DC] z-20">5</p>
          <p class="uppercase sm:-mt-14 sm:ml-[154px] text-xl sm:text-2xl text-[#6A6A6A] z-20">Причин почему именно мы</p>

          <div class="flex flex-col mx-2 sm:absolute -top-8 xl:left-28 min-w-20 xl:max-w-[474px] sm:max-w-[414px] sm:left-12 rounded-3xl p-4 shadow-2xl bg-white">
            <h3 class="uppercase text-dev-300 text-xl sm:text-2xl text-center my-4">Ваш комфорт - главный приоритет</h3>
            <p class="text-txt-100 text-center px text-[15px]">Команда NoVa гарантирует вам комфорт на каждом этапе сотрудничества. Мы готовы приспособиться к вашему графику, учесть все ваши пожелания и обеспечить высокий стандарт клининга. Каждый член нашей команды обладает сертификацией МБА и обладает навыками, необходимыми для создания чистоты и комфорта в любом помещении. Наша главная миссия - создать для вас максимальный комфорт и чистоту как дома, так и на рабочем месте.</p>
          </div>
          <div class="flex flex-col mx-2 sm:absolute top-8 xl:right-16 sm:right-10 min-w-20 sm:max-w-[474px] rounded-3xl p-4 shadow-2xl bg-white">
            <h3 class="uppercase text-dev-300 text-xl sm:text-2xl text-center my-4">Абсолютная безопасность</h3>
            <p class="text-txt-100 text-center sm:text-end px text-[15px]">Наша команда стремится обеспечить благонадежность каждого исполнителя, поэтому мы тщательно проверяем их надежность в службе безопасности. Кроме того, в целях прозрачности и доверия, мы фиксируем процесс уборки с помощью видеооборудования. Каждая работа большого масштаба также курируется вашим персональным менеджером, который пребывает на объекте. Мы гарантируем безопасность вашего имущества и стремимся принести вам только положительные эмоции после нашего сотрудничества.</p>
          </div>
          <div class="flex flex-col mx-2 sm:absolute top-[340px] left-2 min-w-20 xl:max-w-[474px] sm:max-w-[384px] rounded-3xl p-4 shadow-2xl bg-white">
            <h3 class="uppercase text-dev-300 text-xl sm:text-2xl text-center my-4">Экологически чистые материалы</h3>
            <p class="text-txt-100 text-center sm:text-start px text-[15px]">Мы - NoVa, и мы гордимся тем, что мы используем инновационные пробиотические моющие средства, защитные нано-покрытия и современный профессиональный инструментарий. Наша компания также предлагает специальные предложения для семей с детьми и домашними питомцами, чтобы обеспечить полную чистоту и безопасность для всех членов вашей семьи. После того, как мы закончим уборку, ваше помещение станет примером безупречной санитарной чистоты и экологической безопасности.</p>
          </div>
          <div class="flex flex-col mx-2 sm:absolute top-96 right-2 min-w-20 xl:max-w-[474px] sm:max-w-[384px] rounded-3xl p-4 shadow-2xl bg-white">
            <h3 class="uppercase text-dev-300 text-xl sm:text-2xl text-center my-4">Любой тип клининга</h3>
            <p class="text-txt-100 text-center sm:text-end px text-[15px]">NoVa – это компания, специализирующаяся на уборке, которая находится в Москве. Мы предлагаем услуги премиум-класса по уборке различной сложности и масштаба. Наша компания оказывает услуги как для частных лиц, так и для бизнеса. Мы готовы организовать одноразовую срочную уборку квартиры или предоставить полномасштабную аутсорсинговую клининговую поддержку для вашего бизнеса. Мы уверены в нашей способности выполнить любую задачу, связанную с уборкой, и сделать это на самом высоком уровне качества.</p>
          </div>
          <div class="flex flex-col mx-2 mb-2 sm:absolute sm:top-[720px] xl:top-[650px] xl:mr-14 min-w-20 sm:max-w-[404px] rounded-3xl p-4 shadow-2xl bg-white">
            <h3 class="uppercase text-dev-300 text-xl sm:text-2xl text-center my-4">Честная цена</h3>
            <p class="text-txt-100 text-center px text-[15px]">Наши цены на уборку визиток клининг-компании всегда честны и прозрачны. Мы стремимся предоставлять нашим клиентам высококачественные услуги по доступной цене. Мы учитываем все особенности и масштабы каждой задачи, чтобы предложить наиболее выгодные условия. При работе с нами вы можете быть уверены, что каждый рубль, потраченный на наши услуги, будет оправдан качеством работы и вниманием к деталям.</p>
          </div>
        </div>
      </div>

      <!-- CLEAN -->
      <div class="w-full bg-dev-100">
        <div class="max-w-7xl mx-auto flex flex-col m-14 sm:mt-36 relative justify-between gap-32 sm:gap-0 min-h-96">
          <div class="flex flex-col items-center z-10">
            <h2 class="uppercase text-center text-4xl sm:text-6xl self-center bg-dev-100 font-light text-[#4A4A4A]">Уборка квартиры</h2>
            <p class="self-center text-2xl sm:text-3xl mt-10 sm:mt-6 text-[#333333] bg-dev-100 font-light">от 2966 рублей</p>
          </div>
          <img src="/img/kalendar.png" class="w-96 h-96 sm:ml-48 sm:mt-4 mix-blend-difference self-center absolute" alt="">
          <div class="flex flex-col items-center gap-4 mb-14 z-10">
            <p class="text-lg max-w-md text-center bg-dev-100 p">При заказе поддерживающей уборки 1 комнатной квартиры раз в неделю</p>
            <defButton @click="toSection('form')" class="bg-dev-500 w-40 px-5 py-2.5 text-lg">Заказать</defButton>
          </div>
        </div>
      </div>

      <!-- WHAT ARE WE DOING -->
      <div class="w-full bg-dev-50">
        <div class="max-w-7xl mt-20 mx-auto px-2 flex flex-col items-center relative">
          <h4 class="uppercase text-3xl xs:text-4xl text-center font-medium text-dev-300 mb-10">Что мы делаем</h4>
        <div class="w-full h-3/5 bottom-48 absolute border-8 border-dev-100 rounded-2xl"></div>

          <sliderComponent class="mb-32 mt-10" />
            <defButton @click="toSection('form')" class="bg-dev-300 text-2xl text-white px-5 py-2.5 mb-[113px]">Оставить заявку</defButton>
        </div>
      </div>

      <div class="w-full h-10 bg-dev-300"></div>

      <!-- POPULAR SERVICES -->
      <div class="w-full bg-dev-50">
        <div class="max-w-7xl mx-auto mt-24 flex flex-col items-center">
          <h4 class="uppercase text-3xl text-center sm:text-4xl text-dev-300 font-medium mb-20">Популярные услуги</h4>
          <div class="flex flex-row flex-wrap sm:flex-nowrap items-center justify-between w-full gap-10">
            <div v-for="(service, index) in popularServices" :key="index" class="w-full mx-2 sm:mx-0 sm:w-1/3 xl:w-1/4 bg-[#FCFCFC] border border-[#999999] shadow-2xl rounded-3xl flex flex-col items-center">
              <img :src="service.img" class="w-full" alt="service picture">
              <h3 class="uppercase text-lg font-medium mt-2">{{ service.title }}</h3>
              <p class="text-[15px] font-light mt-1 mb-4">от {{ service.price }}₽</p>
              <router-link :to="service.link">
                <defButton class="bg-dev-300 text-white w-28 mb-3">Заказать</defButton>
              </router-link>
            </div>
          </div>
          <router-link to="services">
            <defButton class="text-white w-44 mt-20 py-3 bg-dev-300 mb-28">Все услуги</defButton>
          </router-link>
        </div>
      </div>

      <!-- PRICES -->
      <div class="w-full bg-dev-100">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row min-h-64 sm:items-end items-center sm:justify-end relative">
          <div class="flex flex-col bg-white rounded-2xl p-4 order-2 shadow-2xl sm:absolute left-14 top-12 mx-2 mb-1">
            <h5 class="font-light text-dev-300 text-2xl mb-8">Тарифы и цены</h5>
            <p class="text-base text-txt-200 sm:max-w-xl xl:max-w-2xl">У нас есть различные тарифы, которые подходят для любой ситуации в вашей квартире, будь то после вечеринки, пожара или ремонта. Мы можем подобрать решение, которое подходит для холостяков, семей или владельцев домашних животных. При расчете стоимости мы учитываем площадь и количество помещений, а также местоположение дома (Москва или Московская область). Кроме того, мы учитываем срочность заказа. Наш профессиональный инструментарий позволяет предлагать услуги как частным лицам, так и владельцам офисов и коммерческих объектов. После проведения расчетов, цена фиксируется в официальном договоре. Для того, чтобы в вашей квартире всегда был порядок и чистота, достаточно лишь позвонить нам. Доверьтесь профессионалам клининговой компании NoVa!</p>
          </div>
          <img src="/img/cleaner.png" class="order-1 mix-blend-multiply max-w-80 max-h-80" alt="">
        </div>
      </div>

      <!-- OUR TEAM -->
      <div class="w-full bg-dev-50">
        <div class="max-w-7xl mt-32 mx-auto flex flex-col items-center mb-48">
          <h5 class="uppercase text-4xl text-dev-500 text-center">Наша команда</h5>
          <p class="max-w-2xl sm:max-w-3xl mt-6 text-center mb-20">Наша клининг-команда - настоящие профессионалы своего дела. Мы стремимся к безупречности в своей работе и гарантируем качественную уборку вашего помещения. Наша команда обладает богатым опытом и применяет самые современные технологии, чтобы максимально удовлетворить все ваши потребности. Мы действуем оперативно и ответственно, для обеспечения чистоты и комфорта в вашем доме или офисе.</p>
          <div class="flex sm:flex-row w-full flex-col items-center justify-center gap-8 relative">
            <div v-for="(member, index) in team" :key="index" class="flex w-72 sm:w-1/5 z-10 flex-col items-center justify-center">
              <p class="uppercase text-lg sm:text-base xl:text-lg font-medium mb-4 text-center">{{ member.name }}</p>
              <img :src="member.img" class="w-full h-96 object-cover" alt="">
            </div>
            <div class="w-60 h-60 bg-dev-100 rounded-3xl absolute blur-sm top-4 sm:top-auto sm:left-28 rotate-3"></div>
            <div class="w-60 h-60 bg-dev-100 rounded-3xl absolute blur-sm bottom-52 sm:bottom-auto sm:right-32 rotate-12"></div>
            <div class="w-60 h-60 bg-dev-100 rounded-3xl absolute blur-sm top-[330px] sm:top-auto rotate-3"></div>
          </div>
        </div>
      </div>

      <!-- SERTIFICATES -->
      <div id="sertificates" class="w-full bg-dev-50">
        <div class="max-w-7xl mx-auto">
          <h5 class="uppercase text-3xl sm:text-4xl text-dev-500 text-center mb-24">Сертификаты</h5>
          <p class="text-center text-lg text-gray-600 sm:text-xl mb-4">Нажмите, чтобы приблизить</p>
          <div class="flex flex-col sm:flex-row items-center justify-between w-full mb-12 gap-8 sm:gap-0 px-2">
            <div @click="openImg(sert.img)" v-for="(sert, index) in sertificates" :key="index" class="relative cursor-pointer flex w-40 sm:w-3/12 sm:h-44 flex-col items-center">
              <img :src="sert.img" alt="sertificate">
              <defModal :isOpen="opened" @close-modal="opened = false">
                <img :src="img" alt="">
              </defModal>
              <div class="w-full h-1/4 sm:h-14 backdrop-blur-sm absolute bottom-0 sm:-bottom-12"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- RATES -->
      <div class="w-full bg-dev-100 z-10">
        <div class="max-w-7xl mx-auto flex flex-col items-center">
          <h5 class="uppercase text-3xl xs:text-4xl text-white text-center font-bold shadow-sm mt-24 mb-24">Отзывы наших клиентов</h5>
          <div class="flex flex-col mb-8">
            <div v-for="(rate, index) in rates" :key="index" class="bg-white mx-2 rounded-3xl flex flex-col max-w-xl sm:max-w-3xl shadow-2xl justify-between gap-4 p-4" :class="index === 1 ? 'xs:translate-x-4 sm:translate-x-24 xl:translate-x-60 my-4 xs:-my-5 z-20' : 'xs:-translate-x-4 sm:-translate-x-24 xl:-translate-x-60'">
              <div class="flex flex-row items-center gap-4">
                <img :src="rate.img" class="w-14 h-14 bg-gray-500 object-cover rounded-full" alt="">
                <p class="text-lg sm:text-xl">{{ rate.name }}</p>
              </div>
              <p class="text-base sm:text-lg">{{ rate.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </defaultLayout>
</template>

<script setup>
import defButton from './UI/defButton.vue'
import defaultLayout from './UI/defaultLayout.vue'
import sliderComponent from './sliderComponent.vue'
import calculator from './calculator.vue'
import defModal from './UI/defModal.vue'
import {ref} from 'vue'

function toSection(el){
  const section = document.getElementById(el)
  section.scrollIntoView({
    behavior: 'smooth',
        block: 'start',
  })
}

const popularServices = [
  {
    title: 'Уборка квартир',
    price: 3990,
    img: '/img/kvartira-popserv.png',
    link: '/apartment'
  },
  {
    title: 'Уборка коттеджей',
    price: 3990,
    img: '/img/kottegei-popserv.png',
    link: '/cottage'
  },
  {
    title: 'Уборка офисов',
    price: 3990,
    img: '/img/ofisov-popserv.png',
    link: '/office'
  },
  {
    title: 'Мойка окон',
    price: 4000,
    img: '/img/okon-popserv.png',
    link: '/windows'
  },
]
const team = [
  {
    // name: 'Вита',
    img: '/img/vita-ui.png',
  },
  {
    // name: 'Наталья Алексеевна',
    img: '/img/natasha-ui.png',
  },
  // {
  //   name: 'Виктория Анатольевна',
  //   img: '/img/viktoria-anatolyevna.png',
  // },
  {
    // name: 'Мадина',
    img: '/img/madina-ui.png',
  },
]
const rates = [
  {
    name: 'Ольга',
    img: '/img/smilewoman.jpg',
    text: 'Хочу выразить огромную благодарность клининговой компании за их профессионализм и качественную работу! Весь наш офис блестит после их уборки. Сотрудники компании очень доброжелательны и внимательны к деталям. Мы довольны результатом и будем рекомендовать эту компанию всем нашим коллегам и друзьям!'
  },
  {
    name: 'Алевтина',
    img: '/img/smile-woman.jfif',
    text: 'Я была приятно удивлена работой NoVa! Их команда приехала вовремя, с собой привезла все необходимое оборудование и средства для уборки. Благодаря их усилиям, наш дом преобразился: все было тщательно вымыто, пыль убрана, полы вымыты до блеска. Они также оказались очень тщательными в поддержании чистоты в самых труднодоступных уголках.'
  },
  {
    name: 'Дмитрий',
    img: '/img/smiale-man.jfif',
    text: 'Клининговая компания просто спасла наш бизнес! Они выполнили уборку нашего помещения в самые кратчайшие сроки и сделали это великолепно. У них были все необходимые инструменты и средства для уборки, и они проявили профессиональный подход к работе. Все наши клиенты заметили разницу и высоко оценили чистоту и порядок. Большое спасибо компании за их эффективность и добросовестность!'
  },
]
const sertificates = [
  {
    img: '/img/sert1.jpg'
  },
  {
    img: '/img/sert2.jpg'
  },
  {
    img: '/img/sert3.jpg'
  },
]

const isCalculatorModalOpen = ref(false)

const opened = ref(false)
const img = ref(null)

function openImg(sert){
  opened.value = true
  img.value = sert
}
</script>