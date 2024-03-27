<template>
   <carousel :autoplay="5000" v-model="currentSlide" :wrap-around="true" :items-to-show="1">
     <slide class="carousel__item bg-cover bg-center" v-for="(slide, index) in slides" :key="index">
      <img :src="slide.img" class="w-96 h-auto sm:w-full sm:h-full object-cover z-10" alt="">
   </slide>
 
     <template #addons>
       <navigation />
       <pagination />
     </template>
   </carousel>
   <div class="flex flex-row items-center gap-4 mb-10">
      <button v-for="(nav, index) in slides" :key="index" @click="currentSlide = index" class="text-lg sm:text-xl z-10">{{ nav.name }}</button>
   </div>
 </template>
 
 <script>
 import 'vue3-carousel/dist/carousel.css'
 import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
 
 export default {
   name: 'App',
   components: {
     Carousel,
     Slide,
     Pagination,
     Navigation,
   },
   data(){
      return{
         slides: [
            {
               img: '/img/room.jpg',
               name: 'Комнаты'
            },
            {
               img: '/img/kitchen.jpg',
               name: 'Кухня'
            },
            {
               img: '/img/bath.jpg',
               name: 'Ванная'
            },
            {
               img: '/img/hall.jpg',
               name: 'Коридор'
            },
         ],
         currentSlide: 0
      }
   }
 }
 </script>
 
 <style scoped>
.carousel__item {
  width: 100%;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  background-color: #FEFDF5;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.carousel__slide {
  padding: 10px;
}
.carousel__prev,
.carousel__next {
   box-sizing: border-box;
}

</style>

<style>
.carousel__pagination{
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 45px;
}
.carousel__pagination-item{
   
}
.carousel__pagination-button::after{
   height: 45px;
   width: 5px;
}
</style>