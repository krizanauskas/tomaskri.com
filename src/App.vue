<script setup>
import { RouterView } from 'vue-router'
import TNavigation from './components/Navigation.vue'
import TFooter from './components/Footer.vue'
import { register } from 'swiper/element/bundle'

register()
</script>

<template>
  <TNavigation />
  <RouterView />
  <TFooter />
</template>
