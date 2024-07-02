<template>
  <main class="min-h-screen py-10">
    <section class="w-container mx-auto mt-10">
      <div class="flex justify-between items-center">
        <div>
          <div class="flex items-center gap-x-5 select-none">
            <figure class="w-24 h-24 rounded-full overflow-hidden">
              <img
                :src="authStore.auth.user.avatar"
                alt="avatar"
                class="w-full h-full object-cover object-center block"
                @error="handleError"
              />
            </figure>
            <div class="tracking-wider">
              <h2 class="font-bold text-xl mb-2">{{ authStore.auth.user.fullname }}</h2>
              <p class="text-sm text-gray-600">{{ authStore.auth.user.email }}</p>
            </div>
          </div>
          <div class="flex items-center pl-28 gap-x-10 pt-1">
            <div class="">
              <p class="text-center font-bold">0</p>
              <p class="text-gray-500 text-sm">Followers</p>
            </div>
            <div class="">
              <p class="text-center font-bold">0</p>
              <p class="text-gray-500 text-sm">Following</p>
            </div>
            <div class="">
              <p class="text-center font-bold">0</p>
              <p class="text-gray-500 text-sm">Comments</p>
            </div>
          </div>
        </div>
        <div>
          <router-link
            to="/edit-profile"
            class="block w-48 text-center py-2 text-baseColor text-sm border-2 border-solid border-baseColor rounded-full my-3 font-semibold transition-all ease-linear duration-150 hover:bg-baseColor hover:text-white"
          >
            Edit profile
          </router-link>
          <button
            type="button"
            class="block w-48 text-center py-2 text-black text-sm border-2 border-solid border-black rounded-full my-3 font-semibold transition-all ease-linear duration-150 hover:bg-black hover:text-white"
          >
            Share
          </button>
        </div>
      </div>
      <div
        class="border-t-2 border-solid border-gray-200 border-b-2 mt-10 flex items-center gap-x-5"
      >
        <button type="button" :class="binddingClass(1)" @click="tabIndex = 1">Home</button>
        <button type="button" :class="binddingClass(2)" @click="tabIndex = 2">Wiki</button>
      </div>
      <div class="grid grid-cols-2_1 gap-x-10 my-10">
        <div
          class="border-[1px] border-solid border-gray-300 rounded-md overflow-hidden"
          v-if="tabIndex === 1"
        >
          <h2
            class="px-5 py-3 border-b-[1px] border-solid border-gray-300 text-base font-semibold text-444"
          >
            My posts
          </h2>
          <div class="px-5 py-3">
            <row-post
              v-for="(post, index) of posts"
              :key="index"
              :post="post"
              :index="index + 1"
              :posts="posts"
              :handleDelete="handleDelete"
              v-show="posts.length > 0"
            ></row-post>
            <p class="p-10 text-center text-gray-500" v-if="posts.length === 0">
              You not have post
            </p>
          </div>
        </div>
        <div
          class="border-[1px] border-solid border-gray-300 rounded-md overflow-hidden"
          v-if="tabIndex === 2"
        >
          <h2
            class="px-5 py-3 border-b-[1px] border-solid border-gray-300 text-base font-semibold text-444"
          >
            wiki
          </h2>
          <div class="px-5 py-3">helo</div>
        </div>
        <div
          class="border-[1px] border-solid border-gray-300 rounded-md overflow-hidden flex flex-col"
        >
          <div class="border-b-[1px] border-solid border-gray-300 flex">
            <button
              type="button"
              :class="binddingNavClass(1)"
              class="px-5 py-3 text-base font-semibold text-444 flex-1"
              @click="tabNavIndex = 1"
            >
              Followers
            </button>
            <button
              type="button"
              :class="binddingNavClass(2)"
              class="px-5 py-3 text-base font-semibold text-444 flex-1"
              @click="tabNavIndex = 2"
            >
              Following
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center text-gray-500">Not Available</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import RowPost from '@/table/RowPost.vue'
import { useAuthStore } from '@/stores/auth'
import axios from 'axios'
import useToastStore from '@/stores/toast'

const authStore = useAuthStore()
const posts = ref([])
const tabIndex = ref(1)
const tabNavIndex = ref(1)

const binddingClass = (key) => {
  if (tabIndex.value === key) {
    return 'block py-2 px-4 relative after:content-[""] after:absolute after:left-0 after:right-0 after:top-full after:h-[2px] after:bg-baseColor text-baseColor text-sm font-semibold'
  }
  return 'block py-2 px-4 relative text-444 text-sm font-semibold'
}

const binddingNavClass = (key) => {
  if (tabNavIndex.value === key) {
    return 'px-5 py-3 text-base font-semibold text-444 flex-1 relative after:content-[""] after:absolute after:left-0 after:right-0 after:top-full after:h-[2px] after:bg-baseColor text-baseColor font-semibold'
  }
  return 'px-5 py-3 text-base font-semibold text-444 flex-1 relative text-444 font-semibold'
}

const toastStore = useToastStore()
const handleDelete = async (id) => {
  const response = await axios.delete(`${import.meta.env.VITE_BASE_URL_API}/delete-post/${id}`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
  const { data } = await response
  if (data.status === 200) {
    toastStore.active('success', 'Delete post is successed')
    // eslint-disable-next-line vue/no-mutating-props
    posts.value = data.posts
  } else {
    toastStore.active('error', 'Delete post is failed')
  }
}

const handleError = (e) => {
  e.target.src = import.meta.env.VITE_BASE_URL_BE + authStore.auth.user.avatar
}

watchEffect(async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/my-posts`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    const { data } = await response
    posts.value = data.posts
  } catch (e) {
    console.log(e)
  }
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
