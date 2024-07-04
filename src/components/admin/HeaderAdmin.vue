<template>
  <header>
    <section class="flex justify-between items-center">
      <h1 class="text-white font-medium text-xl opacity-90">{{ route.name }}</h1>
      <div class="flex items-center gap-x-5">
        <form
          action=""
          method="get"
          class="flex bg-white border-[1px] border-solid border-gray-300 rounded-md overflow-hidden"
        >
          <button type="submit" class="block px-3 text-sm">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </button>
          <input
            type="text"
            name=""
            id=""
            class="outline-none bg-transparent block py-2 pl-1 pr-3 text-sm text-444"
            placeholder="Search..."
          />
        </form>
        <button type="button" class="block text-white text-lg">
          <font-awesome-icon :icon="['far', 'bell']" />
        </button>
        <button type="button" class="flex items-center gap-x-1">
          <figure class="w-8 h-8 rounded-full overflow-hidden">
            <img :src="user.avatar" :alt="user.fullname" @error="handleError" />
          </figure>
          <p class="text-white opacity-90 font-medium">{{ user.fullname }}</p>
        </button>
      </div>
    </section>
  </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'

const route = useRoute()
const authStore = useAuthStore()
const user = authStore.getUser

const handleError = (e) => {
  e.target.src = import.meta.env.VITE_BASE_URL_API + user.avatar
}
</script>
