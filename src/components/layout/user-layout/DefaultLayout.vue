<template>
  <HeaderComponent></HeaderComponent>

  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>

<script setup>
import HeaderComponent from '@/components/layout/user-layout/HeaderComponent.vue'
import FooterComponent from '@/components/layout/user-layout/FooterComponent.vue'
</script>
