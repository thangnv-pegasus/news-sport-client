<script setup>
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'
import CategorySection from '@/components/CategorySection.vue'
const categories = ref({})

onBeforeMount(async () => {
  window.scrollTo(0, 0)

  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/home`)
    const { data } = await response
    categories.value = data.categories
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <main class="min-h-screen py-10">
    <section class="w-container mx-auto">
      <category-section
        v-for="(item, index) in categories"
        :key="index"
        :category="item"
      ></category-section>
    </section>
  </main>
</template>
