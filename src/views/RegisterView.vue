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
        <h1 class="text-center font-bold text-444 text-lg mt-2 mb-10">Register into Sportskeeda</h1>
        <figure class="h-28 w-60 mx-auto">
          <img
            src="https://staticg.sportskeeda.com/skm/assets/images/login-img.svg"
            alt="login-img"
            class="w-full h-full object-cover object-center block"
          />
        </figure>
      </div>
      <form action="" method="post" class="block mx-auto mt-10" @submit.prevent="handelSubmit()">
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
            type="text"
            :class="
              'peer block w-full rounded border-[1px] border-solid border-gray-300 bg-white pl-4 pr-10 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-sm motion-reduce:transition-none ' +
              binddingError('fullname')
            "
            id="input-name"
            placeholder=" "
            v-model="formData.fullname"
          />
          <label
            for="input-name"
            class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 mb-0 origin-[0_0] truncate text-neutral-500 transition-all duration-300 ease-out peer-focus:top-0 peer-focus:scale-[0.8] peer-focus:text-sm motion-reduce:transition-none peer-[:not(:placeholder-shown)]:scale-[0.8] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm bg-white w-fit px-2"
            >Fullname
          </label>
          <p v-if="formErrors.fullname" class="text-red-600 text-xs mt-1 ml-1">
            {{ formErrors.fullname[0] }}
          </p>
        </div>
        <div class="relative my-5">
          <input
            :type="getTypePassword"
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
            class="absolute top-1/2 -translate-y-1/2 right-3 select-none"
            @click="typePassword.password = !typePassword.password"
          >
            <font-awesome-icon v-show="typePassword.password" :icon="['far', 'eye']" />
            <font-awesome-icon v-show="!typePassword.password" :icon="['far', 'eye-slash']" />
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
        <div class="relative my-5">
          <input
            :type="getTypeConfirmPass"
            :class="
              'peer block w-full pl-4 pr-10 rounded border-[1px] border-solid border-gray-300 bg-white py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-sm motion-reduce:transition-none ' +
              binddingError('confirmPass')
            "
            id="input-confirmPassword"
            placeholder=" "
            v-model="formData.confirmPass"
          />
          <button
            type="button"
            class="absolute top-1/2 -translate-y-1/2 right-3"
            @click="typePassword.confirmPass = !typePassword.confirmPass"
          >
            <font-awesome-icon v-show="typePassword.confirmPass" :icon="['far', 'eye']" />
            <font-awesome-icon v-show="!typePassword.confirmPass" :icon="['far', 'eye-slash']" />
          </button>
          <label
            for="input-confirmPassword"
            class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 mb-0 origin-[0_0] truncate text-neutral-500 transition-all duration-300 ease-out peer-focus:top-0 peer-focus:scale-[0.8] peer-focus:text-sm motion-reduce:transition-none peer-[:not(:placeholder-shown)]:scale-[0.8] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm bg-white w-fit px-2"
            >Confirm Password
          </label>
          <p v-if="formErrors.password_confirmation" class="text-red-600 text-xs mt-1 ml-1">
            {{ formErrors.password_confirmation[0] }}
          </p>
        </div>
        <div class="flex items-center text-444 text-sm px-5">
          <div class="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded"
              v-model="formData.check"
            />
            <label for="link-checkbox" class="ms-2 text-sm font-medium text-444">
              I agree to Sportskeeda's
              <router-link to="#" class="text-baseColor underline">Terms</router-link> and
              <router-link to="#" class="text-baseColor underline">Privacy policies.</router-link>
            </label>
          </div>
          <p></p>
        </div>
        <button
          type="submit"
          class="block w-full py-2 bg-baseColor text-white rounded-full transition-all ease-linear font-semibold mt-5 hover:bg-opacity-90"
        >
          Register
        </button>
      </form>
      <p class="text-slate-500 font-semibold my-4">
        Have an account?
        <router-link to="/login" class="text-baseColor">Login</router-link>
      </p>

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

const typePassword = ref({
  password: true,
  confirmPass: true
})
const toastStore = useToastStore()
const formErrors = ref({})
const formData = reactive({
  email: '',
  fullname: '',
  password: '',
  confirmPass: '',
  check: false
})

const binddingError = (label) => {
  let result = 'border-gray-300'
  if (label === 'email' && formErrors.value.email) {
    result = 'border-red-600'
  } else if (label === 'password' && formErrors.value.password) {
    result = 'border-red-600'
  } else if (label === 'fullname' && formErrors.value.fullname) {
    result = 'border-red-600'
  } else if (label === 'confirmPass' && formErrors.value.password_confirmation) {
    result = 'border-red-600'
  }
  return result
}

const handelSubmit = async () => {
  if (
    formData.email.trim() === '' ||
    formData.fullname.trim() === '' ||
    formData.password === '' ||
    formData.confirmPass === '' ||
    formData.check === false
  ) {
    toastStore.active('warning', 'please, enter complete information!')
  } else if (formData.password !== formData.confirmPass) {
    toastStore.active('warning', 'password or confirm password is not correct!')
  } else {
    // eslint-disable-next-line no-undef
    const fetchApi = await axios.post(`${import.meta.env.VITE_BASE_URL_API}/register`, formData)
    const { data } = await fetchApi
    // console.log(data)
    if (data?.status === 200) {
      toastStore.active('success', 'Register account is successed')
    } else if (data.status === 400) {
      // eslint-disable-next-line no-const-assign
      formErrors.value = { ...data.message }
    } else {
      toastStore.active('error', 'Register account is failed!')
    }
  }
}

const getTypePassword = computed(() => {
  if (typePassword.value.password === true) {
    return 'password'
  }
  return 'text'
})
const getTypeConfirmPass = computed(() => {
  if (typePassword.value.confirmPass === true) {
    return 'password'
  }
  return 'text'
})
</script>
