<template>
  <div class="bg-[#f5f5f5] min-h-screen max-w-full">
    <nav-bar></nav-bar>
    <div class="h-72 bg-blue-800 absolute left-0 right-0 top-0 z-0"></div>
    <div class="pl-80 relative pt-5">
      <section class="p-5">
        <header-admin></header-admin>
        <router-view></router-view>
        <footer-admin></footer-admin>
      </section>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/admin/NavBar.vue'
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue'
import FooterAdmin from '@/components/admin/FooterAdmin.vue'
</script>
