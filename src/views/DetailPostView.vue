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
      </div>
      <div class="mt-10">
        <figure class="w-full h-[600px] rounded-md overflow-hidden">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-full object-cover object-center block"
          />
        </figure>
        <div v-html="post.content" class="py-5"></div>
      </div>
      <div class="mt-5">
        <h2 class="font-semibold text-xl">Comments</h2>
        <div class="flex flex-col min-h-80 overflow-y-auto">
          <comment-item
            v-for="(comment, index) of comments"
            :key="index"
            :comment="comment"
          ></comment-item>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import axios from 'axios'
import moment from 'moment'
import { onBeforeMount, ref } from 'vue'
import CommentItem from '@/components/comment/CommentItem.vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const post = ref({})
const author = ref({})
const comments = ref([])
const likeTotal = ref(0)

onBeforeMount(async () => {
  const id = router.params.id

  const response = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/post/${id}`)
  const { data } = await response.data
  post.value = data.post
  author.value = data.author
  comments.value = data.comments
  likeTotal.value = data.likeCount
})
</script>
