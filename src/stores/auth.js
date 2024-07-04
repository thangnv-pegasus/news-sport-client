import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  let auth = ref({
    token: '',
    user: {}
  })

  const active = async () => {
    const token = localStorage.getItem('token')

    if (token) {
      const response = await axios(`${import.meta.env.VITE_BASE_URL_API}/user`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      const { data } = await response
      login(data.user, token)
    }
  }

  const getUser = computed(() => {
    if (auth.value?.user) {
      return auth.value.user
    }
    return {}
  })

  const login = (user, token) => {
    auth.value.user = user
    auth.value.token = token
  }

  const updateAvatar = (avatar) => {
    auth.value.user.avatar = avatar
  }

  const logout = () => {
    auth.value = {}
  }

  const updateProfile = (user) => {
    auth.value.user = user
  }

  return { auth, active, logout, updateAvatar, updateProfile, login, getUser }
})
