<template>
  <main class="min-h-screen">
    <div class="min-h-80 bg-white shadow-arround-sm mt-10 rounded-md overflow-hidden">
      <h2 class="text-xl font-semibold text-444 py-3 px-5">Posts table</h2>
      <row-post :option="'title'"></row-post>
      <row-post
        v-for="(post, index) of posts"
        :option="'data'"
        :post="post"
        :key="index"
      ></row-post>
      <div
        class="flex items-center justify-end px-5 py-3 text-sm font-medium text-444 gap-x-3"
        v-if="pages.length > 1"
      >
        <button
          type="button"
          v-show="currentPage > 1"
          class="w-7 h-7 rounded-full transition-all ease-linear hover:bg-baseColor hover:text-white bg-[rgba(0,0,0,0.1)]"
        >
          <font-awesome-icon :icon="['fas', 'angle-left']" />
        </button>
        <button
          type="button"
          :class="
            'w-7 h-7 rounded-full transition-all ease-linear hover:bg-baseColor hover:text-white ' +
            activePage(index + 1)
          "
          @click="currentPage = index + 1"
          v-for="(item, index) of pages"
          :key="index"
        >
          {{ index + 1 }}
        </button>
        <button
          type="button"
          v-show="currentPage < pages.length"
          class="w-7 h-7 rounded-full transition-all ease-linear hover:bg-baseColor hover:text-white bg-[rgba(0,0,0,0.1)]"
        >
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import RowPost from '@/components/admin/table/RowPost.vue'
import axios from 'axios'
import { onBeforeMount, ref, watch } from 'vue'

const currentPage = ref(1)
const pages = ref([])
const posts = ref([])
const loading = ref(false)
const fetchData = async () => {
  loading.value = true
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL_API}/paginate-posts?page=${currentPage.value}`,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
  )
  const { data } = await response.data
  posts.value = data.data
  pages.value = new Array(data.last_page)
  //   console.log(data)
  loading.value = false
}

watch(currentPage, async () => {
  await fetchData()
})
const activePage = (key) => {
  if (currentPage.value === key) {
    return 'bg-baseColor text-white'
  }
  return 'bg-[rgba(0,0,0,0.1)] text-444'
}
onBeforeMount(async () => {
  await fetchData()
})
</script>
