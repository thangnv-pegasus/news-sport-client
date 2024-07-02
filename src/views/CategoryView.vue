<template>
  <main class="py-10 min-h-screen">
    <section class="w-container mx-auto">
      <category-title :title="category.name"></category-title>
      <div class="py-10 grid grid-cols-2_1 gap-x-10">
        <div class="border-[1px] border-solid border-gray-300 rounded-md overflow-hidden p-5">
          <figure class="block w-full h-48 rounded-md overflow-hidden">
            <img
              :src="posts[0]?.image"
              alt="banner"
              class="w-full h-full object-cover object-center block"
            />
          </figure>
          <div v-show="posts.length > 0" class="grid grid-cols-2 gap-6 mt-5">
            <post-item v-for="(post, index) in posts" :key="index" :post="post"></post-item>
          </div>
          <div
            class="flex items-center justify-end text-sm gap-x-5 mt-10"
            v-show="pages.length > 1"
          >
            <button
              class="block w-8 h-8 border-[1px] border-solid border-gray-300 text-center font-medium leading-8 rounded-full hover:border-baseColor hover:text-baseColor transition-all ease-linear"
              v-show="currentPage > 1"
            >
              <font-awesome-icon :icon="['fas', 'angle-left']" />
            </button>
            <button
              type="button"
              v-for="(item, index) of pages"
              :key="index"
              :class="
                binddingPage(index + 1) +
                ' block w-8 h-8 border-[1px] border-solid border-gray-300 text-center font-medium leading-8 rounded-full  hover:border-baseColor hover:text-baseColor transition-all ease-linear'
              "
              @click="currentPage = index + 1"
            >
              {{ index + 1 }}
            </button>
            <button
              class="block w-8 h-8 border-[1px] border-solid border-gray-300 text-center font-medium leading-8 rounded-full hover:border-baseColor hover:text-baseColor transition-all ease-linear"
              v-show="currentPage < pages.length"
            >
              <font-awesome-icon :icon="['fas', 'angle-right']" />
            </button>
          </div>
        </div>
        <category-nav :id="id"></category-nav>
      </div>
    </section>
  </main>
</template>

<script setup>
import axios from 'axios'
import { onBeforeMount, onUpdated, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CategoryTitle from '@/components/CategoryTitle.vue'
import CategoryNav from '@/components/CategoryNav.vue'
import PostItem from '@/components/product/PostItem.vue'

const route = useRoute()
const posts = ref([])
const category = ref({})
const currentPage = ref(1)
const id = ref(1)
const pages = ref([])

const getdata = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL_API}/posts-category/${id.value}?page=${currentPage.value}`
  )
  const { data } = await response
  category.value = data.category
  posts.value = data.posts.data
}

const binddingPage = (index) => {
  if (index === currentPage.value) {
    return 'border-baseColor text-baseColor'
  }
  return 'border-gray-300 text-444'
}

watch([currentPage, id], async () => {
  getdata()
})

onBeforeMount(async () => {
  getdata()
})

onUpdated(() => {
  id.value = route.params.id
})
</script>
