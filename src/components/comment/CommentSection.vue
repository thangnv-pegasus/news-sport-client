<template>
  <div class="flex flex-col min-h-80 overflow-y-auto">
    <form
      action=""
      method="post"
      class="flex items-center w-[580px] border-[1px] border-solid border-gray-300 my-3 rounded-full overflow-hidden"
    >
      <input
        type="text"
        name="comment-text"
        id=""
        placeholder="Enter comment..."
        v-model="text"
        class="block w-full outline-none py-2 px-4 text-sm"
      />
      <button type="submit" class="block bg-baseColor py-2 px-8 rounded-full text-white">
        <font-awesome-icon :icon="['far', 'paper-plane']" />
      </button>
    </form>
    <div class="flex flex-col-reverse">
      <comment-item
        v-for="(comment, index) of comments"
        :key="index"
        :comment="comment"
      ></comment-item>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, watchEffect } from 'vue'
import CommentItem from '@/components/comment/CommentItem.vue'

const props = defineProps(['postId'])

const comments = ref([])
const text = ref('')

watchEffect(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL_API}/comment-of-post/${props.postId}`
    )
    const { data } = await response
    comments.value = data.comments
  } catch (e) {
    console.log(e)
  }
})
</script>
