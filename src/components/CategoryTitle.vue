<template>
  <div class="flex items-center">
    <p class="w-20 h-1 bg-baseColor"></p>
    <h2 class="text-444 font-bold text-xl px-3 uppercase">{{ props.title || 'title' }}</h2>
    <p class="flex-1 h-1 bg-baseColor"></p>
  </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>
