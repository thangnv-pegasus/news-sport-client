<template>
  <nav class="border-[1px] border-solid border-gray-300 p-5 rounded-md">
    <h2 class="bg-baseColor text-white font-bold py-2 rounded-full text-center select-none mb-5">
      Lastest News
    </h2>
    <post-short
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
      :index="index + 1"
      v-show="posts.length > 0"
    >
    </post-short>
  </nav>
</template>

<script setup>
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'
import PostShort from '@/components/product/PostShort.vue'

const props = defineProps(['id'])
const posts = ref([])

onBeforeMount(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL_API}/posts-of-category?id=${props.id}`
    )
    const { data } = await response
    posts.value = data.posts
  } catch (e) {
    console.log(e)
  }
})
</script>
