<template>
   <!-- <defaultLayout v-if="serv"> -->
   <defaultLayout v-if="serv">
      <div class="flex flex-col justify-center items-center">
         <div class="absolute flex flex-col justify-between items-center h-52 mt-20">
           <h1 class="font-kyiv text-4xl xs:text-7xl mix-blend-overlay font-medium text-white text-center uppercase">
            <!-- <slot name="title"></slot> -->
            {{ serv.title }}
           </h1>
           <defButton class="mix-blend-hard-light px-5 py-3 text-lg text-[#555555] bg-[#D9D9D9]">Заказать</defButton>
         </div>
         <img src="/img/clean-house-blacked.jpg" class="w-full min-h-screen object-cover" alt="">
       </div>

       <!-- ABOUT -->
       <div class="w-full bg-dev-50">
         <div class="max-w-7xl mx-auto my-24 px-2">
            <h3 class="uppercase text-3xl sm:text-4xl text-dev-500 text-center mb-12">Об услуге</h3>
            <p class="text-center text-txt-200 text-base sm:text-lg">
               {{ serv.about }}
            </p>
         </div>
       </div>

       <!-- TYPES -->
       <div class="w-full bg-dev-50" v-if="serv.types">
         <div class="max-w-7xl mx-auto mb-24">
            <p class="text-center text-2xl sm:text-3xl text-dev-500 mb-12">
               {{ serv.types.title }}
            </p>
            <div class="flex flex-col gap-8 px-2 sm:flex-row justify-between items-start">
               <div v-for="(type, index) in serv.types.array" :key="index" class="flex flex-col w-full sm:w-1/3 items-center gap-4">
                  <img :src="type?.img" class="mix-blend-darken" alt="">
                  <p class="text-xl sm:text-2xl my-3">{{type.title}}</p>
                  <p class="text-txt-200 text-base w-full sm:text-lg text-center">{{type.text}}</p>
               </div>
            </div>
         </div>
       </div>

       <!-- PRICES -->
       <div class="w-full bg-dev-50" v-if="serv.prices">
         <div class="mb-24 max-w-7xl mx-auto flex flex-col items-center">
            <p class="text-3xl sm:text-4xl text-center text-dev-500 uppercase mb-12">Цены</p>
            <table class="w-10/12">
               <thead class="border-b border-black">
                 <tr>
                   <th v-for="(thead, index) in serv.prices.thead" class="font-normal text-lg sm:text-xl py-2" :key="index">{{thead}}</th>
                 </tr>
               </thead>
               <tbody>
                 <tr v-for="(trow, index) in serv.prices.tbody" class="text-center" :key="index">
                   <td class="text-xl sm:text-3xl py-6 border-r border-black w-1/2"><span class="p-4 rounded-xl bg-dev-500 text-white font-semibold">{{ trow.count }}</span></td>
                   <td class="w-1/2">{{ trow.price }}</td>
                 </tr>
               </tbody>
             </table>
         </div>
       </div>

       <!-- INCLUDES -->
       <div class="w-full bg-dev-50" v-if="serv.includes">
         <div class="max-w-7xl mx-auto flex flex-col items-center mb-24">
            <p class="text-dev-500 text-3xl sm:text-4xl text-center mb-12">{{serv.includes.title}}</p>
            <div class="flex flex-col items-center gap-2 px-2">
               <div v-for="(include, index) in serv.includes.include" :key="index" class="flex flex-row gap-2 items-center p-2" :class="index % 2 == 0 ? 'border-2 border-dev-300 text-dev-500' : 'bg-dev-500 text-white'">
                  <img src="/img/accept.svg" class="w-10 h-10 mix-blend-color-burn" alt="">
                  <p class="text-lg sm:text-xl">{{ include }}</p>
               </div>
            </div>
            <defButton class="mt-12 bg-dev-500 text-white">Оставить заявку</defButton>
         </div>
       </div>

       <!-- HOW -->
       <div class="w-full bg-dev-50" v-if="serv.how">
         <div class="max-w-7xl mx-auto flex flex-col items-center mb-24 px-2">
            <h4 class="text-3xl sm:text-4xl text-center text-dev-500 font-medium mb-12">{{serv.how}}</h4>
            <!-- <p class="text-base sm:text-lg text-txt-200 text-center">{{serv.how.text}}</p> -->
            <p class="text-lg sm:text-xl mb-2 font-medium text-txt-200 text-center">Каждый наш комплекс работ выполняется поэтапно. План действий в большинстве случаев выглядит следующим образом:</p>
            <ul class="list-disc text-dev-500 max-w-5xl px-4 text-lg sm:text-xl">
               <li>Подача заявки и оформление заказа. <span class="text-txt-200">Сделать это можно через сайт или лично позвонив менеджеру компании.</span></li>
               <li>Оказание услуги. <span class="text-txt-200">В зависимости от ситуации, на объект может приехать один или несколько специалистов. Они привезут с собой все необходимое, чтобы удалить любые загрязнения. Вы можете наблюдать за их работой или заняться своими делами.</span></li>
               <li>Сдача работы. <span class="text-txt-200">После завершения клининга мастера продемонстрируют плоды своих трудов, а вам останется оценить результат и рассчитаться по счету.</span></li>
            </ul>
         </div>
       </div>

       <div class="bg-dev-500 w-full">
         <div class="max-w-7xl mx-auto flex flex-col items-center">
            <div class="text-white font-semibold flex flex-col gap-2 px-2 py-4 text-base sm:text-lg">
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
       <div class="w-full bg-dev-50" v-if="serv.questions">
         <div class="max-w-7xl mx-auto flex flex-col items-center mt-24">
            <p class="text-3xl sm:text-4xl text-center text-dev-500 mb-12 uppercase">Часто задаваемые вопросы</p>
            <div class="w-full rounded-2xl bg-dev-100">
               <Disclosure v-slot="{ open }" v-for="(quest, index) in serv.questions" :key="index">
                 <DisclosureButton
                   class="flex w-full justify-between rounded-lg bg-dev-500 px-4 py-2 text-left text-lg font-medium text-orange-100 hover:bg-orange-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75"
                 >
                   <span>{{ quest.question }}</span>
                   <ChevronUpIcon
                     :class="open ? 'rotate-180 transform' : ''"
                     class="h-5 w-5 text-orange-200"
                   />
                 </DisclosureButton>
                 <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-gray-900">
                   <p class="mb-4">{{ quest.answer }}</p>
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
import { useRoute } from 'vue-router'
import { ref } from 'vue'
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

const route = useRoute()
const services = [
   {
      path: 'kvartira',
      title: 'Уборка квартиры',
      about: 'NaVi — компания, предлагающая популярные услуги профессиональной очистки. Люди, которым недостает времени, энергии или желания бороться с грязью, которая испортила внешний вид напольных покрытий, стен, мебели, бытовой техники, плитки и т.д., заказывают их. У специалистов NaVi имеется высококачественная химия, которая помогает устранять самые упорные загрязнения, восстанавливая первоначальный вид предметов интерьера и поверхностей. Время, которое вы сэкономите на уборке, сможете потратить на более приятные вещи, такие как проведение времени с близкими или друзьями, занятие хобби или любое другое понравившееся занятие.',
      types: {
         title: 'Виды клининга в квартире',
         array: [
            {text: 'Поддержание чистоты в квартире, доме или офисе. Наши специалисты используют профессиональные средства, которые обеспечивают защиту мебели и других поверхностей от пыли и прочих загрязнений', img: '/img/brush.png', title: 'Стандартная уборка'},
            {text: 'Более глубокий набор мероприятий, который рекомендуется заказывать хотя бы раз в полгода. Он занимает почти весь день, но в результате вы получаете потрясающий результат. Мы тщательно очищаем труднодоступные места и удаляем глубокие, застарелые пятна. Генеральная уборка включает очистку мебели, окон, подоконников, обоев, плитки, сантехники, кухонной бытовой техники и т.д.', img: '/img/clean.png', title: 'Уборка после ремонта'},
            {text: 'Если в вашем доме проводились работы по ремонту, и вы сами попытались сделать уборку, вероятно, не захотите повторять это. Этот вид клининга является наиболее трудоемким. Однако наши специалисты готовы выполнить его на высшем уровне качества, и вы сможете наслаждаться чистотой и порядком, не прилагая усилий.', img: '/img/bucket.png', title: 'Генеральная уборка'},
         ]
      },
      prices: {
         thead: ['Кол-во комнат в квартире', "Стоимость"],
         tbody: [{count: '1', price: '3990₽'}, {count: '2', price: '4490₽'}, {count: '3', price: '4990₽'}, {count: '4', price: '5490₽'}, {count: '5', price: '5590₽'}]
      },
      includes: {
         title: 'Что входит в уборку',
         include: ['Очистим все доступные поверхности', 'Очистим до блеска зеркала и стеклянные поверхности', 'Протрем двери и дверные проемы', 'Заботливо расставим вещи ', 'Сменим постельное белье и заправим постель как в пятизвездочном отеле', 'Очистим и продезинфицируем выключатели, розетки и дверные ручки', 'Аккуратно соберем и сложим одежду', 'Пропылесосим ковры', 'Соберем и вынесем весь мусор', 'Вымоем и продезинфицируем всю сантехнику', 'Вымоем посуду (до 20ти минут включено)', 'Вымоем бытовую технику снаружи', 'И многое другое']
      },
      how: 'Как проходит уборка квартир',
      questions: [
         {
            question: 'Сколько человек выполняет уборку квартиры?',
            answer: 'Количество персонала зависит от площади помещения и типа уборки. Для текущей уборки квартиры площадью до 100 кв. м. будет задействован один человек.'
         },
         {
            question: 'Я могу быть уверен в сохранности своих вещей и имущества?',
            answer: 'Все работающие на компанию специалисты проходят тщательную проверку службой безопасности. Чтобы обеспечить полное доверие, мы предлагаем бесплатную услугу – видеонаблюдение. По вашему желанию весь процесс уборки будет транслироваться онлайн на ваше устройство.'
         },
         {
            question: 'Какие отличия поддерживающей уборки от генеральной?',
            answer: 'Генеральная уборка подразумевает значительно больший объём работ. Полную информацию вы найдете на нашем сайте, либо можете уточнить у менеджера при заказе услуги.'
         },
         {
            question: 'Мне нужно лично присутствовать во время клининга?',
            answer: 'Как вы хотите. Присутствовать можно, но не обязательно, главное вовремя встретить клинера, чтобы впустить в квартиру и быть дома к моменту завершения работ. Ориентировочные сроки будут оговорены заранее.'
         },
         {
            question: 'Мне нужно предоставить свои чистящие средства?',
            answer: 'Наши клинеры имеют все необходимое для полноценной уборки, в том числе чистящими средствами профессионального уровня. При регулярном применении количество пыли и клещей в доме значительно снизится, нормализуется микробный состав воздуха. Если вы пожелаете, мы выполним уборку вашими средствами, но не сможем предоставить гарантию качества.'
         },
         {
            question: 'На какое время я могу заказать уборку?',
            answer: 'Мы работаем каждый день, с 8 до 23 часов, даже в праздничные и выходные дни. Заказать услугу вы можете на любое удобное время. В том числе уборка доступна в день обращения, при наличии свободного персонала. Колл- центр осуществляет работу с 9 до 22 часов!'
         },
         {
            question: 'Отдельные туалет и ванная считаются одним помещением?',
            answer: 'Да, уборка в санузле и ванной включена в базовую стоимость услуг, стоимость не зависит от планировки помещения.'
         },
         {
            question: 'Процесс уборки домов, в которых проживают дети, отличается от обычного?',
            answer: 'Нет, но вы можете заказать дополнительную услугу, и наши клинеры проведут дополнительную дезинфекцию, которая поможет сохранить радость и здоровье малыша.'
         },
         {
            question: 'Ваши услуги доступны вне МКАДа?',
            answer: 'Да, но вам придется дополнительно оплатить стоимость проезда клинера.'
         },
         {
            question: 'Мне всё нравится, как сделать заказ?',
            answer: 'Оставьте на сайте свое имя и телефон в форме обратной связи. Наши менеджеры быстро свяжутся с вами и обсудят все детали заказа.'
         },
      ]
   }
]

const serv = services.find(ser => ser.path === route.params.id)
</script>

<style>

</style>