<template>
  <header class="bg-white shadow-bottom-sm">
    <section class="w-container mx-auto flex items-center justify-between">
      <router-link to="/" class="block w-52 h-auto">
        <img
          src="https://staticg.sportskeeda.com/logo/brand_logos/full-vector.svg"
          alt="logo"
          class="object-cover object-center w-full h-full block"
        />
      </router-link>
      <nav class="flex items-center text-sm font-medium text-444 gap-x-5">
        <router-link
          v-for="(item, index) in categories.slice(0, 4)"
          :key="index"
          :to="'/category/' + item.id"
          class="py-4 px-2 transition-all ease-linear hover:text-baseColor"
          active-class="text-baseColor"
          exact-active-class="text-baseColor"
        >
          {{ item.name }}
        </router-link>
        <button type="button" class="relative text-base py-4 px-2 transition-all ease-linear group">
          <font-awesome-icon :icon="['fas', 'bars']" class="group-hover:text-baseColor" />
          <div
            class="absolute hidden top-full -right-2 w-40 bg-white shadow-arround-sm rounded-sm overflow-hidden group-hover:block"
          >
            <router-link
              :to="'/category/' + item.id"
              v-for="(item, index) in categories.slice(4)"
              :key="index"
              class="block text-left px-4 py-2 hover:text-baseColor"
            >
              {{ item.name }}
            </router-link>
          </div>
        </button>
      </nav>
      <div class="flex items-center text-444 gap-x-4">
        <button
          type="button"
          class="block text-sm border-[1px] border-solid border-gray-300 w-7 h-7 leading-7 text-center rounded-full bg-white transition-all ease-linear hover:bg-[rgba(0,0,0,0.05)]"
        >
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
        <router-link
          to="/create-post"
          class="block text-sm border-[1px] border-solid border-gray-300 w-7 h-7 leading-7 text-center rounded-full bg-white transition-all ease-linear hover:bg-[rgba(0,0,0,0.05)]"
        >
          <font-awesome-icon :icon="['fas', 'pen-nib']" />
        </router-link>
        <div v-show="auth" class="ml-5 relative">
          <figure
            class="w-7 h-7 overflow-hidden rounded-full cursor-pointer select-none"
            @click="showUserAction = !showUserAction"
          >
            <img
              v-bind:src="auth?.avatar"
              alt="avatar"
              class="object-cover object-center w-full h-full block"
            />
          </figure>
          <div
            class="absolute top-full mt-2 right-0 min-h-10 w-96 p-4 shadow-arround-sm bg-white rounded-sm overflow-hidden"
            v-show="showUserAction === true"
          >
            <div class="flex border-b-[1px] border-solid border-gray-300 pb-4">
              <router-link to="/profile" class="w-16 h-16 overflow-hidden rounded-full block">
                <img
                  :src="auth?.avatar"
                  alt="avatar"
                  class="w-full h-full object-cover object-center block"
                />
              </router-link>
              <div class="pl-4">
                <h2 class="font-bold select-none text-black">{{ auth?.fullname }}</h2>
                <router-link
                  to="/profile"
                  class="block text-sm lowercase underline hover:text-baseColor"
                >
                  Manage your profile
                </router-link>
              </div>
            </div>
            <button
              type="button"
              class="mt-4 block w-full py-1 rounded-full border-[1px] border-solid border-baseColor text-baseColor transition-all ease-linear duration-200 hover:border-transparent hover:text-white hover:bg-baseColor"
            >
              log out
            </button>
          </div>
        </div>
        <router-link
          to="/login"
          class="border-2 border-solid border-baseColor text-baseColor ml-5 py-1 px-5 rounded-full transition-all ease-linear hover:border-transparent hover:bg-baseColor hover:text-white"
          v-if="!auth"
        >
          Log in
        </router-link>
      </div>
    </section>
  </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.js'
import { onBeforeMount, ref } from 'vue'
const categories = ref([])
const auth = ref({})
const showUserAction = ref(false)

const getCategories = async () => {
  const fetchApi = await fetch('http://127.0.0.1:8000/api/categories')
  const { data } = await fetchApi.json()
  return data
}

onBeforeMount(async () => {
  const data = await getCategories()
  categories.value = data
  const authStore = useAuthStore()
  auth.value = authStore.auth.user
  // console.log(authStore.auth.user.avatar)
})
</script>
