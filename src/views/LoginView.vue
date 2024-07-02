<template>
  <main class="min-h-screen flex items-center justify-center">
    <div class="w-[480px] p-10 my-10">
      <div>
        <figure class="block h-6 w-60 mx-auto">
          <img
            src="https://staticg.sportskeeda.com/logo/brand_logos/full-vector.svg"
            alt="login-img"
            class="w-full h-full object-cover object-center block"
          />
        </figure>
        <h1 class="text-center font-bold text-444 text-lg mt-2 mb-10">Login into Sportskeeda</h1>
        <figure class="h-28 w-60 mx-auto">
          <img
            src="https://staticg.sportskeeda.com/skm/assets/images/login-img.svg"
            alt="login-img"
            class="w-full h-full object-cover object-center block"
          />
        </figure>
      </div>
      <form action="" method="post" class="block mx-auto mt-10" @submit.prevent="handleSubmit()">
        <div class="relative my-5">
          <input
            type="email"
            :class="
              'peer block w-full rounded border-[1px] border-solid border-gray-300 bg-white pl-4 pr-10 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-sm motion-reduce:transition-none ' +
              binddingError('email')
            "
            id="input-email"
            placeholder=" "
            required
            v-model="formData.email"
          />
          <label
            for="input-email"
            class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 mb-0 origin-[0_0] truncate text-neutral-500 transition-all duration-300 ease-out peer-focus:top-0 peer-focus:scale-[0.8] peer-focus:text-sm motion-reduce:transition-none peer-[:not(:placeholder-shown)]:scale-[0.8] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm bg-white w-fit px-2"
            >Email
          </label>
          <p v-if="formErrors.email" class="text-red-600 text-xs mt-1 ml-1">
            {{ formErrors.email[0] }}
          </p>
        </div>
        <div class="relative my-5">
          <input
            :type="getType"
            :class="
              'peer block w-full pl-4 pr-10 rounded border-[1px] border-solid border-gray-300 bg-white py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-sm motion-reduce:transition-none ' +
              binddingError('password')
            "
            id="input-password"
            placeholder=" "
            v-model="formData.password"
          />
          <button
            type="button"
            class="absolute top-1/2 -translate-y-1/2 right-3"
            @click="typePassword = !typePassword"
          >
            <font-awesome-icon v-show="typePassword" :icon="['far', 'eye']" />
            <font-awesome-icon v-show="!typePassword" :icon="['far', 'eye-slash']" />
          </button>
          <label
            for="input-password"
            class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 mb-0 origin-[0_0] truncate text-neutral-500 transition-all duration-300 ease-out peer-focus:top-0 peer-focus:scale-[0.8] peer-focus:text-sm motion-reduce:transition-none peer-[:not(:placeholder-shown)]:scale-[0.8] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm bg-white w-fit px-2"
            >Password
          </label>
          <p v-if="formErrors.password" class="text-red-600 text-xs mt-1 ml-1">
            {{ formErrors.password[0] }}
          </p>
        </div>
        <button
          type="submit"
          class="block w-full py-2 bg-baseColor text-white rounded-full transition-all ease-linear font-semibold mt-8 hover:bg-opacity-90"
        >
          Sign in
        </button>
      </form>
      <div class="flex justify-between items-center text-sm py-3">
        <p class="text-slate-500 font-semibold">
          New user? <router-link to="/register" class="text-baseColor">Register</router-link>
        </p>
        <router-link to="" class="text-baseColor font-semibold">Forgot password?</router-link>
      </div>

      <div class="flex items-center pb-5">
        <div class="flex-1 h-[1px] bg-gray-300"></div>
        <div class="uppercase font-semibold text-444 px-2 text-sm select-none">or</div>
        <div class="flex-1 h-[1px] bg-gray-300"></div>
      </div>
      <button
        type="button"
        class="flex items-center justify-center w-full border-[1px] border-solid border-gray-300 py-2 rounded-full my-3 hover:bg-gray-50"
      >
        <icon-google></icon-google>
        <p class="text-[#666] font-semibold mx-2">Sign in with Google</p>
      </button>
      <button
        type="button"
        class="flex items-center justify-center w-full border-[1px] border-solid border-gray-300 py-2 rounded-full my-3 hover:bg-gray-50"
      >
        <icon-facebook></icon-facebook>
        <p class="text-[#666] font-semibold mx-2">Sign in with Google</p>
      </button>
    </div>
  </main>
</template>

<script setup>
import IconGoogle from '@/components/icons/IconGoogle.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import { computed, reactive, ref } from 'vue'
import useToastStore from '@/stores/toast'
import axios from 'axios'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'

const typePassword = ref(true)
const toastStore = useToastStore()
const authStore = useAuthStore()

const formData = reactive({
  email: '',
  password: ''
})

const formErrors = ref({})
const getType = computed(() => {
  if (typePassword.value === true) {
    return 'password'
  }
  return 'text'
})

const handleSubmit = async () => {
  if (formData.email.trim() === '' || formData.password === '') {
    toastStore.active('warning', 'Please enter completed email or password')
  } else {
    const fetchData = await axios.post(`${import.meta.env.VITE_BASE_URL_API}/login`, formData)
    const { data } = await fetchData
    if (data && data?.status === 200 && data.user) {
      localStorage.setItem('token', data.token)
      authStore.login(data.user, data.token)
      router.push('/')
    } else {
      formErrors.value = { ...data.errors }
      toastStore.active('warning', 'Sign-in is failed! Please check errors')
    }
  }
}

const binddingError = (label) => {
  let result = 'border-gray-300'
  if (label === 'email' && formErrors.value.email) {
    result = 'border-red-500'
  } else if (label === 'password' && formErrors.value.password) {
    result = 'border-red-500'
  }
  return result
}
</script>
