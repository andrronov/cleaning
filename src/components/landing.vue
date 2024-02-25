<template>
  <div class="flex flex-col items-center">
    <headerNav />
    <div class="flex flex-col justify-center items-center">
      <div class="absolute flex flex-col justify-between items-center h-52 mt-20">
        <h1 class="font-kyiv text-4xl xs:text-7xl mix-blend-overlay font-medium text-white text-center">ЭКО КЛИНИНГ</h1>
        <defButton class="mix-blend-hard-light px-5 py-3 text-lg text-[#555555] bg-[#D9D9D9]">Расчитать стоимость</defButton>
      </div>
      <img src="/public/img/clean-house-blacked.jpg" class="w-full min-h-screen object-cover" alt="">
    </div>

    <!-- 5 REASONS -->
    <div class="bg-[#FEFDF5] w-full">
      <div class="h-[867px] max-w-7xl mx-auto relative flex flex-col items-center sm:justify-center gap-4">
        <p class="sm:text-[280px] text-9xl -mt-4 text-dev-100 sm:absolute px-6 sm:px-24 rounded-3xl border-2 border-[#E5E4DC] z-20">5</p>
        <p class="uppercase sm:-mt-14 sm:ml-[154px] text-xl sm:text-2xl text-[#6A6A6A] z-20">Причин почему именно мы</p>

        <div class="flex flex-col mx-2 sm:absolute -top-8 xl:left-28 min-w-20 xl:max-w-[474px] sm:max-w-[414px] sm:left-12 rounded-3xl p-4 shadow-2xl bg-white">
          <h3 class="uppercase text-dev-300 text-xl sm:text-2xl text-center my-4">Ваш комфорт - главный приоритет</h3>
          <p class="text-txt-100 text-center px text-[15px]">Команда NaVi гарантирует вам комфорт на каждом этапе сотрудничества. Мы готовы приспособиться к вашему графику, учесть все ваши пожелания и обеспечить высокий стандарт клининга. Каждый член нашей команды обладает сертификацией МБА и обладает навыками, необходимыми для создания чистоты и комфорта в любом помещении. Наша главная миссия - создать для вас максимальный комфорт и чистоту как дома, так и на рабочем месте.</p>
        </div>
        <div class="flex flex-col mx-2 sm:absolute top-8 xl:right-16 sm:right-10 min-w-20 sm:max-w-[474px] rounded-3xl p-4 shadow-2xl bg-white">
          <h3 class="uppercase text-dev-300 text-xl sm:text-2xl text-center my-4">Абсолютная безопасность</h3>
          <p class="text-txt-100 text-center sm:text-end px text-[15px]">Наша команда стремится обеспечить благонадежность каждого исполнителя, поэтому мы тщательно проверяем их надежность в службе безопасности. Кроме того, в целях прозрачности и доверия, мы фиксируем процесс уборки с помощью видеооборудования. Каждая работа большого масштаба также курируется вашим персональным менеджером, который пребывает на объекте. Мы гарантируем безопасность вашего имущества и стремимся принести вам только положительные эмоции после нашего сотрудничества.</p>
        </div>
        <div class="flex flex-col mx-2 sm:absolute top-[340px] left-2 min-w-20 xl:max-w-[474px] sm:max-w-[384px] rounded-3xl p-4 shadow-2xl bg-white">
          <h3 class="uppercase text-dev-300 text-xl sm:text-2xl text-center my-4">Экологически чистые материалы</h3>
          <p class="text-txt-100 text-center sm:text-start px text-[15px]">Мы - NaVi, и мы гордимся тем, что мы используем инновационные пробиотические моющие средства, защитные нано-покрытия и современный профессиональный инструментарий. Наша компания также предлагает специальные предложения для семей с детьми и домашними питомцами, чтобы обеспечить полную чистоту и безопасность для всех членов вашей семьи. После того, как мы закончим уборку, ваше помещение станет примером безупречной санитарной чистоты и экологической безопасности.</p>
        </div>
        <div class="flex flex-col mx-2 sm:absolute top-96 right-2 min-w-20 xl:max-w-[474px] sm:max-w-[384px] rounded-3xl p-4 shadow-2xl bg-white">
          <h3 class="uppercase text-dev-300 text-xl sm:text-2xl text-center my-4">Любой тип клининга</h3>
          <p class="text-txt-100 text-center sm:text-end px text-[15px]">NaVi – это компания, специализирующаяся на уборке, которая находится в Москве. Мы предлагаем услуги премиум-класса по уборке различной сложности и масштаба. Наша компания оказывает услуги как для частных лиц, так и для бизнеса. Мы готовы организовать одноразовую срочную уборку квартиры или предоставить полномасштабную аутсорсинговую клининговую поддержку для вашего бизнеса. Мы уверены в нашей способности выполнить любую задачу, связанную с уборкой, и сделать это на самом высоком уровне качества.</p>
        </div>
        <div class="flex flex-col mx-2 sm:absolute sm:top-[720px] xl:top-[670px] min-w-20 sm:max-w-[404px] rounded-3xl p-4 shadow-2xl bg-white">
          <h3 class="uppercase text-dev-300 text-xl sm:text-2xl text-center my-4">Честная цена</h3>
          <p class="text-txt-100 text-center px text-[15px]">Наши цены на уборку визиток клининг-компании всегда честны и прозрачны. Мы стремимся предоставлять нашим клиентам высококачественные услуги по доступной цене. Мы учитываем все особенности и масштабы каждой задачи, чтобы предложить наиболее выгодные условия. При работе с нами вы можете быть уверены, что каждый рубль, потраченный на наши услуги, будет оправдан качеством работы и вниманием к деталям.</p>
        </div>
      </div>
    </div>
   </div>
</template>

<script setup>
import headerNav from './navigation/headerNav.vue';
import defButton from './UI/defButton.vue';
</script>