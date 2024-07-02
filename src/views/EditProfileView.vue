<template>
  <main class="min-h-screen py-10">
    <section class="w-container mx-auto">
      <div class="flex items-start gap-x-10">
        <nav class="w-80 min-h-20 border-[1px] border-solid border-gray-300 rounded-md">
          <button
            type="button"
            class="select-none block w-full text-left py-3 px-5 border-b-[1px] border-solid border-gray-300 transition-all ease-linear hover:text-baseColor group"
          >
            <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-sm" />
            <span class="font-bold text-444 transition-all ease-linear group-hover:text-baseColor">
              Back
            </span>
          </button>
          <div class="">
            <button type="button" :class="binddingClassNav(1)" @click="tabIndex = 1">
              Basic Information
            </button>
            <button type="button" :class="binddingClassNav(2)" @click="tabIndex = 2">
              Change Password
            </button>
          </div>
        </nav>
        <div class="flex-1" v-show="tabIndex === 1">
          <div class="border-[1px] border-solid border-gray-300 overflow-hidden rounded-md p-4">
            <label for="avatar">
              <figure class="w-24 h-24 rounded-full relative cursor-pointer">
                <img
                  :src="user.avatar"
                  alt="avatar"
                  class="w-full h-full object-cover object-center block rounded-full"
                  @error="handleError"
                />
                <span
                  class="absolute bottom-0 right-0 text-baseColor w-7 h-7 text-center text-sm leading-6 bg-white border-[1px] border-solid border-baseColor rounded-full"
                >
                  <font-awesome-icon :icon="['fas', 'camera']" />
                </span>
              </figure>
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              hidden
              @change="handleChange"
              ref="inputImage"
            />
          </div>
          <form
            action=""
            method="post"
            class="block w-full border-[1px] border-solid border-gray-300 p-4 rounded-md mt-5"
            @submit.prevent="handleUpdate"
          >
            <div class="my-3">
              <label
                for="fullname"
                class="block w-full mb-1 text-sm font-semibold text-444 cursor-pointer"
              >
                Fullname
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Fullname..."
                class="block w-full outline-none border-[1px] border-solid border-gray-300 rounded-sm text-sm py-2 px-4"
                v-model="fullname"
              />
            </div>
            <div class="my-3">
              <label
                for="email"
                class="block w-full mb-1 text-sm font-semibold text-444 cursor-pointer"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="email..."
                class="block w-full outline-none border-[1px] border-solid border-gray-300 rounded-sm text-sm py-2 px-4"
                v-model="email"
              />
            </div>
            <div class="my-3">
              <label
                for="dob"
                class="block w-full mb-1 text-sm font-semibold text-444 cursor-pointer"
              >
                Date of birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                placeholder="Date of birth..."
                class="block w-full outline-none border-[1px] border-solid border-gray-300 rounded-sm text-sm py-2 px-4 cursor-pointer"
                v-model="dob"
              />
            </div>
            <div class="my-3">
              <label
                for="gender"
                class="block w-full mb-1 text-sm font-semibold text-444 cursor-pointer"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                class="block w-full outline-none border-[1px] border-solid border-gray-300 rounded-sm text-sm py-2 px-4 cursor-pointer"
                v-model="gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              class="block text-baseColor border-2 text-sm font-medium mt-5 border-solid border-baseColor w-40 py-2 rounded-full transition-all ease-linear hover:bg-baseColor hover:border-transparent hover:text-white"
            >
              Save
            </button>
          </form>
        </div>
        <div class="flex-1" v-show="tabIndex === 2">
          <category-title :title="'Change password'"></category-title>
          <form action="" method="post" @submit.prevent="handleChangePassword">
            <div class="my-3">
              <label for="pre-password" class="block my-1 text-sm text-444 font-medium">
                Old Password
              </label>
              <input
                type="password"
                name="pre-password"
                id="pre-password"
                placeholder="old password..."
                class="block w-full border-[1px] border-solid border-gray-300 text-sm py-2 px-4 rounded-sm outline-none"
                v-model="prePassword"
              />
              <p class="text-xs text-baseColor ml-1 mt-1" v-if="errors.currentPassword">
                {{ errors.currentPassword[0] }}
              </p>
            </div>
            <div class="my-3">
              <label for="new-password" class="block my-1 text-sm text-444 font-medium">
                New Password
              </label>
              <input
                type="password"
                name="new-password"
                id="new-password"
                placeholder="New password..."
                class="block w-full border-[1px] border-solid border-gray-300 text-sm py-2 px-4 rounded-sm outline-none"
                v-model="newPassword"
              />
              <p class="text-xs text-baseColor ml-1 mt-1" v-if="errors.newPassword">
                {{ errors.newPassword[0] }}
              </p>
            </div>
            <div class="my-3">
              <label for="confirm-Newpassword" class="block my-1 text-sm text-444 font-medium">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirm-Newpassword"
                id="confirm-Newpassword"
                placeholder="Confirm new password..."
                class="block w-full border-[1px] border-solid border-gray-300 text-sm py-2 px-4 rounded-sm outline-none"
                v-model="confirmNewPassword"
              />
              <p class="text-xs text-baseColor ml-1 mt-1" v-if="errors.newPassword_confirmation">
                {{ errors.newPassword_confirmation[0] }}
              </p>
            </div>
            <button
              type="submit"
              class="text-sm font-medium text-baseColor border-2 border-solid border-baseColor w-40 py-2 rounded-full mt-4 transition-all ease-linear hover:bg-baseColor hover:text-white hover:border-transparent"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import useToastStore from '@/stores/toast'
import axios from 'axios'
import { ref } from 'vue'
import CategoryTitle from '@/components/CategoryTitle.vue'

const tabIndex = ref(1)
const authStore = useAuthStore()
const user = authStore.auth.user
const fullname = ref(user.fullname)
const email = ref(user.email)
const dob = ref(user.dob)
const gender = ref(user.gender || 'other')
const inputImage = ref(null)
const prePassword = ref('')
const newPassword = ref('')
const confirmNewPassword = ref('')
const toastStore = useToastStore()
const errors = ref({})
const binddingClassNav = (index) => {
  if (index === tabIndex.value) {
    return "block w-full my-2 py-2 px-5 text-left text-baseColor select-none font-medium relative after:absolute after:content-[''] after:left-0 after:top-0 after:bottom-0 after:w-[2px] after:-translate-x-1/2 after:bg-baseColor"
  }
  return 'block w-full my-2 py-2 px-5 text-left font-medium text-444 select-none'
}

const handleUpdate = async () => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_BASE_URL_API}/update-profile`,
      {
        fullname: fullname.value,
        email: email.value,
        dob: dob.value,
        gender: gender.value
      },
      {
        method: 'PATCH',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }
    )

    const { data } = await response
    if (data.status === 200) {
      authStore.updateProfile(data.user)
      toastStore.active('success', 'Update profile is successed!')
    } else {
      toastStore.active('error', "Opps! There's something going on here!")
    }
  } catch (e) {
    toastStore.active('error', "Opps! There's something going on here!")
  }
}

const handleError = (e) => {
  e.target.src = `${import.meta.env.VITE_BASE_URL_BE + user.avatar}`
}

const handleChange = async () => {
  const formData = new FormData()
  formData.append('image', inputImage.value.files[0])
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL_API}/update-avatar`,
    formData,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'multipart/form-data'
      }
    }
  )
  const { data } = await response
  authStore.updateAvatar(data.avatar)
}

const handleChangePassword = async () => {
  try {
    errors.value = {}
    const response = await axios.patch(
      `${import.meta.env.VITE_BASE_URL_API}/change-password`,
      {
        currentPassword: prePassword.value,
        newPassword: newPassword.value,
        newPassword_confirmation: confirmNewPassword.value
      },
      {
        method: 'PATCH',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
    )
    const { data } = await response
    if (data.status === 400) {
      errors.value = data.message
    } else if (data.status === 200) {
      toastStore.active('success', 'Change password is completed!')
      prePassword.value = ''
      newPassword.value = ''
      confirmNewPassword.value = ''
    }
  } catch (e) {
    console.log(e)
  }
}
</script>
