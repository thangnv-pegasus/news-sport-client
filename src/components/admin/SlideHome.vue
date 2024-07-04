<template>
  <swiper
    :spaceBetween="0"
    :centeredSlides="true"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :pagination="{
      clickable: true
    }"
    :navigation="true"
    :modules="[Autoplay, Navigation]"
    class="mySwiper h-full"
  >
    <swiper-slide>
      <banner-item :background-url="'bg-banner1'">
        <template #icon>
          <font-awesome-icon :icon="['fas', 'trophy']" />
        </template>
      </banner-item>
    </swiper-slide>
    <swiper-slide>
      <banner-item :background-url="'bg-banner2'">
        <template #icon>
          <font-awesome-icon :icon="['fas', 'camera-retro']" />
        </template>
        <template #title> Get started with Argon </template>
        <template #sub-title>
          There's nothing I really wanted to do in life that I wasn't able to get good at.
        </template>
      </banner-item>
    </swiper-slide>
    <swiper-slide
      ><banner-item :background-url="'bg-banner3'">
        <template #icon>
          <font-awesome-icon :icon="['fas', 'meteor']" />
        </template>
        <template #title> Faster way to create web pages </template>
        <template #sub-title>
          That's my skill. I'm not really specifically talented at anything except for the ability
          to learn.
        </template>
      </banner-item>
    </swiper-slide>
  </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import BannerItem from '@/components/admin/BannerItem.vue'
import '@/assets/auto-slide/home.css'
</script>
