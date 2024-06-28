<template>
  <router-link :to="'/detail-post/' + post.id" class="flex gap-x-2">
    <figure class="block w-24 h-20 overflow-hidden rounded-md">
      <img
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover object-center block"
      />
    </figure>
    <div class="flex flex-col justify-between flex-1">
      <h2
        class="text-sm text-444 line-clamp-2 font-semibold transition-all ease-linear hover:text-blue-600"
      >
        {{ post.title }}
      </h2>
      <p class="text-xs text-gray-500">{{ formatDate }}</p>
    </div>
  </router-link>
</template>

<script setup>
import moment from 'moment'
import { computed } from 'vue'
const props = defineProps(['post'])
const formatDate = computed(() => {
  return moment(props.post.created_at).format('DD/MM/YYYY')
})
</script>
