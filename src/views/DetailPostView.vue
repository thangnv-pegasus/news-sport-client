<template>
  <main class="py-10">
    <section class="w-container mx-auto">
      <h1 class="w-2/3 mx-auto pt-10 text-4xl text-center font-bold text-444">
        {{ post.title }}
      </h1>
      <div class="flex items-center justify-center py-4 gap-x-2 text-444 select-none">
        <p class="flex items-center gap-x-1">
          <font-awesome-icon :icon="['fas', 'user-pen']" />
          <span class="text-baseColor underline cursor-pointer">{{ author.fullname }}</span>
        </p>
        <p class="w-[1.5px] bg-gray-600 h-5"></p>
        <p class="flex items-center gap-x-1">
          <font-awesome-icon :icon="['far', 'clock']" />
          <span>{{ moment(post.created_at).format('DD/MM/YYYY') }}</span>
        </p>
        <p v-if="router.query.type === 'preview'" class="w-[1.5px] bg-gray-600 h-5"></p>
        <p v-if="router.query.type === 'preview'">
          status: <span :class="binddingStatus(post.status)">{{ post.status }}</span>
        </p>
      </div>
      <div class="mt-10">
        <figure class="w-full h-[600px] rounded-md overflow-hidden">
          <img
            :src="base_url + post.image"
            :alt="post.title"
            :onError="handleImageError"
            class="w-full h-full object-cover object-center block"
          />
        </figure>
        <div v-html="post.content" class="py-5"></div>
      </div>
      <div class="mt-5">
        <h2 class="font-semibold text-xl">Comments</h2>
        <comment-section :postId="post.id"></comment-section>
      </div>
    </section>
  </main>
</template>

<script setup>
import axios from 'axios'
import moment from 'moment'
import { onBeforeMount, ref } from 'vue'
import CommentSection from '@/components/comment/CommentSection.vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const post = ref({})
const author = ref({})
const likeTotal = ref(0)
const base_url = import.meta.env.VITE_BASE_URL_BE

const handleImageError = (e) => {
  e.target.src = post.value.image
}

const binddingStatus = (status) => {
  if (status === 'accept') {
    return 'text-green-500 font-semibold'
  } else if (status === 'reject') {
    return 'text-baseColor font-semibold'
  } else {
    return 'text-orange-500 font-semibold'
  }
}

onBeforeMount(async () => {
  window.scrollTo(0, 0)
  const id = router.params.id
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/post/${id}`)
  const { data } = await response.data
  post.value = data.post
  author.value = data.author
  likeTotal.value = data.likeCount
})
</script>
