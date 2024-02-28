<template>
   <div class="flex flex-col items-center">
   <headerNav :headers="headers" />
   <slot></slot>
   <footerNav :headers="headers" />
  </div>
</template>

<script setup>
import footerNav from '../navigation/footerNav.vue';
import headerNav from '../navigation/headerNav.vue';

const headers = [
  {
    name: 'Product',
    href: '#'
  },
  {
    name: 'Features',
    href: '#'
  },
  {
    name: 'Marketplace',
    href: '#'
  },
  {
    name: 'Company',
    href: '#'
  },
]
</script>

<style>

</style>