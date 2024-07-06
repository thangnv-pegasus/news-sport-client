<template>
  <main class="min-h-screen py-10">
    <div class="min-h-20 w-full bg-white shadow-arround-sm rounded-md overflow-hidden">
      <h2 class="py-3 px-5 font-semibold text-444 text-lg">Authors table</h2>
      <div class="mt-2" v-if="loading === false">
        <row-user :option="'title'"></row-user>
        <row-user
          v-for="(user, index) of usersData"
          :key="index"
          :option="'data'"
          :user="user"
        ></row-user>
        <div
          class="flex items-center justify-end px-5 py-3 text-sm font-medium text-444 gap-x-3"
          v-if="lastPage.length > 1"
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
            v-for="(item, index) of lastPage"
            :key="index"
          >
            {{ index + 1 }}
          </button>
          <button
            type="button"
            v-show="currentPage < lastPage.length"
            class="w-7 h-7 rounded-full transition-all ease-linear hover:bg-baseColor hover:text-white bg-[rgba(0,0,0,0.1)]"
          >
            <font-awesome-icon :icon="['fas', 'angle-right']" />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import RowUser from '@/components/admin/table/RowUser.vue'
import axios from 'axios'
import { computed, onMounted, reactive, ref, watch } from 'vue'
let usersData = reactive([])
const currentPage = ref(1)
const lastPage = ref([])
const loading = ref(false)

const fetchData = async () => {
  loading.value = true
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL_API}/paginate-users?page=${currentPage.value}`,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
  )
  const { users } = await response.data
  lastPage.value = new Array(users.last_page)
  usersData = users.data
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

onMounted(async () => {
  await fetchData()
})
</script>
